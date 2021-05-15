import React from "react";
import { render, screen } from "@testing-library/react";
import TrendingItem from "./TrendingItem";

beforeEach(() => {
  const trendingItem = {
    title: "title",
    subreddit: "r/subreddit",
    image: "image.png",
    content: "Text Text",
  };
  render(<TrendingItem trendingItem={trendingItem} />);
});
describe("TrendingItem", () => {
  it("should render a figure element", () => {
    const figure = screen.getByRole("figure");
    expect(figure).toBeInTheDocument();
  });
  describe("img", () => {
    it("should render an img element with a src passed through props", () => {
      const img = screen.getByRole("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "image.png");
    });
    it("should render an img element with an alt passed through props", () => {
      const img = screen.getByRole("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "title");
    });
  });
  describe("figure caption", () => {
    it("should render a figcaption element", () => {
      const figCaption = screen.getByTestId("figure-caption");
      expect(figCaption).toBeInTheDocument();
    });
    it("should render a heading with text content equal to the title passed through props", () => {
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("title");
    });
    it("should render text content equal to the content passed through props", () => {
      const textContent = screen.getByText("Text Text");
      expect(textContent).toBeInTheDocument();
    });
    it("should render with text content equal to the subreddit passed through props", () => {
      const subreddit = screen.getByText("r/subreddit");
      expect(subreddit).toBeInTheDocument();
    });
  });
});
