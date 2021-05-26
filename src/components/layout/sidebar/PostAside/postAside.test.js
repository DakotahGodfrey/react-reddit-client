import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import PostAside from "./PostAside";
import store, { persistor } from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { roundSubs } from "../../../../assets/helpers/helpers";
const subredditData = {
  display_name_prefixed: "r/test",
  public_description: "testing testing testing",
  display_name: "test",
  subscribers: 3333,
  accounts_active: 2330,
};
const roundedSubs = roundSubs(subredditData.subscribers);
const roundedActive = roundSubs(subredditData.accounts_active);
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <PostAside subredditData={subredditData} />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Post Aside", () => {
  it("should render an element with testid of sidebar", () => {
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  it("should render an aside", () => {
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });
  it("should render an element with testId aside-header", () => {
    expect(screen.getByTestId("aside-header")).toBeInTheDocument();
  });
  it("should rendern an element with text content About Community", () => {
    expect(screen.getByText("About Community")).toBeInTheDocument();
  });
  it("should render a link to the subreddit page", () => {
    expect(screen.getByTestId("subreddit-link")).toHaveAttribute(
      "href",
      "/subreddit"
    );
  });
  it("should render a heading with text content display_name_prefixed", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      subredditData.display_name_prefixed
    );
  });
  it("should render an element with testid of aside-information", () => {
    expect(screen.getByTestId("aside-information")).toBeInTheDocument();
  });
  it("should render an element with text content equal to public_description", () => {
    expect(
      screen.getByText(subredditData.public_description)
    ).toBeInTheDocument();
  });
  it("should render an element with text content equal to subscribers rounded down", () => {
    expect(screen.getByText(roundedSubs)).toBeInTheDocument();
  });
  it("should render an element with text content equal to accounts_active rounded down", () => {
    expect(screen.getByText(roundedActive)).toBeInTheDocument();
  });
});
