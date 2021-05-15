import React from "react";
import { render, screen } from "@testing-library/react";
import Trending from "./Trending";
beforeEach(() => {
  const trendingItems = [
    {
      title: "Doge to the moon",
      image: "image.png",
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 1,
    },
  ];
  render(<Trending trendingItems={trendingItems} />);
});
describe("Trending", () => {
  it("should render a section element with the class trending", () => {
    const trendingSection = screen.getByRole("region");
    expect(trendingSection).toBeInTheDocument();
    expect(trendingSection).toHaveClass("trending");
  });
  it("should render a div with the className trending-row", () => {
    const trendingRow = screen.getByTestId("trending-row");
    expect(trendingRow).toBeInTheDocument();
    expect(trendingRow).toHaveClass("trending-row");
  });
});
