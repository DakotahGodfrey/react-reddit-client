import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import NavControls from "./NavControls";
import { BrowserRouter } from "react-router-dom";

describe("NavControls", () => {
  const handleClick = jest.fn();
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavControls handleClick={handleClick} />
      </BrowserRouter>
    );
  });
  it("should render a nav control menu without error", () => {
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveClass("nav-controls");
  });
  it("should render a settings button ", () => {
    const settingsButton = screen.getByRole("button");
    expect(settingsButton).toBeInTheDocument();
  });
  it("should call handleClick when the settings button is clicked", () => {
    const settingsButton = screen.getByRole("button");
    fireEvent.click(settingsButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should render a link to the bookmarks page", () => {
    const link = screen.getByRole("menuitem");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/bookmarks");
  });
  it("should render an bookmarks icon", () => {
    const bookmarkIcon = screen.getByText("bookmarks");
    expect(bookmarkIcon).toBeInTheDocument();
    expect(bookmarkIcon).toHaveClass("material-icons");
  });
});
