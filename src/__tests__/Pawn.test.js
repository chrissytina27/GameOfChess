import { pawnB, pawnW, pawnW2 } from "../helpers/testPieces";
import { util } from "../helpers/util";

describe("Is pawn promotion", () => {
  test("Test pawn promotion to be first or last row of board", () => {
    for (let i = 0; i <= 7; i++) {
      expect(pawnB.isPawnPromotion(i)).toBe(true);
      expect(pawnW.isPawnPromotion(i)).toBe(false);
    }
    for (let i = 8; i <= 55; i++) {
      expect(pawnB.isPawnPromotion(i)).toBe(false);
      expect(pawnW.isPawnPromotion(i)).toBe(false);
    }
    for (let i = 56; i <= 63; i++) {
      expect(pawnB.isPawnPromotion(i)).toBe(false);
      expect(pawnW.isPawnPromotion(i)).toBe(true);
    }
  });
});

describe("The forward diagonal path that pawns can move when an opponents piece is in the to square location.", () => {
  test("White pawn can capture an adjacently SW black pawn", () => {
    expect(pawnW.killPath(pawnW, pawnB, 8, 17)).toStrictEqual([17]);
  });
  test("White pawn can not capture an adjacently S black pawn", () => {
    expect(pawnW.killPath(pawnW, pawnB, 8, 16)).toStrictEqual([]);
  });
  test("White pawn can not capture an adjacently S white pawn", () => {
    expect(pawnW.killPath(pawnW, pawnW2, 8, 16)).toStrictEqual([]);
  });
  test("Black pawn can capture an adjacently NW white pawn", () => {
    expect(pawnB.killPath(pawnB, pawnW, 48, 41)).toStrictEqual([41]);
  });
  test("Black pawn can not capture an adjacently N white pawn", () => {
    expect(pawnB.killPath(pawnB, pawnW, 48, 40)).toStrictEqual([]);
  });
});

describe("The forward straight path that pawns can move if no piece is in the way.", () => {
  test("White pawn can move forward 1 square if no piece is in the way", () => {
    expect(pawnW.straightPath(pawnW, null, 8, 16)).toStrictEqual([16]);
  });
  test("White pawn can not move forward 1 square if piece is in the way", () => {
    expect(pawnW.straightPath(pawnW, pawnB, 8, 16)).toStrictEqual([]);
  });
  test("White pawn can move forward 2 pieces if it is it's first move", () => {
    expect(pawnW.straightPath(pawnW, null, 8, 24)).toStrictEqual([24]);
  });
  test("White pawn can't move forward 2 pieces if it is it's first move but there is a piece in the way", () => {
    expect(pawnW.straightPath(pawnW, pawnB, 8, 24)).toStrictEqual([]);
  });
  test("White pawn can not move forward 2 pieces if it isn't it's first move", () => {
    pawnW.firstMove = false;
    expect(pawnW.straightPath(pawnW, null, 8, 24)).toStrictEqual([]);
  });
  test("White pawn can't move backwards", () => {
    expect(pawnW.straightPath(pawnW, null, 8, 0)).toStrictEqual([]);
  });
  test("Black pawn can move forward 1", () => {
    expect(pawnB.straightPath(pawnB, null, 8, 0)).toStrictEqual([0]);
  });
  test("Black pawn can not move backwards", () => {
    expect(pawnB.straightPath(pawnB, null, 0, 8)).toStrictEqual([]);
  });
});

describe("Adding moves", () => {
  test("White pawn adding valid moves", () => {
    const moves = [[util.goNorth], [util.goSouth]];
    expect(pawnW.addMoves(moves, 8, [])).toStrictEqual([16]);
  });
});

describe("All possible moves the pawn can make", () => {
  test("White pawn can move S, SW, SE", () => {
    expect(pawnW.allMoves(9)).toStrictEqual([17, 16, 18]);
  });
  test("White pawn can move S, SE", () => {
    expect(pawnW.allMoves(8)).toStrictEqual([16, 17]);
  });
  test("Black pawn can move N, NW, NE", () => {
    expect(pawnB.allMoves(9)).toStrictEqual([1, 0, 2]);
  });
  test("Black pawn can move N, NW", () => {
    expect(pawnB.allMoves(8)).toStrictEqual([0, 1]);
  });
});
