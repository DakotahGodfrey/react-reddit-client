import React from "react";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders Navbar Component", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument;
  });
  describe("Navbar logo", () => {
    it("should be contained in a figure", () => {
      render(<Navbar />);
      const figure = screen.getByRole("figure");
      expect(figure).toBeInTheDocument;
    });
    it("should be an image with an alt-text of logo", () => {
      render(<Navbar />);
      const image = screen.getByAltText("logo");
      expect(image).toBeInTheDocument;
    });
  });
});
