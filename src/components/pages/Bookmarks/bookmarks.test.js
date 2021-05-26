import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Bookmarks from "./Bookmarks";

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Bookmarks />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Bookmarks Page", () => {
  it("should render a main element without error", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("should render an element with testid of feed", () => {
    expect(screen.getByTestId("feed")).toBeInTheDocument();
  });
  it("should render an element with testid of feed-wrapper", () => {
    expect(screen.getByTestId("feed-wrapper")).toBeInTheDocument();
  });
  it("Should render a heading element", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
