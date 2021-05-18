import React from "react";
import { render, screen } from "@testing-library/react";
import Feed from "./Feed";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../components/pages/Home/homeSlice";

beforeEach(() => {
  const store = configureStore({ reducer: { home: homeReducer } });
  const posts = [
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/sub",
        num_comments: 444,
        isVideo: false,
        id: 4444,
      },
    },
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/sub",
        num_comments: 444,
        isVideo: false,
        id: 444334,
      },
    },
  ];
  render(
    <Provider store={store}>
      <Router>
        <Feed posts={posts} />
      </Router>
    </Provider>
  );
});

describe("Feed", () => {
  it("should render a section element with class of feed-container", () => {
    const feedSection = screen.getByTestId("feed-container");
    expect(feedSection).toBeInTheDocument;
    expect(feedSection).toHaveClass("feed-container");
  });
  it("should render a div with a className of posts-container", () => {
    const postsContainer = screen.getByTestId("posts-container");
    expect(postsContainer).toBeInTheDocument();
    expect(postsContainer).toHaveClass("posts-container");
  });
  it("should render a div with a className of posts-container", () => {
    const postsContainer = screen.getByTestId("posts-container");
    expect(postsContainer).toBeInTheDocument();
    expect(postsContainer).toHaveClass("posts-container");
  });
  it("should render a userPost for each object in the posts array", () => {
    const userPosts = screen.getAllByTestId("user-post");
    expect(userPosts.length).toEqual(2);
  });
});
