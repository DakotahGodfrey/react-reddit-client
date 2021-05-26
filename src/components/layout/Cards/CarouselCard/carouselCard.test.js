import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarouselCard from "./CarouselCard";
const trendingItem = {
  data: {
    title: "text",
    url: "https.source.ca",
  },
};
beforeEach(() => {
  render(<CarouselCard trendingItem={trendingItem} />);
});
describe("Carousel Card", () => {
  it("should render an element with testid carousel-card", () => {
    const carouselCard = screen.getByTestId("carousel-card");
    expect(carouselCard).toBeInTheDocument();
  });
  it("should render an element with text content equal to the title prop of the passed prop", () => {
    const el = screen.getByTestId("title-element");
    expect(el).toBeInTheDocument();
  });
  it("should render a link with an href attribute and text content equal to the url prop of the passed prop", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", trendingItem.data.url);
    expect(link).toHaveTextContent(trendingItem.data.url);
  });
});
