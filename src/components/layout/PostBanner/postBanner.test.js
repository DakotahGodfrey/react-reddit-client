import React from "react";
import { render, screen } from "@testing-library/react";
import "./PostBanner";
import PostBanner from "./PostBanner";
beforeEach(() => {
  let postDetails = { subreddit_name_prefixed: "r/aww", author: "u/jon" };
  render(<PostBanner postDetails={postDetails} />);
  const { subreddit_name_prefixed, author } = postDetails;
});
describe("Post Banner", () => {
  it("should render a header with className post-information", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("post-information");
  });
  it("should render a span with the subreddit text", () => {
    let postDetails = { subreddit_name_prefixed: "r/aww", author: "u/jon" };
    const { subreddit_name_prefixed, author } = postDetails;
    expect(screen.getByTestId("subreddit")).toBeInTheDocument();
    expect(screen.getByTestId("subreddit")).toHaveTextContent(
      subreddit_name_prefixed
    );
  });
  it("should render a span with the author text", () => {
    let postDetails = { subreddit_name_prefixed: "r/aww", author: "u/jon" };
    const { subreddit_name_prefixed, author } = postDetails;
    expect(screen.getByTestId("author")).toBeInTheDocument();
    expect(screen.getByTestId("author")).toHaveTextContent(author);
  });
});
