import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Comment from "./Comment";
const avatarSource =
  "https://www.redditstatic.com/avatars/avatar_default_07_7E53C1.png";
const comment = {
  data: {
    author: "J.R.R Tolkein",
    body: "some shit",
    created_utc: Math.round(Date.now() / 1000) - 31536000 * 1,
  },
};
beforeEach(() => {
  render(<Comment comment={comment} />);
});
describe("Comment", () => {
  it("render an element with testid comment-card", () => {
    const commentCard = screen.getByTestId("comment-card");
    expect(commentCard).toBeInTheDocument();
  });
  it("should render an element with testid comment-avatar", () => {
    const commentAvatar = screen.getByTestId("comment-avatar");
    expect(commentAvatar).toBeInTheDocument();
  });
  it("should render an image tag with src equal to avatar Source", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", avatarSource);
  });
  it("should render an element with testid comment content", () => {
    const commentContent = screen.getByTestId("comment-content");
    expect(commentContent).toBeInTheDocument();
  });
  it("should render an element with test id comment-byline", () => {
    const commentByline = screen.getByTestId("comment-byline");
    expect(commentByline).toBeInTheDocument();
  });
  it("should render an element with a testid of comment-author", () => {
    const commentAuthor = screen.getByTestId("comment-byline");
    expect(commentAuthor).toBeInTheDocument();
  });
  it("should render an element with a testid of comment-time.", () => {
    const commentTime = screen.getByTestId("comment-time");
    expect(commentTime).toBeInTheDocument();
    expect(commentTime).toHaveTextContent("just now ago");
  });
  it("should render an element a textContent equal to the body prop", () => {
    const commentBody = screen.getByText(comment.data.body);
    expect(commentBody).toBeInTheDocument();
  });
});
