import Bishop from "../components/ChessPieces/Bishop";
import ChessPiece from "../components/ChessPieces/Bishop";
import King from "../components/ChessPieces/King";
import Knight from "../components/ChessPieces/Knight";
import Pawn from "../components/ChessPieces/Pawn";
import Queen from "../components/ChessPieces/Queen";
import Rook from "../components/ChessPieces/Rook";

export const bishopB = new Bishop(0); //black knight
export const bishopW = new Bishop(1); //white knight

const piece = { blackUrl: "", name: "cp" };
export const cp = new ChessPiece(0, piece);

export const knightB = new Knight(0); //black knight

export const kingB = new King(0); //black king
export const kingW = new King(1); //white king

export const pawnB = new Pawn(0); //black pawn
export const pawnW = new Pawn(1); //white pawn
export const pawnB2 = new Pawn(0);
export const pawnW2 = new Pawn(1);

export const queenB = new Queen(0); //black queen
export const queenW = new Queen(1); //white queen

export const rookB = new Rook(0); //black rook
export const rookW = new Rook(1); //white rook
