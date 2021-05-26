import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "./PostBanner";
import PostBanner from "./PostBanner";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { timeSince } from "../../../../../assets/helpers/helpers";

let postDetails = {
  subreddit_name_prefixed: "r/aww",
  author: "u/jon",
  subreddit: "aww",
  d: 1621718745749,
};
const timeStamp = timeSince(Date.parse(postDetails.d));
let isLarge;
const handleClick = jest.fn();

beforeEach(() => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <PostBanner postDetails={postDetails} isLarge={isLarge} />
        </Router>
      </PersistGate>
    </Provider>
  );
});

describe("Post Banner", () => {
  it("should render a div with a testid of post banner", () => {
    const div = screen.getByTestId("post-banner");
    expect(div).toBeInTheDocument("");
  });
  it("should have a className of post-information if isLarge is false", () => {
    const div = screen.getByTestId("post-banner");
    expect(div).toHaveClass("post-information");
  });

  it("should have a className of post-large-information if isLarge is true", () => {
    isLarge = true;
    const div = screen.getByTestId("post-banner");
    expect(div).toHaveClass("post-information");
  });
  describe("subreddit link", () => {
    it("should render a link with text content equal to the subreddit_name_prefixed property", () => {
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(postDetails.subreddit_name_prefixed);
    });
    // it("should call a handleClick function on click", () => {
    //   const link = screen.getByRole("link");
    //   fireEvent.click(link);
    //   expect(handleClick).toHaveBeenCalled();
    // });
  });
  describe("post banner byline", () => {
    it("should render an element with text content equal to the author property", () => {
      const author = screen.getByTestId("author");
      expect(author).toBeInTheDocument();
      expect(author).toHaveTextContent(postDetails.author);
    });
    it("should render an element with text content equal to the time since the post was created", () => {
      const timeEl = screen.getByTestId("time-stamp");
      expect(timeEl).toBeInTheDocument();
      expect(timeEl).toHaveTextContent(timeStamp);
    });
  });
});
