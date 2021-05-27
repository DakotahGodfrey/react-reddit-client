import React from "react";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import logo from "../../../../../assets/media/logoSmall.png";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  });
  it("should render a nav element", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("should render a link to the home page", () => {
    expect(screen.getByTestId("home-link")).toHaveAttribute("href", "/");
  });
  it("should render a figure", () => {
    expect(screen.getByRole("figure")).toBeInTheDocument();
  });
  it("should render an image with src set to logo", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", logo);
  });
});
