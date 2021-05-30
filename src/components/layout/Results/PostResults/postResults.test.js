import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import PostResults from "./PostResults";
const postResults = [
  {
    data: {
      title: "title",
      display_name_prefixed: "r/test",
      id: 2342,
      author: "dfsadf",
      created_utc: 2342342342,
    },
    data: {
      title: "titldfsde",
      display_name_prefixed: "r/tessdfsdt",
      id: 234234234,
      author: "dfsadf",
      created_utc: 234233342342,
    },
    data: {
      title: "title",
      display_name_prefixed: "r/test",
      id: 2332343242,
      author: "dfsadf",
      created_utc: 2342342342,
    },
  },
];
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PostResults postResults={postResults} />
      </BrowserRouter>
    </Provider>
  );
});

describe("PostResults", () => {
  it("should render a list element with a class of results-post-container", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("results-posts-container");
  });
  it("should render a list item for each item in the postsArray Prop", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(postResults.length);
  });
});
