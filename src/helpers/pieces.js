import { util } from "./util";
import { constants as c } from "./constants";
export const pieces = {
  king: {
    name: c.pieceNames.king,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    validMoves: [
      util.goNorth,
      util.goSouth,
      util.goEast,
      util.goWest,
      util.goNE,
      util.goNW,
      util.goSE,
      util.goSW
    ]
  },
  queen: {
    name: c.pieceNames.queen,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
  },
  knight: {
    name: c.pieceNames.knight,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    validMoves: [
      { steps: 15, fn: util.verticalL },
      { steps: 17, fn: util.verticalL },
      { steps: 6, fn: util.horizontalL },
      { steps: 10, fn: util.horizontalL }
    ]
  },
  rook: {
    name: c.pieceNames.rook,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
  },
  pawn: {
    name: c.pieceNames.pawn,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    validMoves: [[util.goNorth], [util.goSouth]],
    killDir: [[util.goNW, util.goNE], [util.goSW, util.goSE]]
  },
  bishop: {
    name: c.pieceNames.bishop,
    whiteUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    blackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
  }
};

export const whitePlayer = require("./../../public/ChessPieceIcons/white_pawn_player.png");
export const blackPlayer = require("./../../public/ChessPieceIcons/black_pawn_player.png");
