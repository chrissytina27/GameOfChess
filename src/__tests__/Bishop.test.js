import { bishopB } from "../helpers/testPieces";

describe("Bishop:", () => {
  test("All possible moves", () => {
    expect(bishopB.allMoves(35)).toStrictEqual([
      26,
      17,
      8,
      28,
      21,
      14,
      7,
      44,
      53,
      62,
      42,
      49,
      56
    ]);
    expect(bishopB.allMoves(5)).toStrictEqual([14, 23, 12, 19, 26, 33, 40]);
  });
  test("Get path", () => {
    expect(bishopB.getPath(bishopB, null, 12, 13)).toStrictEqual([]);
    expect(bishopB.getPath(bishopB, null, 12, 26)).toStrictEqual([19, 26]);
  });
});
