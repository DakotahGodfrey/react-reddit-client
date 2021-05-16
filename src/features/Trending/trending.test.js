import React from "react";
import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import Trending from "./Trending";
import { Provider } from "react-redux";
import homeReducer from "../../components/pages/Home/homeSlice";

beforeEach(() => {
  const store = configureStore({ reducer: { home: homeReducer } });
  const trendingItems = [
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/sub",
        num_comments: 444,
        isVideo: false,
        id: 4444,
      },
    },
    {
      data: {
        title: "text",
        author: "author",
        subreddit_name_prefixed: "r/sub",
        num_comments: 444,
        isVideo: false,
        id: 444334,
      },
    },
  ];
  render(
    <Provider store={store}>
      <Router>
        <Trending trendingItems={trendingItems} />
      </Router>
    </Provider>
  );
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
