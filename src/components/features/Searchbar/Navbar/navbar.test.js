import React from "react";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders Navbar Component", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument;
  });
  describe("Navbar logo", () => {
    it("should be contained in a figure", () => {
      const figure = screen.getByRole("figure");
      expect(figure).toBeInTheDocument;
    });
    it("should be an image with an alt-text of logo", () => {
      const image = screen.getByAltText("logo");
      expect(image).toBeInTheDocument;
    });
  });
});
