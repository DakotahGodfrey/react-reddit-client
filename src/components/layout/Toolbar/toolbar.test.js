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
        <PersistGate loading={null} persistor={persistor}>
          <Toolbar
            handleNewClick={handleNewClick}
            handleTopClick={handleTopClick}
            handleHotClick={handleHotClick}
            handleAllClick={handleAllClick}
            handleYearClick={handleYearClick}
            handleMonthClick={handleMonthClick}
            handleDayClick={handleDayClick}
            filter={"string"}
          />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
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
  it("should render 2 buttons", () => {
    const filterOptions = screen.getAllByRole("button");
    expect(filterOptions.length).toEqual(2);
  });
  it("should render a select box", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("should render 4 options", () => {
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });
  it("should call handleAllClick when the all time option is clicked", () => {
    const allOpt = screen.getByTestId("all-time");
    fireEvent.click(allOpt);
    expect(handleAllClick).toHaveBeenCalledTimes(1);
  });
  it("should call handleMonthClick when the month option is clicked", () => {
    const monthOpt = screen.getByTestId("month");
    fireEvent.click(monthOpt);
    expect(handleMonthClick).toHaveBeenCalledTimes(1);
  });
  it("should call handledayClick when the day option is clicked", () => {
    const dayOpt = screen.getByTestId("day");
    fireEvent.click(dayOpt);
    expect(handleDayClick).toHaveBeenCalledTimes(1);
  });
  it("should call handleYearClick when the day option is clicked", () => {
    const yearOpt = screen.getByTestId("year");
    fireEvent.click(yearOpt);
    expect(handleYearClick).toHaveBeenCalledTimes(1);
  });
  describe("Hot Button", () => {
    it("should call handleTopClick when clicked", () => {
      const hotButton = screen.getByTestId("hot");
      fireEvent.click(hotButton);
      expect(handleHotClick).toHaveBeenCalledTimes(1);
    });
  });
  describe("Top Button", () => {
    it("should call  handleTopClick when clcike ", () => {
      fireEvent.click(screen.getByRole("combobox"));
      expect(handleTopClick).toHaveBeenCalledTimes(1);
    });
  });
  describe("New Button", () => {
    it("should call handleNewClick when clicked", () => {
      fireEvent.click(screen.getByTestId("new"));
      expect(handleNewClick).toHaveBeenCalledTimes(1);
    });
  });
});
