import ChessPiece from "./ChessPiece";
import { pieces } from "../../helpers/pieces";
import { util } from "../../helpers/util";

export default class Knight extends ChessPiece {
  constructor(player) {
    super(player, pieces.knight);
    this.validMoves = pieces.knight.validMoves;
  }

  allMoves = loc => {
    const moves = [];
    const addIfValid = (loc, newLoc, fn) => {
      if (util.isValid(newLoc) && fn(loc, newLoc)) moves.push(newLoc);
    };
    this.validMoves.forEach(val => {
      var newLocN = loc + val.steps,
        newLocS = loc - val.steps;
      addIfValid(loc, newLocN, val.fn);
      addIfValid(loc, newLocS, val.fn);
    });
    return moves;
  };

  getPath = (fromPiece, toPiece, from, to) => {
    if (!util.isValidMove(toPiece)) return [];
    return util.verticalL(from, to) || util.horizontalL(from, to) ? [to] : [];
  };
}
