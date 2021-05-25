import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import PostResult from "./PostResult";
import noImgThumbnail from "../../../../../assets/media/img_placeholder.png";
const post = {
  data: {
    title: "title",
    subreddit_name_prefixed: "r/test",
    id: 2342,
    author: "author",
    created_utc: 2342342342,
  },
};

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <PostResult post={post} />{" "}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Post Result", () => {
  it("should render a list item", () => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
  it("should render a link to the post page", () => {
    const linkEl = screen.getByTestId("post-link");
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute("href", "/post");
  });
  it("should render an element with testid results-thumbnail", () => {
    expect(screen.getByTestId("results-thumbnail")).toBeInTheDocument();
  });
  describe("Thumbnail image", () => {
    it("should render an image element with a src of noImgThumbnail if the thumbnail property is falsy", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", noImgThumbnail);
    });
    it("should render an image element with a src of noImgThumbnail if the thumbnail property is default", () => {
      post.data.thumbnail = "default";
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", noImgThumbnail);
    });
    it("should render an image element with a src of noImgThumbnail if the thumbnail property is self", () => {
      post.data.thumbnail = "self";
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", noImgThumbnail);
    });
    // it("should render an image element with a src equal to the thumbnail property", () => {
    //   post.data.thumbnail = "src.png";
    //   const image = screen.getByRole("img");
    //   expect(image).toHaveAttribute("src", post.data.thumbnail);
    // });
  });
  it("should render an element with test-id results-title", () => {
    expect(screen.getByTestId("results-title")).toBeInTheDocument();
  });
  it("should render a heading with text content equal to the title property of the post", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(post.data.title);
  });
  it("should render an element with testid of result-title", () => {
    expect(screen.getByTestId("results-title")).toBeInTheDocument();
  });
  it("should render an element with test-id of post-information", () => {
    expect(screen.getByTestId("post-information")).toBeInTheDocument();
  });
  it("should render an element  with text-content equal to the author property", () => {
    expect(screen.getByText(`u/${post.data.author}`)).toBeInTheDocument();
  });
  it("should render an element with text content equal to the subreddit_name_prefixed prop", () => {
    expect(
      screen.getByText(post.data.subreddit_name_prefixed)
    ).toBeInTheDocument();
  });
});
