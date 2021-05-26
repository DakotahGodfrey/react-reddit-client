import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import ResultsBanner from "./ResultsBanner";
import store, { persistor } from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

describe("Results Banner", () => {
  it("should render an element with testid equal to results-display", () => {
    let term;
    let resultsNum;
    let status;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <ResultsBanner term={term} resultNum={resultsNum} status={status} />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("results-display")).toBeInTheDocument();
  });
  it("should render a span with text content set to the term prop", () => {
    let term = "searchterm";
    let resultsNum;
    let status;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <ResultsBanner term={term} resultNum={resultsNum} status={status} />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(`Query: ${term}`));
  });
  it("should render a span with text content equal to searching... if status is pending", () => {
    let term = "searchterm";
    let resultsNum;
    let status = "pending";
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <ResultsBanner term={term} resultNum={resultsNum} status={status} />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    status = "pending";
    expect(screen.getByText("Searching...")).toBeInTheDocument();
  });
  it("should render a span with text content set to resultsNum", () => {
    let term = "searchterm";
    let resultsNum = 23;
    let status = "idle";
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <ResultsBanner term={term} resultNum={resultsNum} status={status} />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(`Results: ${resultsNum}`)).toBeInTheDocument();
  });
  it("should render a message that informs the user if no results were found", () => {
    let errorMsg = "No results found, try narrowing your search";
    let term = "searchterm";
    let resultsNum = 0;
    let status = "idle";
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <ResultsBanner term={term} resultNum={resultsNum} status={status} />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(errorMsg)).toBeInTheDocument();
  });
});
