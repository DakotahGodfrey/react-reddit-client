import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeCard from "./HomeCard";
let post = {
  data: {
    title: "title",
    image: "https://test.png.com",
    author: "fffff",
    num_comments: "333",
    subreddit_name_prefixed: "r/jokes",
  },
};
const handleClick = jest.fn();
let bookmakerked;
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <HomeCard post={post} />
          </Router>
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("HomeCard", () => {
  it("should render a section tag with the test id user-post", () => {
    const sectionTag = screen.getByTestId("user-post");
    expect(sectionTag).toBeInTheDocument();
  });
  describe("Content Link", () => {
    it("should render a link element with testid content link", () => {
      const linkEl = screen.getByTestId("content-link");
      expect(linkEl).toBeInTheDocument();
    });
    // it("should call a handleClick function when clicked", () => {
    //   const linkEl = screen.getByTestId("content-link");
    //   fireEvent.click(linkEl);
    //   screen.debug();
    //   expect(handleClick).toHaveBeenCalled();
    // });
  });
});
