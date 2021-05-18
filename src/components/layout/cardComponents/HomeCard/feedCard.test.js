import React from "react";
import { render, screen } from "@testing-library/react";
import FeedCard from "./FeedCard";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(() => {
  let post = {
    data: {
      title: "title",
      image: "https://test.png.com",
      author: "your mom",
      num_comments: "333",
      subreddit_name_prefixed: "r/jokes",
    },
  };
  render(
    <Router>
      <FeedCard post={post} />
    </Router>
  );
});

describe("FeedCard", () => {
  it("should render a section with label user post", () => {
    expect(screen.getByRole("region")).toHaveAttribute(
      "aria-label",
      "user post"
    );
  });
});
