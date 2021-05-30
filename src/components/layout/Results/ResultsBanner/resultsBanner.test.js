import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import ResultsBanner from "./ResultsBanner";
import store from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Results Banner", () => {
  describe("header", () => {
    let term;
    let resultsTotal;
    let status;
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ResultsBanner
              status={status}
              term={term}
              resultsTotal={resultsTotal}
            />
          </BrowserRouter>
        </Provider>
      );
    });
    it("renders without error", () => {
      const headerEl = screen.getByText(/Query/).closest("header");
      expect(headerEl).toHaveClass("results-display");
    });
    it("is a live region", () => {
      const headerEl = screen.getByText(/Query/).closest("header");
      expect(headerEl).toHaveAttribute("aria-live", "assertive");
    });
  });
  describe("Query Span", () => {
    let term = "searched";
    let resultsTotal;
    let status;
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ResultsBanner
              status={status}
              term={term}
              resultsTotal={resultsTotal}
            />
          </BrowserRouter>
        </Provider>
      );
    });
    it("renders without error", () => {
      expect(screen.getByText(/Query/)).toBeInTheDocument();
      expect(screen.getByText(/Query/)).toHaveClass("results-term");
    });
    it("renders with the proper text content", () => {
      expect(screen.getByText(/Query/)).toHaveTextContent(`Query: ${term}`);
    });
  });
});
describe("Results total", () => {
  describe("Status pending", () => {
    let term;
    let status = "pending";
    let resultsTotal;
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ResultsBanner
              status={status}
              term={term}
              resultsTotal={resultsTotal}
            />
          </BrowserRouter>
        </Provider>
      );
    });
    it("renders a message to the user", () => {
      expect(screen.getByText("Searching...")).toBeInTheDocument();
    });
  });
  describe("No results returned", () => {
    let term;
    let status;
    let resultsTotal = 0;
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ResultsBanner
              status={status}
              term={term}
              resultsTotal={resultsTotal}
            />
          </BrowserRouter>
        </Provider>
      );
    });
    it("should render a message to the user with the proper text", () => {
      expect(
        screen.getByText("No results found, try narrowing your search")
      ).toBeInTheDocument();
    });
  });
  describe("Results returned", () => {
    let term;
    let status;
    let resultsTotal = 44;
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ResultsBanner
              status={status}
              term={term}
              resultsTotal={resultsTotal}
            />
          </BrowserRouter>
        </Provider>
      );
    });
    it("should render a message to the user with the proper text", () => {
      expect(screen.getByText(`Results: ${resultsTotal}`)).toBeInTheDocument();
    });
  });
});
