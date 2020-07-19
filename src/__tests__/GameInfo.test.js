import GameInfo from "../components/GameInfo";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { players } from "../helpers/initialBoard";

describe("GameInfo", () => {
  const testProps = {
    playerTurn: 1,
    graveyardPick: {},
    endGame: jest.fn(),
    resetGame: jest.fn(),
    players: players("p1", "p2"),
    check: false,
    checkmate: false,
    invalidMove: false,
    staleMate: false
  };

  it("renders correctly", () => {
    const gameInfo = GameInfo(testProps);
    const tree = renderer.create(gameInfo).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
