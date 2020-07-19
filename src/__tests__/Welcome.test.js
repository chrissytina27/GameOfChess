import Welcome from "../components/Welcome";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders with crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Welcome></Welcome>, div);
});
// it("renders component correctly", () => {
//   const { getByTestId } = render(<Welcome />);
//   const startBtn = getByTestId("startBtn");
//   console.log(startBtn);
//   // expect(getByTestId("startBtn")).toHaveTextContent("");
// });
it("matches snapshot", () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});
