import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LargePost from "./LargePost";

let postContent = {
  title: "title",
  video: " ",
  image: " ",
  selftext: "selfie",
  thumbnail: "png.png",
};
describe("Large Post", () => {
  beforeEach(() => {
    render(<LargePost postContent={postContent} />);
  });
  it("should render an article element", () => {
    const articleElement = screen.getByRole("article");
    expect(articleElement).toBeInTheDocument();
  });
  it("should render a heading element with text equal to the title passed through props", () => {
    const title = "title";
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(title);
  });
});
describe("Large Post Media", () => {
  it("should render a video element and a source element if the video prop is truthy, the source should a src attribute equal to the video property", () => {
    postContent.video = "src.mp4";
    render(<LargePost postContent={postContent} />);
    const video = screen.getByTestId("video");
    const source = screen.getByTestId("source");
    expect(video).toBeInTheDocument();
    expect(source).toBeInTheDocument();
    expect(source).toHaveAttribute("src", postContent.video);
  });
  it("should render an image element if the imapge prop is truthy and the video prop is falsy, the img src should be equal to the img prop", () => {
    postContent.video = null;
    render(<LargePost postContent={postContent} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", postContent.image);
  });
  it("should render the post selftext if there is no image or video property", () => {
    postContent.image = null;
    render(<LargePost postContent={postContent} />);

    const body = screen.getByText(postContent.selftext);
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent(postContent.selftext);
  });
});
