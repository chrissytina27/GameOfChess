import ChessPiece from "./ChessPiece";
import { pieces } from "../../helpers/pieces";
import { util } from "../../helpers/util";

export default class Pawn extends ChessPiece {
  constructor(player) {
    super(player, pieces.pawn);
    this.firstMove = true;
    this.validMoves = pieces.pawn.validMoves;
    this.killDir = pieces.pawn.killDir;
  }

  setFirstMove = () => (this.firstMove = false);

  isFirstMove = () => this.firstMove;

  isPawnPromotion = to =>
    this.getPlayer() ? util.getRow(to) === 7 : util.getRow(to) === 0;

  killPath = (fromPiece, toPiece, from, to) => {
    const path = [],
      diffTeam = toPiece && util.diffTeam(fromPiece, toPiece);
    if (!diffTeam) return [];
    this.killDir[this.getPlayer()].forEach(fn => {
      const newLoc = fn(from);
      if (newLoc > -1 && to === newLoc) path.push(newLoc);
    });
    return path;
  };

  straightPath = (fromPiece, toPiece, from, to) => {
    const path = [];
    if (toPiece) return [];
    this.validMoves[this.getPlayer()].forEach(fn => {
      const newLoc = fn(from);
      if (newLoc > -1 && to === newLoc) path.push(newLoc);
      if (this.firstMove) {
        const newLoc2 = fn(newLoc);
        if (newLoc2 > -1 && to === newLoc2) path.push(newLoc2);
      }
    });
    return path;
  };

  addMoves = (moveToCheck, loc, moves) => {
    moveToCheck[this.getPlayer()].forEach(fn => {
      const newLoc = fn(loc);
      if (newLoc > -1) moves.push(newLoc);
    });
    return moves;
  };

  allMoves = loc => {
    const moves = [];
    this.addMoves(this.validMoves, loc, moves);
    this.addMoves(this.killDir, loc, moves);
    return moves;
  };

  getPath = (fromPiece, toPiece, from, to) => {
    if (!util.isValidMove(toPiece)) return [];
    var path = [];
    path = path.concat(this.killPath(fromPiece, toPiece, from, to));
    path = path.concat(this.straightPath(fromPiece, toPiece, from, to));
    return path;
  };
}
