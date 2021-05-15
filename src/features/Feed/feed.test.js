import React from "react";
import { render, screen } from "@testing-library/react";
import Feed from "./Feed";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(() => {
  const posts = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      image: "https://i.redd.it/043rme7pzvy61.jpg",
      author: "u/throwaway",
      subreddit: "r/rarepuppers",
      commentCount: 453,
    },
    {
      title:
        "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs",
      author: "u/jeffGoldblum",
      subreddit: "r/jeffsum",
      commentCount: 666,
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
    expect(userPosts.length).toEqual(2);
  });
});
