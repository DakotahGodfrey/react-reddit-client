import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import PostAside from "./PostAside";
import store from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { roundSubs } from "../../../../assets/helpers/helpers";
const subredditDescription = {
  display_name_prefixed: "r/test",
  public_description: "testing testing testing",
  display_name: "test",
  subscribers: 3333,
  accounts_active: 2330,
};
const roundedSubs = roundSubs(subredditDescription.subscribers);
const roundedActive = roundSubs(subredditDescription.accounts_active);
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PostAside subredditDescription={subredditDescription} />
      </BrowserRouter>
    </Provider>
  );
});

describe("Post Aside", () => {
  it("should render an div with a class of sidebar", () => {
    expect(
      screen.getByRole("complementary").closest("div")
    ).toBeInTheDocument();
    expect(screen.getByRole("complementary").closest("div")).toHaveClass(
      "sidebar post-sidebar"
    );
  });
  it("should render an aside with role complementary", () => {
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });
  it("should render a header with class of aside-header", () => {
    expect(
      screen.getByText("About Community").closest("header")
    ).toBeInTheDocument();
    expect(screen.getByText("About Community").closest("header")).toHaveClass(
      "aside-header"
    );
  });
  it("should rendern an element with text content About Community", () => {
    expect(screen.getByText("About Community")).toBeInTheDocument();
  });
  it("should render a link to the subreddit page", () => {
    expect(
      screen.getByText(subredditDescription.display_name_prefixed).closest("a")
    ).toHaveAttribute("href", `/r/${subredditDescription.display_name}`);
  });
  it("should render a heading with text content display_name_prefixed", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      subredditDescription.display_name_prefixed
    );
  });
  it("should render an element with class of aside-information", () => {
    expect(
      screen.getByText(subredditDescription.public_description).closest("div")
    ).toBeInTheDocument();
    expect(
      screen
        .getByText(subredditDescription.public_description)
        .closest("div.aside-information")
    ).toBeInTheDocument();
  });
  it("should render an element with text content equal to public_description", () => {
    expect(
      screen.getByText(subredditDescription.public_description)
    ).toBeInTheDocument();
  });
  it("should render an element with text content equal to subscribers rounded down", () => {
    expect(screen.getByText(roundedSubs)).toBeInTheDocument();
  });
  it("should render an element with text content equal to accounts_active rounded down", () => {
    expect(screen.getByText(roundedActive)).toBeInTheDocument();
  });
});
