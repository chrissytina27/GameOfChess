import { constants as c } from "./constants";
export const util = {
  diffTeam: (piece1, piece2) => piece1.getPlayer() !== piece2.getPlayer(),
  isEven: num => num % 2 === 0,
  getRow: square => Math.floor(square / 8),
  getCol: square => square % 8,
  rowDiff: (from, to) => Math.abs(util.getRow(from) - util.getRow(to)),
  colDiff: (from, to) => Math.abs(util.getCol(from) - util.getCol(to)),
  sameRow: (from, to) => Math.floor(from / 8) === Math.floor(to / 8),
  sameCol: (from, to) => util.colDiff(from, to) === 0,
  isValid: square => square >= 0 && square < 64,
  isValidMove: toPc => (toPc && toPc.name === c.pieceNames.king ? false : true),
  goNorth: from => (from - 8 > -1 ? from - 8 : -1),
  goSouth: from => (from + 8 < 64 ? from + 8 : -1),
  goEast: from => {
    const east = from + 1;
    return util.isValid(east) && util.sameRow(from, east) ? east : -1;
  },
  goWest: from => {
    const west = from - 1;
    return util.isValid(west) && util.sameRow(from, west) ? west : -1;
  },
  goNE: from => {
    const ne = from - 7,
      rowDiff = util.rowDiff(ne, from);
    return util.isValid(ne) && rowDiff === 1 ? ne : -1;
  },
  goNW: from => {
    const nw = from - 9,
      rowDiff = util.rowDiff(nw, from);
    return util.isValid(nw) && rowDiff === 1 ? nw : -1;
  },
  goSE: from => {
    const se = from + 9,
      rowDiff = util.rowDiff(se, from);
    return util.isValid(se) && rowDiff === 1 ? se : -1;
  },
  goSW: from => {
    const sw = from + 7,
      rowDiff = util.rowDiff(sw, from);
    return util.isValid(sw) && rowDiff === 1 ? sw : -1;
  },
  LShape: (x, y, sideways) => {
    const rowDiff = sideways ? 1 : 2,
      colDiff = sideways ? 2 : 1;
    return util.rowDiff(x, y) === rowDiff && util.colDiff(x, y) === colDiff;
  },
  verticalL: (x, y) => util.LShape(x, y, false),
  horizontalL: (x, y) => util.LShape(x, y, true),
  squareName: square => {
    const row = util.getRow(square) + 1,
      col = util.getCol(square),
      dec = col + 65,
      letter = String.fromCharCode(dec);
    return letter + row;
  },
  getKingIndex: (board, currentPlayer) => {
    const kingIndex = board.findIndex(
      (square, index) =>
        square &&
        square.piece.name === c.pieceNames.king &&
        square.piece.getPlayer() === currentPlayer
    );
    return kingIndex;
  },
  clearPath: (path, fromPiece, board) => {
    return path.every((square, index) => {
      if (index === path.length - 1) {
        if (board[square] && util.diffTeam(fromPiece, board[square].piece))
          return true;
        else if (!board[square]) return true;
      } else if (!board[square]) return true;
      return false;
    });
  },
  isChecker: (square, index, king, kingIndex, currentPlayer, board) => {
    if (square && square.piece.getPlayer() !== currentPlayer) {
      const otherPlayerPiece = square.piece;
      var path =
        otherPlayerPiece.name !== c.pieceNames.pawn
          ? otherPlayerPiece.getPath(otherPlayerPiece, null, index, kingIndex)
          : otherPlayerPiece.killPath(otherPlayerPiece, king, index, kingIndex);
      if (path.length) {
        if (util.clearPath(path, otherPlayerPiece, board)) {
          const foundKing = path.findIndex(square => square === kingIndex);
          if (foundKing > -1) return true;
        }
      }
    }
    return false;
  },
  isCheck: (currentPlayer, board) => {
    var check = false;
    const kingIndex = util.getKingIndex(board, currentPlayer);
    const king = board[kingIndex].piece;
    board.every((square, index) => {
      const isChecker = util.isChecker(
        square,
        index,
        king,
        kingIndex,
        currentPlayer,
        board
      );
      if (isChecker) check = true;
      return !isChecker;
    });
    return check;
  },
  checkKings: (currentPlayer, board) => {
    const otherPlayer = currentPlayer ? 0 : 1;
    const isCurrentPlayerInCheck = util.isCheck(currentPlayer, board);
    const isOtherPlayerInCheck = util.isCheck(otherPlayer, board);
    return currentPlayer
      ? [isOtherPlayerInCheck, isCurrentPlayerInCheck]
      : [isCurrentPlayerInCheck, isOtherPlayerInCheck];
  },
  isCheckmate: (currentPlayer, board) => {
    var checkmate = true;
    var futureBoard = board.slice();
    const isCheck = util.isCheck(currentPlayer, board);
    if (!isCheck) return false;

    board.forEach((square, boardIndex) => {
      if (square && square.piece.getPlayer() === currentPlayer) {
        const piece = square.piece;
        const allMoves = piece.allMoves(boardIndex);
        allMoves.forEach((move, moveIndex) => {
          const path = piece.getPath(piece, null, boardIndex, move);
          if (path.length) {
            const clearPath = util.clearPath(path, piece, board);
            if (clearPath) {
              futureBoard = board.slice();
              futureBoard[move] = { piece };
              futureBoard[boardIndex] = null;
              const isCheck = util.isCheck(currentPlayer, futureBoard);
              if (!isCheck) checkmate = false;
            }
          }
        });
      }
    });
    return checkmate;
  },
  isStalemate: (currentPlayer, board) => {
    var stalemate = true;
    var futureBoard = board.slice();
    const isCheck = util.isCheck(currentPlayer, board);
    if (isCheck) return false;
    board.forEach((square, boardIndex) => {
      if (square && square.piece.getPlayer() === currentPlayer) {
        const piece = square.piece;
        const allMoves = piece.allMoves(boardIndex);
        allMoves.forEach((move, moveIndex) => {
          const path = piece.getPath(piece, null, boardIndex, move);
          if (path.length) {
            const clearPath = util.clearPath(path, piece, board);
            if (clearPath) {
              futureBoard = board.slice();
              futureBoard[move] = { piece };
              futureBoard[boardIndex] = null;
              const isCheck = util.isCheck(currentPlayer, futureBoard);
              if (!isCheck) stalemate = false;
            }
          }
        });
      }
    });
    return stalemate;
  }
};
