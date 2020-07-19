import GraveyardPiece from "../components/GraveyardPiece";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { bishopB } from "../helpers/testPieces";

describe("GraveyardPiece", () => {
  const testProps = {
    piece: bishopB,
    enabled: true,
    resurrectPiece: jest.fn()
  };

  it("renders correctly", () => {
    const gp = new GraveyardPiece(testProps);
    const tree = renderer.create(gp).toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.onClick();
    expect(testProps.resurrectPiece).toHaveBeenCalled();
  });
});
