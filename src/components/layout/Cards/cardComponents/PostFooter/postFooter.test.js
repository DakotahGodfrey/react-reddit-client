import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostFooter from "./PostFooter";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
const handleBookmark = jest.fn();
let isBookmarked;
const removeBookmark = jest.fn();
let bookmarked = true;
beforeEach(() => {
  let postLinks = {
    num_comments: 5255,
    subreddit: "awww",
  };
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <PostFooter
              postLinks={postLinks}
              bookmarked={bookmarked}
              handleBookmark={handleBookmark}
              isBookmarked={isBookmarked}
              removeBookmark={removeBookmark}
            />
          </Router>
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("Post Footer", () => {
  it("renders a footer with className post-footer", () => {
    const footer = screen.getByTestId("post-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("post-footer");
  });
  it("renders an element with text content equal to the number comments rounded down ", () => {
    const comments = screen.getByTestId("comments");
    expect(comments).toBeInTheDocument();
    expect(comments).toHaveTextContent("5k Comments");
  });
  describe("bookmark button", () => {
    it("should render a button with testid bookmark-button", () => {
      const bookmarkButton = screen.getByTestId("bookmark-button");
      expect(bookmarkButton).toBeInTheDocument();
    });
    it("should call handleBookmark when clicked", () => {
      const bookmarkButton = screen.getByTestId("bookmark-button");
      fireEvent.click(bookmarkButton);
      expect(handleBookmark).toHaveBeenCalled();
    });
    // it("should be disabled if the isBookmarked property is true", () => {
    //   isBookmarked = true;
    //   const bookmarkButton = screen.getByTestId("bookmark-button");
    //   expect(bookmarkButton).toBeDisabled();
    // });
  });
  describe("Remove Bookmark Button", () => {
    it("should render a button with testid remove-bookmark", () => {
      const removeBookmarkButton = screen.getByTestId("remove-bookmark");
      expect(removeBookmarkButton).toBeInTheDocument();
    });
    it("should call the removeBookmark function when clicked", () => {
      const removeBookmarkButton = screen.getByTestId("remove-bookmark");
      fireEvent.click(removeBookmarkButton);
      expect(removeBookmark).toHaveBeenCalled();
    });
  });
});
