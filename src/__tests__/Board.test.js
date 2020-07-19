import Board from "../components/Board";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { initialBoard } from "../helpers/initialBoard";

describe("Board", () => {
  const testProps = {
    pieces: initialBoard(),
    disabled: false,
    updateGame: jest.fn(() => ({}))
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Board {...testProps} />).toJSON();
    expect(tree.children.length).toBe(testProps.pieces.length);
    expect(tree).toMatchSnapshot();
  });
});
