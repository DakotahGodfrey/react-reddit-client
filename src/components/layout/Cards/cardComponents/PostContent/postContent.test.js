import React from "react";
import { render, screen } from "@testing-library/react";
import PostContent from "./PostContent";

describe("Post Content", () => {
  it("should render an article with className post-content", () => {
    let postContent = {
      title: "text",
      image: "https://src.png",
      video: "http://src.mp4",
    };
    render(<PostContent postContent={postContent} />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("post-content");
  });
  it("should render an h2 with className post-title", () => {
    let postContent = {
      title: "text",
      spell: "spell",
      image: "https://src.png",
      video: "http://src.mp4",
    };
    render(<PostContent postContent={postContent} />);
    const h2 = screen.getByRole("heading");
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveClass("post-title");
  });
  describe("image", () => {
    it("should render an img if an image src is passed through props and no video exists", () => {
      let postContent = {
        title: "text",
        image: "https://src.png",
      };
      render(<PostContent postContent={postContent} />);
      const img = screen.getByRole("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", postContent.image);
    });
    it("should not render an img if the image passed through props is falsy", () => {
      let postContent = {
        title: "text",
        image: "",
        video: "http://src.mp4",
      };
      render(<PostContent postContent={postContent} />);
      const img = screen.queryByRole("img");
      expect(img).toBeNull();
    });
  });
  describe("video", () => {
    it("should render a video if a video src is passed through props ", () => {
      let postContent = {
        title: "text",
        image: "https://src.png",
        video: "http://src.mp4",
      };
      render(<PostContent postContent={postContent} />);
      const video = screen.getByTestId("video");
      expect(video).toBeInTheDocument();
    });
    it("should render a source element with a src attribute equal to the video src passed through props", () => {
      let postContent = {
        title: "text",
        image: "https://src.png",
        video: "http://src.mp4",
      };
      render(<PostContent postContent={postContent} />);
      const source = screen.getByTestId("source");
      expect(source).toHaveAttribute("src", postContent.video);
    });
    it("should not render a video if the video passed through props is falsy", () => {
      let postContent = {
        title: "text",
        image: "https://src.png",
        video: "",
      };
      render(<PostContent postContent={postContent} />);
      const video = screen.queryByTestId("video");
      expect(video).toBeNull();
    });
  });
});
