import React from "react";
import { render, screen } from "@testing-library/react";
import PostFooter from "./PostFooter";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  let postLinks = {
    num_comments: 555,
  };
  render(
    <Router>
      <PostFooter postLinks={postLinks} />
    </Router>
  );
});

describe("Post Footer", () => {
  it("renders a footer with className post-footer", () => {
    const footer = screen.getByTestId("post-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("post-footer");
  });
  it("should render two anchor element with className post-links", () => {
    const link = screen.getAllByRole("link");
    expect(link.length).toEqual(2);
    expect(link[0]).toHaveClass("post-links");
    expect(link[1]).toHaveClass("post-links");
  });
  it("should render an anchor element with a span equal to the number of comments", () => {
    const commentLink = screen.getByTestId("comment-link");
    const commentSpan = screen.getByTestId("num_comments");
    expect(commentLink).toBeInTheDocument();
    expect(commentSpan).toBeInTheDocument();
  });
  it('"should render an anchor element with a string representing comment count"', () => {
    const shareLink = screen.getByTestId("share-link");
    expect(shareLink).toHaveTextContent(/shareShare/);
  });
});
