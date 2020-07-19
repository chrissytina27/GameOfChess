import { util } from "../helpers/util";
import {
  pawnB,
  pawnW,
  pawnB2,
  pawnW2,
  bishopW,
  kingB
} from "../helpers/testPieces";
import {
  initialBoard,
  checkBoard,
  checkmateBoard3,
  stalemateBoard2
} from "../helpers/initialBoard";

describe("Test teams", () => {
  test("Pieces are on different teams", () => {
    expect(util.diffTeam(pawnB, pawnW)).toBe(true);
    expect(util.diffTeam(pawnW, pawnB)).toBe(true);
  });
  test("Pieces are not on different teams", () => {
    expect(util.diffTeam(pawnB, pawnB2)).toBe(false);
    expect(util.diffTeam(pawnW, pawnW2)).toBe(false);
    expect(util.diffTeam(pawnW2, pawnW)).toBe(false);
  });
});
describe("Is even", () => {
  test("10 is even", () => {
    expect(util.isEven(10)).toBe(true);
  });
  test("9 is not even", () => {
    expect(util.isEven(9)).toBe(false);
  });
  test("-10 is even", () => {
    expect(util.isEven(-10)).toBe(true);
  });
  test("-9 is not even", () => {
    expect(util.isEven(-9)).toBe(false);
  });
  test("0 is even", () => {
    expect(util.isEven(0)).toBe(true);
  });
});
describe("Test row number", () => {
  test("0 is row 0", () => {
    expect(util.getRow(0)).toBe(0);
  });
  test("63 is row 7", () => {
    expect(util.getRow(63)).toBe(7);
  });
  test("8 is row 1", () => {
    expect(util.getRow(8)).toBe(1);
  });
  test("27 is row 3", () => {
    expect(util.getRow(27)).toBe(3);
  });
});
describe("Test column number", () => {
  test("0 is col 0", () => {
    expect(util.getCol(0)).toBe(0);
  });
  test("1 is col 1", () => {
    expect(util.getCol(1)).toBe(1);
  });
  test("63 is col 7", () => {
    expect(util.getCol(63)).toBe(7);
  });
  test("27 is col 3", () => {
    expect(util.getCol(27)).toBe(3);
  });
});
describe("Test row difference between 2 squares", () => {
  test("Row difference between square 0 and square 0 is 0", () => {
    expect(util.rowDiff(0, 0)).toBe(0);
  });
  test("Row difference between square 0 and square 63 is 7", () => {
    expect(util.rowDiff(0, 63)).toBe(7);
  });
  test("Row difference between square 63 and square 0 is 7", () => {
    expect(util.rowDiff(63, 0)).toBe(7);
  });
  test("Row difference between square 26 and square 49 is 3", () => {
    expect(util.rowDiff(26, 49)).toBe(3);
  });
});
describe("Test column difference between 2 squares", () => {
  test("Column difference between square 0 and square 0 is 0", () => {
    expect(util.colDiff(0, 0)).toBe(0);
  });
  test("Row difference between square 0 and square 63 is 7", () => {
    expect(util.colDiff(0, 63)).toBe(7);
  });
  test("Row difference between square 45 and square 50 is 3", () => {
    expect(util.colDiff(45, 50)).toBe(3);
  });
  test("Row difference between square 50 and square 45 is 3", () => {
    expect(util.colDiff(50, 45)).toBe(3);
  });
});
describe("Test if 2 squares are in the same row", () => {
  test("Square 0 and 0 are in the same row", () => {
    expect(util.sameRow(0, 0)).toBe(true);
  });
  test("Square 0 and 8 are not in the same row", () => {
    expect(util.sameRow(0, 8)).toBe(false);
  });
  test("Square 39 and 40 are not in the same row", () => {
    expect(util.sameRow(39, 40)).toBe(false);
  });
  test("Square 7 and 0 are in the same row", () => {
    expect(util.sameRow(7, 0)).toBe(true);
  });
});
describe("Test if 2 squares are in the same column", () => {
  test("Square 0 and 0 are in the same column", () => {
    expect(util.sameCol(0, 0)).toBe(true);
  });
  test("Square 0 and 56 are in the same column", () => {
    expect(util.sameCol(0, 56)).toBe(true);
  });
  test("Square 42 and 49 are not in the same column", () => {
    expect(util.sameCol(42, 49)).toBe(false);
  });
  test("Square 2 and 10 are in the same column", () => {
    expect(util.sameCol(2, 10)).toBe(true);
  });
});
describe("Test if a square is between 0 and 64", () => {
  test("Square 0 is valid", () => {
    expect(util.isValid(0)).toBe(true);
  });
  test("Square 64 is not valid", () => {
    expect(util.isValid(64)).toBe(false);
  });
  test("Square -1 is not valid", () => {
    expect(util.isValid(-1)).toBe(false);
  });
  test("Square 63 is valid", () => {
    expect(util.isValid(63)).toBe(true);
  });
});
describe("Square name", () => {
  test("", () => {
    expect(util.squareName(0)).toBe("A1");
    expect(util.squareName(56)).toBe("A8");
    expect(util.squareName(27)).toBe("D4");
    expect(util.squareName(63)).toBe("H8");
    expect(util.squareName(35)).toBe("D5");
  });
});
describe("Is valid move", () => {
  test("Move isn't valid if the to piece is a king", () => {
    expect(util.isValidMove({ name: "king" })).toBe(false);
  });
  test("Move is valid if the to piece isn't a king", () => {
    expect(util.isValidMove({ name: "pawn" })).toBe(true);
  });
  test("Move is valid if the to piece isn't a king", () => {
    expect(util.isValidMove()).toBe(true);
  });
});
describe("Directions", () => {
  test("Go North", () => {
    expect(util.goNorth(11)).toBe(3);
    expect(util.goNorth(3)).toBe(-1);
  });
  test("Go South", () => {
    expect(util.goSouth(52)).toBe(60);
    expect(util.goSouth(60)).toBe(-1);
  });
  test("Go East", () => {
    expect(util.goEast(46)).toBe(47);
    expect(util.goEast(47)).toBe(-1);
  });
  test("Go West", () => {
    expect(util.goWest(25)).toBe(24);
    expect(util.goWest(24)).toBe(-1);
  });
  test("Go NorthEast", () => {
    expect(util.goNE(14)).toBe(7);
    expect(util.goNE(7)).toBe(-1);
  });
  test("Go NorthWest", () => {
    expect(util.goNW(9)).toBe(0);
    expect(util.goNW(0)).toBe(-1);
  });
  test("Go SouthEast", () => {
    expect(util.goSE(54)).toBe(63);
    expect(util.goSE(63)).toBe(-1);
  });
  test("Go SouthWest", () => {
    expect(util.goSW(49)).toBe(56);
    expect(util.goSW(56)).toBe(-1);
  });
});
describe("If move is L shaped", () => {
  test("Move is L shaped", () => {
    expect(util.LShape(44, 29, false)).toBe(true);
    expect(util.LShape(44, 29, true)).toBe(false);
    expect(util.LShape(4, 29, false)).toBe(false);
  });
  test("Move is vertical L shaped", () => {
    expect(util.verticalL(44, 29)).toBe(true);
    expect(util.verticalL(44, 27)).toBe(true);
    expect(util.verticalL(44, 59)).toBe(true);
    expect(util.verticalL(44, 61)).toBe(true);
    expect(util.verticalL(44, 54)).toBe(false);
  });
  test("Move is horizontal L shaped", () => {
    expect(util.horizontalL(44, 54)).toBe(true);
    expect(util.horizontalL(44, 50)).toBe(true);
    expect(util.horizontalL(44, 34)).toBe(true);
    expect(util.horizontalL(44, 38)).toBe(true);
    expect(util.horizontalL(44, 29)).toBe(false);
  });
});
describe("Board logic", () => {
  test("Get board's king index", () => {
    expect(util.getKingIndex(initialBoard(), 1)).toBe(4);
    expect(util.getKingIndex(initialBoard(), 0)).toBe(60);
  });
  test("Is check", () => {
    expect(util.isCheck(1, initialBoard())).toBe(false);
    expect(util.isCheck(0, checkBoard())).toBe(true);
  });
  test("Puts king in check", () => {
    const square = {
      piece: bishopW
    };
    expect(util.isChecker(square, 0, kingB, 9, 0, checkBoard())).toBe(true);
    expect(util.isChecker(square, 1, kingB, 9, 0, checkBoard())).toBe(false);
  });
  test("Test checkmate", () => {
    expect(util.isCheckmate(0, initialBoard())).toBe(false);
    expect(util.isCheckmate(0, checkmateBoard3())).toBe(true);
    expect(util.isCheckmate(0, checkBoard())).toBe(false);
  });
  test("Test stalemate", () => {
    expect(util.isStalemate(0, initialBoard())).toBe(false);
    expect(util.isStalemate(0, stalemateBoard2())).toBe(true);
    expect(util.isStalemate(0, checkBoard())).toBe(false);
  });
});
