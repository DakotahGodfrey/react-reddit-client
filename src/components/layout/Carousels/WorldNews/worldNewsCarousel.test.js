import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import WorldNewsCarousel from "./WorldNewsCarousel";

const trendingItems = [
  {
    data: {
      title: "testA",
      url: "testurl",
      id: 1,
    },
  },
  {
    data: {
      title: "testB",
      url: "testurlB",
      id: 2,
    },
  },
];
beforeEach(() => {
  render(<WorldNewsCarousel trendingItems={trendingItems} />);
});

describe("World News Carousel", () => {
  it("should render a section element with testid carousel section", () => {
    const carouselSection = screen.getByTestId("carousel-section");

    expect(carouselSection).toBeInTheDocument();
  });
  it("should render an element with testid left-fade", () => {
    const leftFade = screen.getByTestId("left-fade");
    expect(leftFade).toBeInTheDocument();
  });
  it("should render an element with testid carousel-row", () => {
    const carouselRow = screen.getByTestId("carousel-row");
    expect(carouselRow).toBeInTheDocument();
  });
  it("should render an element with testid right-fade", () => {
    const rightFade = screen.getByTestId("right-fade");
    expect(rightFade).toBeInTheDocument();
  });
});
