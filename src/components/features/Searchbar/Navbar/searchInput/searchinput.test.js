import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("should render a form", () => {
    render(<SearchInput />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  it("should render a search icon", () => {
    render(<SearchInput />);
    const searchIcon = screen.getByTestId("search");

    expect(searchIcon).toBeInTheDocument();
  });
  it("should render a search input", () => {
    render(<SearchInput />);
    const searchField = screen.getByRole("searchbox");
    expect(searchField).toHaveAttribute("type", "search");
  });
});
