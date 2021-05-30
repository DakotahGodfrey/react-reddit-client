import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { Provider } from "react-redux";
import store from "../../../../../app/store";

const handleSubmit = jest.fn();
const handleChange = jest.fn();
describe("SearchInput", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
  });
  describe("search form", () => {
    it("should render a form", () => {
      expect(screen.getByRole("form")).toBeInTheDocument();
    });
    // it("should call handleSubmit when form is submitted", () => {
    //   fireEvent.change(screen.getByRole("form"));
    //   expect(handleSubmit).toHaveBeenCalled();
    // });
  });
  describe("input", () => {
    it("should render a input with type search", () => {
      const searchBox = screen.getByRole("searchbox");
      expect(searchBox).toBeInTheDocument();
      expect(searchBox).toHaveAttribute("aria-label", "Search Reddit");
    });
    // it("should call handleChange when a user types", () => {
    //   const searchBox = screen.getByRole("searchbox");
    // });
  });

  it("should render a search icon", () => {
    expect(screen.getByText("search")).toBeInTheDocument();
    expect(screen.getByText("search")).toHaveClass("material-icons");
  });
});
