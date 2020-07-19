import { rookB } from "../helpers/testPieces";

describe("Rooks:", () => {
  test("All possible moves", () => {
    expect(rookB.allMoves(46)).toStrictEqual([
      38,
      30,
      22,
      14,
      6,
      54,
      62,
      47,
      45,
      44,
      43,
      42,
      41,
      40
    ]);
    expect(rookB.allMoves(56)).toStrictEqual([
      48,
      40,
      32,
      24,
      16,
      8,
      0,
      57,
      58,
      59,
      60,
      61,
      62,
      63
    ]);
  });
  test("Get path", () => {
    expect(rookB.getPath(rookB, null, 40, 39)).toStrictEqual([]);
    expect(rookB.getPath(rookB, null, 40, 47)).toStrictEqual([
      41,
      42,
      43,
      44,
      45,
      46,
      47
    ]);
  });
});
