import Table from "../components/Table";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("Table", () => {
  const testProps = [
    {
      graveyard: [],
      graveyardPick: false,
      name: "player1",
      moves: ["d5", "c3", "e333"]
    },
    {
      graveyard: [],
      graveyardPick: false,
      name: "player2",
      moves: ["d5", "c3", "e333"]
    }
  ];
  it("renders correctly", () => {
    const tree = renderer.create(<Table players={testProps} />).toJSON();
    expect(tree.children[1].children.length).toBe(testProps[1].moves.length);
    expect(tree).toMatchSnapshot();
  });
});
