import React from "react";
import { render, screen } from "@testing-library/react";
import Aside from "./Aside";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <Aside />
    </Router>
  );
});
describe("Aside", () => {
  it("should render an aside with className sidebar", () => {
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("complementary")).toHaveClass("sidebar");
  });
  it("should render an article with className aside-trending", () => {
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveClass("aside-trending");
  });
  it("should render a header with className aside-header", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("aside-header");
  });
  it("should render an h2 with text Trending Communities", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Trending Communities"
    );
  });
  it("renders 5 anchor elements ", () => {
    expect(screen.getAllByTestId("anchor-link").length).toEqual(5);
  });
});
