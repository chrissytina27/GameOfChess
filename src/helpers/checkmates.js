import King from "../components/ChessPieces/King";
import Queen from "../components/ChessPieces/Queen";
import Bishop from "../components/ChessPieces/Bishop";
import Knight from "../components/ChessPieces/Knight";
import Rook from "../components/ChessPieces/Rook";
import Pawn from "../components/ChessPieces/Pawn";

//black is checkmated
export const checkmateBlack1 = () => {
  const squares = Array(64).fill(null);
  squares[7] = { piece: new King(0), moves: [] };
  squares[9] = { piece: new Rook(1), moves: [] };
  squares[16] = { piece: new Rook(1), moves: [] };
  squares[59] = { piece: new King(1), moves: [] };
  return squares;
};

//white is checkmated
export const checkmateWhite1 = () => {
  const squares = Array(64).fill(null);
  squares[7] = { piece: new King(1), moves: [] };
  squares[9] = { piece: new Rook(0), moves: [] };
  squares[16] = { piece: new Rook(0), moves: [] };
  squares[59] = { piece: new King(0), moves: [] };
  return squares;
};

export const checkmateBlack2 = () => {
  const squares = Array(64).fill(null);
  squares[4] = { piece: new King(0), moves: [] };
  squares[12] = { piece: new Pawn(1), moves: [] };
  squares[19] = { piece: new Pawn(1), moves: [] };
  squares[20] = { piece: new King(1), moves: [] };
  return squares;
};

export const checkmateWhite2 = () => {
  const squares = Array(64).fill(null);
  squares[4] = { piece: new King(1), moves: [] };
  squares[12] = { piece: new Pawn(0), moves: [] };
  squares[19] = { piece: new Pawn(0), moves: [] };
  squares[20] = { piece: new King(0), moves: [] };
  return squares;
};

export const checkmateBlack3 = () => {
  const squares = Array(64).fill(null);
  squares[6] = { piece: new King(0), moves: [] };
  squares[13] = { piece: new Pawn(0), moves: [] };
  squares[14] = { piece: new Pawn(0), moves: [] };
  squares[15] = { piece: new Pawn(0), moves: [] };
  squares[22] = { piece: new Rook(0), moves: [] };
  squares[47] = { piece: new Pawn(1), moves: [] };
  squares[53] = { piece: new Pawn(1), moves: [] };
  squares[54] = { piece: new Pawn(1), moves: [] };
  squares[56] = { piece: new Rook(1), moves: [] };
  squares[62] = { piece: new King(1), moves: [] };
  return squares;
};

export const checkmateWhite3 = () => {
  const squares = Array(64).fill(null);
  squares[6] = { piece: new King(1), moves: [] };
  squares[13] = { piece: new Pawn(1), moves: [] };
  squares[14] = { piece: new Pawn(1), moves: [] };
  squares[15] = { piece: new Pawn(1), moves: [] };
  squares[22] = { piece: new Rook(1), moves: [] };
  squares[47] = { piece: new Pawn(0), moves: [] };
  squares[53] = { piece: new Pawn(0), moves: [] };
  squares[54] = { piece: new Pawn(0), moves: [] };
  squares[56] = { piece: new Rook(0), moves: [] };
  squares[62] = { piece: new King(0), moves: [] };
  return squares;
};

export const checkmateBlack4 = () => {
  const squares = Array(64).fill(null);
  squares[0] = { piece: new Rook(0), moves: [] };
  squares[5] = { piece: new Rook(0), moves: [] };
  squares[6] = { piece: new King(0), moves: [] };
  squares[8] = { piece: new Pawn(0), moves: [] };
  squares[9] = { piece: new Pawn(0), moves: [] };
  squares[10] = { piece: new Pawn(0), moves: [] };
  squares[13] = { piece: new Pawn(0), moves: [] };
  squares[14] = { piece: new Pawn(0), moves: [] };
  squares[15] = { piece: new Pawn(0), moves: [] };

  squares[41] = { piece: new Pawn(1), moves: [] };
  squares[48] = { piece: new Pawn(1), moves: [] };
  squares[49] = { piece: new Queen(1), moves: [] };
  squares[53] = { piece: new Pawn(1), moves: [] };
  squares[54] = { piece: new Pawn(1), moves: [] };
  squares[55] = { piece: new Pawn(1), moves: [] };
  squares[56] = { piece: new Bishop(1), moves: [] };
  squares[61] = { piece: new Rook(1), moves: [] };
  squares[62] = { piece: new King(1), moves: [] };
  return squares;
};

export const checkmateWhite4 = () => {
  const squares = Array(64).fill(null);
  squares[0] = { piece: new Rook(1), moves: [] };
  squares[5] = { piece: new Rook(1), moves: [] };
  squares[6] = { piece: new King(1), moves: [] };
  squares[8] = { piece: new Pawn(1), moves: [] };
  squares[9] = { piece: new Pawn(1), moves: [] };
  squares[10] = { piece: new Pawn(1), moves: [] };
  squares[13] = { piece: new Pawn(1), moves: [] };
  squares[14] = { piece: new Pawn(1), moves: [] };
  squares[15] = { piece: new Pawn(1), moves: [] };

  squares[41] = { piece: new Pawn(0), moves: [] };
  squares[48] = { piece: new Pawn(0), moves: [] };
  squares[49] = { piece: new Queen(0), moves: [] };
  squares[53] = { piece: new Pawn(0), moves: [] };
  squares[54] = { piece: new Pawn(0), moves: [] };
  squares[55] = { piece: new Pawn(0), moves: [] };
  squares[56] = { piece: new Bishop(0), moves: [] };
  squares[61] = { piece: new Rook(0), moves: [] };
  squares[62] = { piece: new King(0), moves: [] };
  return squares;
};

export const checkmateBlack5 = () => {
  const squares = Array(64).fill(null);
  squares[0] = { piece: new Rook(0), moves: [] };
  squares[6] = { piece: new Rook(0), moves: [] };
  squares[7] = { piece: new King(0), moves: [] };
  squares[8] = { piece: new Pawn(0), moves: [] };
  squares[9] = { piece: new Pawn(0), moves: [] };
  squares[10] = { piece: new Pawn(0), moves: [] };
  squares[14] = { piece: new Pawn(0), moves: [] };
  squares[15] = { piece: new Pawn(0), moves: [] };

  squares[28] = { piece: new Knight(1), moves: [] };
  squares[41] = { piece: new Pawn(1), moves: [] };
  squares[48] = { piece: new Pawn(1), moves: [] };
  squares[53] = { piece: new Pawn(1), moves: [] };
  squares[54] = { piece: new Pawn(1), moves: [] };
  squares[55] = { piece: new Pawn(1), moves: [] };
  squares[61] = { piece: new Rook(1), moves: [] };
  squares[62] = { piece: new King(1), moves: [] };
  return squares;
};

export const checkmateWhite5 = () => {
  const squares = Array(64).fill(null);
  squares[0] = { piece: new Rook(1), moves: [] };
  squares[6] = { piece: new Rook(1), moves: [] };
  squares[7] = { piece: new King(1), moves: [] };
  squares[8] = { piece: new Pawn(1), moves: [] };
  squares[9] = { piece: new Pawn(1), moves: [] };
  squares[10] = { piece: new Pawn(1), moves: [] };
  squares[14] = { piece: new Pawn(1), moves: [] };
  squares[15] = { piece: new Pawn(1), moves: [] };

  squares[28] = { piece: new Knight(0), moves: [] };
  squares[41] = { piece: new Pawn(0), moves: [] };
  squares[48] = { piece: new Pawn(0), moves: [] };
  squares[53] = { piece: new Pawn(0), moves: [] };
  squares[54] = { piece: new Pawn(0), moves: [] };
  squares[55] = { piece: new Pawn(0), moves: [] };
  squares[61] = { piece: new Rook(0), moves: [] };
  squares[62] = { piece: new King(0), moves: [] };
  return squares;
};
