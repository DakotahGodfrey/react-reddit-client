import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Feed from "./Feed";

describe("Feed Component", () => {
  let currentSubreddit = "test";
  const handleLoadMoreClick = jest.fn();
  const handleNewClick = jest.fn();
  const handleTopClick = jest.fn();
  const filter = "";
  const handleHotClick = jest.fn();
  const menuHidden = false;
  const handleAllClick = jest.fn();
  const handleYearClick = jest.fn();
  const handleMonthClick = jest.fn();
  const handleDayClick = jest.fn();
  const posts = ["not found"];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Feed
              posts={posts}
              currentSubreddit={currentSubreddit}
              handleLoadMoreClick={handleLoadMoreClick}
              handleNewClick={handleNewClick}
              handleTopClick={handleTopClick}
              filter={filter}
              handleHotClick={handleHotClick}
              menuHidden={menuHidden}
              handleAllClick={handleAllClick}
              handleYearClick={handleYearClick}
              handleMonthClick={handleMonthClick}
              handleDayClick={handleDayClick}
            />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render an element with testid of feed-container", () => {
    expect(screen.getByTestId("feed-container")).toBeInTheDocument();
  });
  it("should render a heading with text content equal to the currentSubreddit prop.", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      `r/${currentSubreddit}`
    );
  });
  it("should render an element with testid of posts-container", () => {
    expect(screen.getByTestId("posts-container")).toBeInTheDocument();
  });
  it("should render an error message if posts[0] is equal to the string not found", () => {
    expect(
      screen.getByText("Sorry, no subreddit was found with that name.")
    ).toBeInTheDocument();
  });
});

describe("Feed Component Valid", () => {
  let currentSubreddit = "test";
  const handleLoadMoreClick = jest.fn();
  const handleNewClick = jest.fn();
  const handleTopClick = jest.fn();
  const filter = "";
  const handleHotClick = jest.fn();
  const menuHidden = false;
  const handleAllClick = jest.fn();
  const handleYearClick = jest.fn();
  const handleMonthClick = jest.fn();
  const handleDayClick = jest.fn();
  const posts = [
    {
      data: {
        title: "title",
        image: "https://test.png.com",
        author: "fffff",
        num_comments: "333",
        subreddit_name_prefixed: "r/jokes",
        id: 1,
      },
    },
    {
      data: {
        title: "title2",
        image: "https://test.png.com",
        author: "fffff22",
        num_comments: "32233",
        subreddit_name_prefixed: "r/jokes",
        id: 2,
      },
    },
  ];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Feed
              posts={posts}
              currentSubreddit={currentSubreddit}
              handleLoadMoreClick={handleLoadMoreClick}
              handleNewClick={handleNewClick}
              handleTopClick={handleTopClick}
              filter={filter}
              handleHotClick={handleHotClick}
              menuHidden={menuHidden}
              handleAllClick={handleAllClick}
              handleYearClick={handleYearClick}
              handleMonthClick={handleMonthClick}
              handleDayClick={handleDayClick}
            />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  });
  it("should render a user-post element for each item in the posts array", () => {
    expect(screen.getAllByTestId("user-post")).toHaveLength(2);
  });
});
