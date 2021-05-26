import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import SettingsModal from "./SettingsModal";

const handleClick = jest.fn();
const handleDarkToggle = jest.fn();
const show = true;

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsModal
            show={show}
            handleClick={handleClick}
            handleDarkToggle={handleDarkToggle}
          />
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("Settings Modal", () => {
  it("should render an element with a role of dialog", () => {
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("should render an element with a testid of modal-content ", () => {
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
  });
  it("should render an element with a testid of modal-header", () => {
    expect(screen.getByTestId("modal-header")).toBeInTheDocument();
  });
  it("should render a heading with text content set to 'Settings'", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Settings");
  });
  it("should render an element with a testid of modal-body", () => {
    expect(screen.getByTestId("modal-body")).toBeInTheDocument();
  });
  it("should render a form element", () => {
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  it("should render a checkbox element", () => {
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("should render an element with testid modal-footer", () => {
    expect(screen.getByTestId("modal-footer")).toBeInTheDocument();
  });
  it("should render a button element with testid close-modal", () => {
    expect(screen.getByTestId("modal-close")).toBeInTheDocument();
  });
  describe("DarkMode Toggle", () => {
    it("should call handleDarkToggle when clicked", () => {
      const toggleEl = screen.getByTestId("dark-mode-toggle");
      fireEvent.click(toggleEl);
      expect(handleDarkToggle).toHaveBeenCalledTimes(1);
    });
  });
  describe("Close Modal Button", () => {
    it("should call handleClick when clicked", () => {
      const closeModal = screen.getByTestId("modal-close");
      fireEvent.click(closeModal);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
