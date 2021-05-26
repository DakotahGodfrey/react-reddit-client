import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./Loading";
beforeEach(() => {
  render(<Loading />);
});
describe("Loading", () => {
  it("should render a container element with test-id loading-container", () => {
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
  it("should render an element with test-id circle-one", () => {
    expect(screen.getByTestId("circle-one")).toBeInTheDocument();
  });
  it("should render an element with test-id circle-two", () => {
    expect(screen.getByTestId("circle-two")).toBeInTheDocument();
  });
  it("should render an element with test-id circle-three", () => {
    expect(screen.getByTestId("circle-three")).toBeInTheDocument();
  });
  it("should render an element with test-id circle-four", () => {
    expect(screen.getByTestId("circle-four")).toBeInTheDocument();
  });
});
