import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("App", () => {
  it("renders correctly", () => {
    const app = App();
    const tree = renderer.create(app).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
