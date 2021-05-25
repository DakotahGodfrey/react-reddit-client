import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "../../../app/store";
import NotFound from "./NotFound";

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <NotFound />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Not Found Page", () => {
  it("should render a main element", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("should render an element with testid of content", () => {
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
  it("should render an element with testid of greeting", () => {
    expect(screen.getByTestId("greeting")).toBeInTheDocument();
  });
  it("should render a heading element", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("should render a link to the home page", () => {
    const anchorElement = screen.getByTestId("home-link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/");
  });
  it("should render an element with test id of image-container", () => {
    const imageContainer = screen.getByTestId("image-container");
    expect(imageContainer).toBeInTheDocument();
  });
  it("should render an image", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
