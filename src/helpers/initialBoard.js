import King from "../components/ChessPieces/King";
import Queen from "../components/ChessPieces/Queen";
import Bishop from "../components/ChessPieces/Bishop";
import Knight from "../components/ChessPieces/Knight";
import Rook from "../components/ChessPieces/Rook";
import Pawn from "../components/ChessPieces/Pawn";
import { pieces } from "./pieces";

const squarePiece = piece => ({ piece, moves: [] });

const emptyBoard = () => Array(64).fill(null);

export const initialBoard = () => {
  const squares = emptyBoard();
  squares[0] = squarePiece(new Rook(1));
  squares[7] = squarePiece(new Rook(1));
  squares[1] = squarePiece(new Knight(1));
  squares[6] = squarePiece(new Knight(1));
  squares[2] = squarePiece(new Bishop(1));
  squares[5] = squarePiece(new Bishop(1));
  squares[3] = squarePiece(new Queen(1));
  squares[4] = squarePiece(new King(1));
  for (let i = 8; i < 16; i++) {
    squares[i] = squarePiece(new Pawn(1));
  }
  squares[56] = squarePiece(new Rook(0));
  squares[63] = squarePiece(new Rook(0));
  squares[57] = squarePiece(new Knight(0));
  squares[62] = squarePiece(new Knight(0));
  squares[58] = squarePiece(new Bishop(0));
  squares[61] = squarePiece(new Bishop(0));
  squares[59] = squarePiece(new Queen(0));
  squares[60] = squarePiece(new King(0));
  for (let i = 48; i < 56; i++) {
    squares[i] = squarePiece(new Pawn(0));
  }
  return squares;
};

export const pawnpromoBoard = () => {
  const squares = initialBoard();
  squares[43] = squares[11];
  squares[11] = null;
  squares[20] = squares[52];
  squares[52] = null;
  return squares;
};

export const partialBoard = () => {
  const squares = initialBoard();
  squares[27] = squares[11];
  squares[36] = squares[52];
  squares[39] = squares[15];
  squares[11] = null;
  squares[15] = null;
  squares[52] = null;
  squares[59] = null;
  return squares;
};

//move queen 62 -> 44 for stalemate
export const stalemateBoard = () => {
  const squares = emptyBoard();
  squares[1] = squarePiece(new King(1));
  squares[6] = squarePiece(new Rook(1));
  squares[21] = squarePiece(new Knight(1));
  squares[39] = squarePiece(new King(0));
  squares[62] = squarePiece(new Queen(1));
  return squares;
};

export const stalemateBoard2 = () => {
  const squares = stalemateBoard();
  squares[44] = squares[62];
  squares[62] = null;
  return squares;
};

export const checkBoard = () => {
  const squares = emptyBoard();
  squares[0] = squarePiece(new Bishop(1));
  squares[9] = squarePiece(new King(0));
  return squares;
};

//move queen 62 -> 44 for checkmate
export const checkmateBoard = () => {
  const squares = emptyBoard();
  squares[1] = squarePiece(new King(1));
  squares[6] = squarePiece(new Rook(1));
  squares[11] = squarePiece(new Bishop(1));
  squares[21] = squarePiece(new Knight(1));
  squares[39] = squarePiece(new King(0));
  squares[62] = squarePiece(new Queen(1));
  return squares;
};

export const checkmateBoard2 = () => {
  const squares = checkmateBoard();
  squares[42] = squares[62];
  squares[62] = null;
  return squares;
};

export const checkmateBoard3 = () => {
  const squares = checkmateBoard2();
  squares[32] = squarePiece(new Rook(1));
  return squares;
};

export const players = (p1, p2) => [
  {
    graveyard: [],
    graveyardPick: false,
    name: p1,
    moves: []
  },
  {
    graveyard: [],
    graveyardPick: false,
    name: p2,
    moves: []
  }
];

const initialState = (player1 = "", player2 = "") => {
  return {
    board: initialBoard(),
    moves: 0,
    players: [
      {
        graveyard: [],
        graveyardPick: false,
        name: player1,
        moves: []
      },
      {
        graveyard: [],
        graveyardPick: false,
        name: player2,
        moves: []
      }
    ],
    kingAttacked: [false, false],
    checkmate: -1,
    invalidMove: false,
    stalemate: false
  };
};

export const partialState = (player1 = "", player2 = "") => {
  return {
    board: partialBoard(),
    moves: 0,
    players: [
      {
        graveyard: [],
        graveyardPick: false,
        name: player1,
        moves: []
      },
      {
        graveyard: [],
        graveyardPick: false,
        name: player2,
        moves: []
      }
    ],
    kingAttacked: [false, false],
    checkmate: -1,
    invalidMove: false,
    stalemate: false
  };
};

export function unserialize(name, player) {
  var piece;
  switch (name) {
    case pieces.pawn.name:
      piece = new Pawn(player);
      break;
    case pieces.bishop.name:
      piece = new Bishop(player);
      break;
    case pieces.rook.name:
      piece = new Rook(player);
      break;
    case pieces.knight.name:
      piece = new Knight(player);
      break;
    case pieces.queen.name:
      piece = new Queen(player);
      break;
    default:
      piece = new King(player);
      break;
  }
  return piece;
}

export default initialState;
