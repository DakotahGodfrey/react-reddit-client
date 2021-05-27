import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../../app/store";
const handleSubmit = jest.fn();
describe("SearchInput", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <SearchInput />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render a form", () => {
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
  it("should render a search icon", () => {
    const searchIcon = screen.getByText("search");
    expect(searchIcon).toBeInTheDocument();
  });
  it("should render a search input", () => {
    expect(screen.getByRole("searchbox")).toHaveAttribute("type", "search");
  });
  // it("should call handleSubmit on form submit", () => {
  //   fireEvent.submit(screen.getByRole("form"));
  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });
});
