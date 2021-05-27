import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import NavControls from "./NavControls";
import { BrowserRouter } from "react-router-dom";
const handleClick = jest.fn();
describe("NavControls", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavControls handleClick={handleClick} />
      </BrowserRouter>
    );
  });
  it("should render a div with the classname nav-controls", () => {
    const navControlBox = screen.getByTestId("nav-control-box");
    expect(navControlBox).toBeInTheDocument();
    expect(navControlBox).toHaveClass("nav-controls");
  });
  it("should render a settings button", () => {
    const settingsButton = screen.getByTestId("settings-button");
    expect(settingsButton).toBeInTheDocument();
  });
  it("should call handle click when the settings button is clicked", () => {
    fireEvent.click(screen.getByTestId("settings-button"));
    expect(handleClick).toHaveBeenCalled();
  });
  it("should render a link to the bookmarks page", () => {
    expect(screen.getByTestId("bookmark-link")).toHaveAttribute(
      "href",
      "/bookmarks"
    );
  });
});
