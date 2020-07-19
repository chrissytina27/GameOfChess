import Player from "../components/Player";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("Player", () => {
  const testProps = {
    name: "christina",
    graveyard: ["a", "b", "c"],
    graveyardPick: false,
    resurrectPiece: jest.fn(() => ({}))
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Player {...testProps} />).toJSON();
    expect(tree.children.length).toBe(testProps.graveyard.length);
    expect(tree).toMatchSnapshot();
  });
});
