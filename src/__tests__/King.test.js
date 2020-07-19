import { kingB } from "../helpers/testPieces";

describe("Kings:", () => {
  test("All possible moves", () => {
    expect(kingB.allMoves(13)).toStrictEqual([5, 21, 14, 12, 6, 4, 22, 20]);
    expect(kingB.allMoves(60)).toStrictEqual([52, 61, 59, 53, 51]);
  });
  test("Get path", () => {
    expect(kingB.getPath(kingB, null, 4, 1)).toStrictEqual([]);
    expect(kingB.getPath(kingB, null, 4, 11)).toStrictEqual([11]);
  });
});
