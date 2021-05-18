import React from "react";
import { render, screen } from "@testing-library/react";
import TrendingItem from "./TrendingItem";

beforeEach(() => {
  const trendingItem = {
    data: {
      title: "title",
      subreddit_name_prefixed: "r/subreddit",
      image: "image.png",
      content: "Text Text",
    },
  };
  render(<TrendingItem trendingItem={trendingItem} />);
});
describe("TrendingItem", () => {
  it("should render a trending card div", () => {
    const trendingCard = screen.getByTestId("trending-card");
    expect(trendingCard).toBeInTheDocument();
  });
  it("should render a heading element with text set to the title passed through props", () => {
    const title = "title";
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(title);
  });
});
