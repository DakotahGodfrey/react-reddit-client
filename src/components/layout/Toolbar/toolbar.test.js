import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "./Toolbar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../../app/store";
const handleTopClick = jest.fn();
const handleHotClick = jest.fn();
const handleAllClick = jest.fn();
const handleYearClick = jest.fn();
const handleMonthClick = jest.fn();
const handleDayClick = jest.fn();
const handleNewClick = jest.fn();
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Toolbar filter={"string"} />
      </BrowserRouter>
    </Provider>
  );
});

describe("Toolbar", () => {
  it("renders a nav element", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("renders a menu with a class of filter-controls", () => {
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByRole("menu")).toHaveClass("filter-controls");
  });
  describe("hot link", () => {
    it("renders a link to the hot page", () => {
      expect(screen.getByText("Hot")).toBeInTheDocument();
      expect(screen.getByText("Hot")).toHaveAttribute("href", "/hot");
    });
    it("renders an fire icon that's hidden from screenReaders", () => {
      expect(screen.getByText("whatshot")).toBeInTheDocument();
      expect(screen.getByText("whatshot")).toHaveClass("material-icons");
      expect(screen.getByText("whatshot")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
    });
  });
  describe("top link", () => {
    it("renders a link to the top page", () => {
      expect(screen.getByText("Top")).toBeInTheDocument();
      expect(screen.getByText("Top")).toHaveAttribute("href", "/top");
    });
    it("renders an trophy icon that's hidden from screenReaders", () => {
      expect(screen.getByText("emoji_events")).toBeInTheDocument();
      expect(screen.getByText("emoji_events")).toHaveClass("material-icons");
      expect(screen.getByText("emoji_events")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
    });
  });
  describe("new link", () => {
    it("renders a link to the new page", () => {
      expect(screen.getByText("New")).toBeInTheDocument();
      expect(screen.getByText("New")).toHaveAttribute("href", "/new");
    });
    it("renders an new icon that's hidden from screenReaders", () => {
      expect(screen.getByText("new_releases")).toBeInTheDocument();
      expect(screen.getByText("new_releases")).toHaveClass("material-icons");
      expect(screen.getByText("new_releases")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
    });
  });
});
