import React from "react";
import { render, screen } from "@testing-library/react";
import Aside from "./TrendingSidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../../app/store";
import { Provider } from "react-redux";
const trendingSubreddits = {
  children: [
    {
      data: {
        display_name_prefixed: "r/testing",
        display_name: "test",
        id: 24523523,
      },
    },
  ],
};
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <Aside trendingSubreddits={trendingSubreddits} />
        </PersistGate>
      </Router>
    </Provider>
  );
});
describe("Aside", () => {
  it("should render an aside with className sidebar", () => {
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("complementary")).toHaveClass("sidebar");
  });
  it("should render an article with className aside-trending", () => {
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveClass("aside-trending");
  });
  it("should render a header with className aside-header", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("aside-header");
  });
  it("should render an h2 with text Trending Communities", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Trending Communities"
    );
  });
});
