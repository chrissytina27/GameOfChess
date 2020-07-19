import { cp } from "../helpers/testPieces";

describe("ChessPiece:", () => {
  test("Get straight path", () => {
    expect(cp.getStraightPath(43, 11)).toStrictEqual([35, 27, 19, 11]); //north
    expect(cp.getStraightPath(40, 39)).toStrictEqual([]);
    expect(cp.getStraightPath(40, 44)).toStrictEqual([41, 42, 43, 44]); //east
  });
  test("Get diagonal path", () => {
    expect(cp.getDiagonalPath(27, 6)).toStrictEqual([20, 13, 6]); //ne
    expect(cp.getDiagonalPath(27, 29)).toStrictEqual([]);
    expect(cp.getDiagonalPath(27, 45)).toStrictEqual([36, 45]); //se
  });
  test("Get all straight paths", () => {
    expect(cp.allStraightMoves(17)).toStrictEqual([
      9,
      1,
      25,
      33,
      41,
      49,
      57,
      18,
      19,
      20,
      21,
      22,
      23,
      16
    ]);
  });
  test("Get all diagonal paths", () => {
    expect(cp.allDiagonalMoves(17)).toStrictEqual([
      8,
      10,
      3,
      26,
      35,
      44,
      53,
      62,
      24
    ]);
  });
});
