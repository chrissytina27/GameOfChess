import { queenB } from "../helpers/testPieces";

describe("Queen:", () => {
  test("All possible moves", () => {
    expect(queenB.allMoves(25)).toStrictEqual([
      16,
      18,
      11,
      4,
      34,
      43,
      52,
      61,
      32,
      17,
      9,
      1,
      33,
      41,
      49,
      57,
      26,
      27,
      28,
      29,
      30,
      31,
      24
    ]);
    expect(queenB.allMoves(19)).toStrictEqual([
      10,
      1,
      12,
      5,
      28,
      37,
      46,
      55,
      26,
      33,
      40,
      11,
      3,
      27,
      35,
      43,
      51,
      59,
      20,
      21,
      22,
      23,
      18,
      17,
      16
    ]);
  });
  test("Get path", () => {
    expect(queenB.getPath(queenB, null, 40, 39)).toStrictEqual([]);
    expect(queenB.getPath(queenB, null, 40, 48)).toStrictEqual([48]);
  });
});
