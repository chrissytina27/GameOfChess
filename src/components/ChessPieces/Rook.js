import ChessPiece from "./ChessPiece";
import { pieces } from "../../helpers/pieces";
import { util } from "../../helpers/util";

export default class Rook extends ChessPiece {
  constructor(player) {
    super(player, pieces.rook);
  }

  allMoves = loc => this.allStraightMoves(loc);

  getPath = (fromPiece, toPiece, from, to) => {
    if (!util.isValidMove(toPiece)) return [];
    const inRow = util.sameRow(from, to),
      inCol = util.sameCol(from, to);
    return !inRow && !inCol ? [] : this.getStraightPath(from, to);
  };
}
