import React from "react";
import { render, screen } from "@testing-library/react";
import Feed from "./Feed";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(() => {
  const posts = [
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/food",
        num_comments: 666,
        is_video: false,
        id: 14,
      },
    },
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/food",
        num_comments: 666,
        is_video: false,
        id: 12,
      },
    },
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/food",
        num_comments: 666,
        is_video: false,
        id: 11,
      },
    },
  ];
  render(
    <Router>
      <Feed posts={posts} />
    </Router>
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
    expect(userPosts.length).toEqual(3);
  });
});
