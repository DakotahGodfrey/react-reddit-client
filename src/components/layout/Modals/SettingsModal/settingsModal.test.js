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
});
