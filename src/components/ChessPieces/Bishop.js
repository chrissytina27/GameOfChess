import ChessPiece from "./ChessPiece";
import { pieces } from "../../helpers/pieces";
import { util } from "../../helpers/util";

export default class Bishop extends ChessPiece {
  constructor(player) {
    super(player, pieces.bishop);
  }

  allMoves = loc => this.allDiagonalMoves(loc);

  getPath = (fromPiece, toPiece, from, to) => {
    if (!util.isValidMove(toPiece)) return [];
    return this.getDiagonalPath(from, to);
  };
}
