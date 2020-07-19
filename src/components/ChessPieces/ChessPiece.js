import { util } from "../../helpers/util";

class ChessPiece {
  constructor(player, piece) {
    const iconURL = player === 1 ? piece.whiteUrl : piece.blackUrl;
    this.player = player;
    this.name = piece.name;
    this.style = { background: `url(${iconURL}) no-repeat` };
  }

  getPlayer() {
    return this.player;
  }

  //TODO: refactor getPath funcs
  getStraightPath = (from, to) => {
    const inRow = util.sameRow(from, to);
    const path = [];
    let nextSquare;
    if (inRow) {
      if (from <= to) {
        while (from <= to) {
          nextSquare = util.goEast(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
          if (from >= to) break;
        }
      } else {
        while (from >= to) {
          nextSquare = util.goWest(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
          if (from <= to) break;
        }
      }
    } else {
      if (from <= to) {
        while (from <= to) {
          nextSquare = util.goSouth(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
          if (from >= to) break;
        }
      } else {
        while (from >= to) {
          nextSquare = util.goNorth(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
          if (from <= to) break;
        }
      }
    }
    return path.includes(to) ? path : [];
  };

  getDiagonalPath = (from, to) => {
    const path = [],
      toRow = util.getRow(to),
      toCol = util.getCol(to),
      fromRow = util.getRow(from),
      fromCol = util.getCol(from);
    let nextSquare;
    if (fromRow > toRow) {
      if (fromCol > toCol) {
        //nw
        while (from > -1 && from > to) {
          nextSquare = util.goNW(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
        }
      } else if (fromCol < toCol) {
        //ne
        while (from > -1 && from > to) {
          nextSquare = util.goNE(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
        }
      }
    } else if (fromRow < toRow) {
      if (fromCol > toCol) {
        //sw
        while (from > -1 && from < to) {
          nextSquare = util.goSW(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
        }
      } else if (fromCol < toCol) {
        //se
        while (from > -1 && from < to) {
          nextSquare = util.goSE(from);
          if (nextSquare >= 0) {
            path.push(nextSquare);
            from = nextSquare;
          } else break;
        }
      }
    }
    return path.includes(to) ? path : [];
  };

  allDiagonalMoves = loc => {
    const moves = [];
    const origLoc = loc;
    while (util.isValid(loc)) {
      loc = util.goNW(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;
    while (util.isValid(loc)) {
      loc = util.goNE(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;
    while (util.isValid(loc)) {
      loc = util.goSE(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;
    while (util.isValid(loc)) {
      loc = util.goSW(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    return moves;
  };

  allStraightMoves = loc => {
    const moves = [];
    const origLoc = loc;
    while (util.isValid(loc)) {
      loc = util.goNorth(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;

    while (util.isValid(loc)) {
      loc = util.goSouth(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;

    while (util.isValid(loc)) {
      loc = util.goEast(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;

    while (util.isValid(loc)) {
      loc = util.goWest(loc);
      if (loc > -1) {
        moves.push(loc);
      } else break;
    }
    loc = origLoc;
    return moves;
  };
}

export default ChessPiece;
