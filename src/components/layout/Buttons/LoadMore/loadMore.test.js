import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoadMore from "./LoadMore";
import { BrowserRouter as Router } from "react-router-dom";

describe("LoadMore", () => {
  it("should render a button element without errors", () => {
    const handleLoadMoreClick = jest.fn();
    render(<LoadMore handleLoadMoreClick={handleLoadMoreClick} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  it("should render an expand_more icon", () => {
    const handleLoadMoreClick = jest.fn();
    render(<LoadMore handleLoadMoreClick={handleLoadMoreClick} />);
    const expandIcon = screen.getByText("expand_more");
    expect(expandIcon).toBeInTheDocument();
    expect(expandIcon).toHaveClass("material-icons");
  });
  it("should call the the passed handleLoadMore function on click", () => {
    const handleLoadMoreClick = jest.fn();
    render(<LoadMore handleLoadMoreClick={handleLoadMoreClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleLoadMoreClick).toHaveBeenCalled();
  });
});
