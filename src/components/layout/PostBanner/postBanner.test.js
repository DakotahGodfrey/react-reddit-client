import React from "react";
import { render, screen } from "@testing-library/react";
import "./PostBanner";
import PostBanner from "./PostBanner";
beforeEach(() => {
  let postDetails = { subreddit: "r/aww", author: "u/jon" };
  render(<PostBanner postDetails={postDetails} />);
  const { subreddit, author } = postDetails;
});
describe("Post Banner", () => {
  it("should render a header with className post-information", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("post-information");
  });
  it("should render a span with the subreddit text", () => {
    let postDetails = { subreddit: "r/aww", author: "u/jon" };
    const { subreddit, author } = postDetails;
    expect(screen.getByTestId("subreddit")).toBeInTheDocument();
    expect(screen.getByTestId("subreddit")).toHaveTextContent(subreddit);
  });
  it("should render a span with the author text", () => {
    let postDetails = { subreddit: "r/aww", author: "u/jon" };
    const { subreddit, author } = postDetails;
    expect(screen.getByTestId("author")).toBeInTheDocument();
    expect(screen.getByTestId("author")).toHaveTextContent(author);
  });
});
