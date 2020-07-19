import React from "react";
import PropTypes from "prop-types";
import { whitePlayer, blackPlayer } from "../helpers/pieces";
import Table from "./Table";

const GameInfo = props => {
  const renderDot = player =>
    player === props.playerTurn ? <span className="dot" /> : <span />;

  const graveyardTxt =
    ", please select a piece from the graveyard to replace your pawn.";
  const invalidMove = props.invalidMove ? "Invalid move!" : "";
  const stalemate = props.stalemate ? "Stalemate!" : "";
  const checkmate =
    props.checkmate === 1
      ? "Checkmate! Black wins!"
      : props.checkmate === 0
      ? "Checkmate! White wins!"
      : "";
  const graveyardPick = props.graveyardPick
    ? props.playerTurn
      ? `White ${graveyardTxt}`
      : `Black ${graveyardTxt}`
    : "";

  return (
    <div className="nav-wrapper box2">
      <div className="nav1">
        <div className="icon">
          <img
            className="player-icon1"
            src={whitePlayer}
            alt="White Player Logo"
          />
        </div>
      </div>
      <div className="nav2">{renderDot(1)}</div>
      <div className="nav3">
        <div className="check">{graveyardPick}</div>
        <div className="check">{invalidMove}</div>
        <div className="check">{checkmate}</div>
        <div className="check">{stalemate}</div>
        <div className="table-box">
          <Table players={props.players} />
        </div>
      </div>
      <div className="nav6">
        <div className="icon-dot">
          <img
            className="player-icon2"
            src={blackPlayer}
            alt="Black Player Logo"
          />
        </div>
      </div>
      <div className="nav7"> {renderDot(0)}</div>
      <div className="nav8">
        <button onClick={props.endGame}>End Game</button>
        <button onClick={props.resetGame}>Reset Game</button>
      </div>
    </div>
  );
};
GameInfo.propTypes = {
  playerTurn: PropTypes.number,
  graveyardPick: PropTypes.bool,
  check: PropTypes.array,
  checkmate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  invalidMove: PropTypes.bool,
  staleMate: PropTypes.bool,
  endGame: PropTypes.func,
  resetGame: PropTypes.func,
  players: PropTypes.array
};
export default GameInfo;
