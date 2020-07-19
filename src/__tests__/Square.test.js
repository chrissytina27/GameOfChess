import Square from "../components/Square";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { bishopB } from "../helpers/testPieces";

describe("Square", () => {
  const testProps = {
    id: 1,
    piece: bishopB,
    shade: "light",
    updateGame: jest.fn(),
    disabled: false
  };

  it("renders correctly", () => {
    const square = new Square(testProps);
    const e = {
      preventDefault: jest.fn(),
      dataTransfer: {
        getData: jest.fn()
      }
    };
    const tree = renderer.create(square).toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.onDrop(e);
    expect(testProps.updateGame).toHaveBeenCalled();
  });
});
