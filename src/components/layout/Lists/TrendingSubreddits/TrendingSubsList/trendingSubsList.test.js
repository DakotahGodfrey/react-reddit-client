import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import TrendingSubsList from "./TrendingSubsList";
const trendingSubreddits = [
  {
    data: {
      display_name_prefixed: "r/test",
      icon_img: "src.png",
      display_name: "test",
    },
  },
];
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <TrendingSubsList trendingSubreddits={trendingSubreddits} />
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("Trending Subs List", () => {
  it("should render a list element", () => {
    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });
});
