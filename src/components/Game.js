import React from "react";
import Board from "./Board";
import initialState from "../helpers/initialBoard";
import "../css/Board.css";
import Player from "./Player";
import GameInfo from "./GameInfo";
import LocalStorage from "./LocalStorage";
import { util } from "../helpers/util";
import { constants as c } from "../helpers/constants";

class Game extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    const player1 = state && state.player1;
    const player2 = state && state.player2;
    this.state = initialState(player1, player2);
  }
  componentDidMount() {
    this.setState(
      LocalStorage.getLastState(this.playerName(0), this.playerName(2))
    );
  }

  playerName(playerNum) {
    const { players } = this.state;
    return playerNum ? players[1].name : players[0].name;
  }

  componentDidUpdate() {
    LocalStorage.set(this.state, this.playerName(0), this.playerName(1));
  }

  endGame = () => {
    LocalStorage.clear(this.playerName(0), this.playerName(1));
    this.props.history.push({ pathname: "/" });
  };

  resetGame = () => {
    const p0 = this.playerName(0);
    const p1 = this.playerName(1);
    LocalStorage.clear(p0, p1);
    this.setState(initialState(p0, p1));
  };

  isTurn = piece => piece.getPlayer() === this.getTurn();

  getTurn = () => (this.state.moves + 1) % 2;

  resurrectPiece = piece => {
    const currentPlayer = piece.getPlayer();
    const otherPlayer = currentPlayer ? 0 : 1;
    const { players } = this.state;
    const graveyard = players[otherPlayer].graveyard.slice();
    const board = this.state.board.slice();
    const lastRow = currentPlayer ? 7 : 0;
    const pawnIndex = board.findIndex(
      (cp, i) =>
        cp && cp.piece.name === c.pieceNames.pawn && util.getRow(i) === lastRow
    );
    const pawn = board[pawnIndex].piece;
    board[pawnIndex] = { piece };
    const graveyardIndex = graveyard.findIndex(
      (gp, i) => gp.name === piece.name
    );
    graveyard[graveyardIndex] = pawn;
    players[otherPlayer].graveyard = graveyard;
    players[currentPlayer].graveyardPick = false;
    this.setState({
      board,
      moves: this.state.moves + 1,
      players
    });
  };

  updateGame = (from, to) => {
    const board = this.state.board.slice();
    const fromPiece = board[from] && board[from].piece;
    if (from === to || !this.isTurn(fromPiece) || this.state.stalemate) return;
    var isPawnPromo = false,
      checkmate = false,
      checkState = false;
    const currentPlayer = fromPiece.getPlayer(),
      { players } = this.state,
      otherPlayer = currentPlayer ? 0 : 1,
      toPiece = board[to] && board[to].piece,
      path = fromPiece.getPath(fromPiece, toPiece, from, to);

    if (path.length) {
      if (util.clearPath(path, fromPiece, board)) {
        //future board
        board[to] = { piece: fromPiece };
        board[from] = null;

        //check for stalemate
        var stalemate = util.isStalemate(currentPlayer, board);
        if (!stalemate) stalemate = util.isStalemate(otherPlayer, board);

        //if player is in check w/ future board, don't let them move
        checkState = util.checkKings(currentPlayer, board);
        if (checkState[currentPlayer] || checkState[otherPlayer]) {
          checkmate = util.isCheckmate(currentPlayer, board);
          if (checkmate) checkmate = currentPlayer;
          else {
            checkmate = util.isCheckmate(otherPlayer, board);
            if (checkmate) checkmate = otherPlayer;
          }
          if (!checkmate && checkState[currentPlayer]) {
            this.setState({
              invalidMove: true
            });
            return;
          }
        }
        if (toPiece) players[currentPlayer].graveyard.push(toPiece);
        if (fromPiece.name === c.pieceNames.pawn) {
          if (fromPiece.isFirstMove()) fromPiece.setFirstMove();
          else if (fromPiece.isPawnPromotion(to)) {
            if (players[otherPlayer].graveyard.length) isPawnPromo = true;
          }
        }
        players[currentPlayer].graveyardPick = isPawnPromo;
        players[currentPlayer].moves.push({ from, to });

        this.setState({
          board,
          moves: isPawnPromo ? this.state.moves : this.state.moves + 1,
          players,
          kingAttacked: checkState,
          invalidMove: false,
          stalemate,
          checkmate
        });
      }
    }
  };

  render() {
    const turn = this.getTurn();
    const { players } = this.state;
    const { graveyardPick } = players[turn];
    const gameInfo = {
      check: this.state.kingAttacked,
      checkmate: this.state.checkmate,
      invalidMove: this.state.invalidMove,
      staleMate: this.state.stalemate
    };

    return (
      <div className="wrapper">
        <div className="box box1">
          <Player
            name={players[1].name}
            graveyard={players[1].graveyard}
            graveyardPick={players[0].graveyardPick}
            resurrectPiece={this.resurrectPiece}
          />
        </div>
        <GameInfo
          playerTurn={turn}
          graveyardPick={graveyardPick}
          {...gameInfo}
          endGame={this.endGame}
          resetGame={this.resetGame}
          players={players}
        />
        <div className="box box3">
          <span>White Player: {players[1].name}</span>
          <Board
            pieces={this.state.board}
            updateGame={this.updateGame}
            disabled={graveyardPick}
          />
          <span>Black Player: {players[0].name}</span>
        </div>
        <div className="box box4">
          <Player
            name={players[0].name}
            graveyard={players[0].graveyard}
            graveyardPick={players[1].graveyardPick}
            resurrectPiece={this.resurrectPiece}
          />
        </div>
      </div>
    );
  }
}
export default Game;
