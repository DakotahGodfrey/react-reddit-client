import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import TrendingSubItem from "./TrendingSubItem";

const subreddit = {
  data: {
    display_name_prefixed: "r/test",
    icon_img: "src.png",
    display_name: "test",
  },
};

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <TrendingSubItem subreddit={subreddit} />
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("TrendingSubItem", () => {
  it("should render an li", () => {
    const liEl = screen.getByRole("listitem");
    expect(liEl).toBeInTheDocument();
  });
  it("should render a anchor element with testid of anchor-link", () => {
    const anchorEl = screen.getByTestId("anchor-link");
    expect(anchorEl).toBeInTheDocument();
  });
  it("should render an element with testid subreddit-content", () => {
    const subredditContent = screen.getByTestId("subreddit-content");
    expect(subredditContent).toBeInTheDocument();
  });
  it("should render an image with a src equal to the icon_img prop passed.", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", subreddit.data.icon_img);
  });
  it("should render an element with text content equal to display_name_prefixed prop", () => {
    const displayNameEl = screen.getByTestId("display-name");
    expect(displayNameEl).toHaveTextContent(
      subreddit.data.display_name_prefixed
    );
  });
});
