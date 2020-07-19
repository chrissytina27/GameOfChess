import { unserialize } from "../helpers/initialBoard";
const LocalStorage = {
  getLastState: (player1, player2) => {
    if (player1 === "" && player2 === "") {
      let lastPlayers = localStorage.getItem(`lastPlayers`);
      if (lastPlayers && lastPlayers !== "") {
        const separatorIndex = lastPlayers.indexOf("-");
        player1 = lastPlayers.slice(0, separatorIndex);
        player2 = lastPlayers.slice(separatorIndex + 1, lastPlayers.length);
      }
    }

    var localStore = localStorage.getItem(`game${player1 + player2}`);
    if (localStore) {
      localStore = JSON.parse(localStore);
      const stringBoard = localStore.board;
      const board = Array(64).fill(null);
      stringBoard.forEach((square, index) => {
        if (square && square.piece) {
          const cp = unserialize(square.piece.name, square.piece.player);
          board[index] = { piece: cp, moves: [] };
        }
      });
      return {
        board,
        moves: localStore.moves,
        players: localStore.players,
        kingAttacked: localStore.kingAttacked,
        checkmate: localStore.checkmate,
        invalidMove: localStore.invalidMove,
        stalemate: localStore.stalemate
      };
    }
  },
  set: (state, player1, player2) => {
    localStorage.setItem(`game${player1 + player2}`, JSON.stringify(state));
    localStorage.setItem("lastPlayers", `${player1}-${player2}`);
  },
  clear: (player1, player2) => {
    localStorage.removeItem(`game${player1 + player2}`);
  }
};
export default LocalStorage;
