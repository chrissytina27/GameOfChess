import { knightB, kingW } from "../helpers/testPieces";

describe("Knights:", () => {
  test("All possible moves", () => {
    expect(knightB.allMoves(28)).toStrictEqual([
      43,
      13,
      45,
      11,
      34,
      22,
      38,
      18
    ]);
    expect(knightB.allMoves(31)).toStrictEqual([46, 14, 37, 21]);
  });
  test("Get path", () => {
    expect(knightB.getPath(knightB, kingW, 28, 13)).toStrictEqual([]);
    expect(knightB.getPath(knightB, null, 28, 13)).toStrictEqual([13]);
  });
});
