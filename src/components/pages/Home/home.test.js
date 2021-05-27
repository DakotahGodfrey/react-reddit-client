import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../../app/store";
import Home from "./Home";
afterEach(cleanup);
describe("Home Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Home />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  });
  it("should render a main element without error", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("should render an element with a className  of carousel", () => {
    expect(screen.getByTestId("carousel")).toHaveClass("carousel");
  });
});
