import ChessPiece from "./ChessPiece";
import { util } from "../../helpers/util";
import { pieces } from "../../helpers/pieces";

export default class King extends ChessPiece {
  constructor(player) {
    super(player, pieces.king);
    this.validMoves = pieces.king.validMoves;
  }

  allMoves(loc) {
    const moves = [];
    this.validMoves.forEach(fn => {
      const newLoc = fn(loc);
      if (newLoc > -1) moves.push(newLoc);
    });
    return moves;
  }

  getPath(fromPiece, toPiece, from, to) {
    if (!util.isValidMove(toPiece)) return [];
    return this.validMoves.some(fn => to === fn(from)) ? [to] : [];
  }
}
