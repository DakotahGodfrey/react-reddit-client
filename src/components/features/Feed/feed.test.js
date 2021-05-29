import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Feed from "./Feed";
import store from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Feed", () => {
  const posts = [
    {
      data: {
        title: "text",
        author: "u/jon",
        subreddit: "r/aww",
        id: 2323,
      },
    },
  ];
  const filter = "hot";
  const handleLoadMoreClick = jest.fn();
  const currentSubreddit = "aww";

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Feed
            posts={posts}
            filter={filter}
            handleLoadMoreClick={handleLoadMoreClick}
            currentSubreddit={currentSubreddit}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it("renders a section element with class of feed-container", () => {
    expect(screen.getByRole("feed")).toBeInTheDocument();
  });
  it("renders a heading element with text equal to the current subreddit", () => {
    expect(screen.getByText(`r/${currentSubreddit}`)).toHaveTextContent(
      currentSubreddit
    );
  });
});

describe("empty feed", () => {
  const posts = ["not found"];
});
