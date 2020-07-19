import Game from "../components/Game";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("Game", () => {
  const testProps = {
    location: {
      state: {
        player1: "p1",
        player2: "p2"
      }
    }
  };
  it("renders correctly", () => {
    const tree = renderer.create(<Game {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
