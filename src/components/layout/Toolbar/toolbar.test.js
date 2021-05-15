import React from "react";
import { render, screen } from "@testing-library/react";
import Toolbar from "./Toolbar";

beforeEach(() => {
  render(<Toolbar />);
});

describe("Toolbar", () => {
  it("should render a nav element with className toolbar", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("toolbar");
  });
  it("should render a div with className filter-controls", () => {
    const filterControls = screen.getByTestId("filter-controls");
    expect(filterControls).toBeInTheDocument();
    expect(filterControls).toHaveClass("filter-controls");
  });
  it("should render 4 buttons", () => {
    const filterOptions = screen.getAllByRole("button");
    expect(filterOptions.length).toEqual(4);
  });
});
