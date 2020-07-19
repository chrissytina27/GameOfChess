import ChessPiece from "./ChessPiece";
import { pieces } from "../../helpers/pieces";
import { util } from "../../helpers/util";

export default class Queen extends ChessPiece {
  constructor(player) {
    super(player, pieces.queen);
  }

  allMoves = loc => {
    var moves = [];
    moves = moves.concat(this.allDiagonalMoves(loc));
    moves = moves.concat(this.allStraightMoves(loc));
    return moves;
  };

  getPath = (fromPiece, toPiece, from, to) => {
    if (!util.isValidMove(toPiece)) return [];
    const horizontal = util.sameRow(from, to),
      vertical = util.sameCol(from, to);
    return horizontal || vertical
      ? this.getStraightPath(from, to)
      : this.getDiagonalPath(from, to);
  };
}
