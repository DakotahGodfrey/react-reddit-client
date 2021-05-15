import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
});
describe("Home", () => {
  it("renders a main element with className home", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("renders a header with test-id trending-container ", () => {
    expect(screen.getByTestId("trending-container")).toBeInTheDocument();
  });
  it("renders a section with a test-id of feed", () => {
    expect(screen.getByTestId("feed")).toBeInTheDocument();
  });
  it("renders a div with a test-id of feed-wrapper", () => {
    expect(screen.getByTestId("feed-wrapper")).toBeInTheDocument();
  });
});
