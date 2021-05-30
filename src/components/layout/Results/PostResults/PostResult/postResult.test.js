import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../../app/store";
import PostResult from "./PostResult";
import noImgThumbnail from "../../../../../assets/media/img_placeholder.png";

const generatePost = (
  subreddit,
  id,
  thumbnail,
  title,
  num_comments,
  author,
  subreddit_name_prefixed
) => {
  return {
    data: {
      subreddit,
      id,
      thumbnail,
      title,
      num_comments,
      author,
      subreddit_name_prefixed,
    },
  };
};
describe("Post Result", () => {
  describe("List item ", () => {
    const post = generatePost(
      "aww",
      23324,
      "src.png",
      "title",
      4543,
      "23423",
      "r/awww"
    );
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostResult post={post} />
          </BrowserRouter>
        </Provider>
      );
    });
    it("renders a list item with class results-post", () => {
      expect(screen.getByRole("listitem")).toBeInTheDocument();
      expect(screen.getByRole("listitem")).toHaveClass("results-post");
    });
    it("renders a link to the post path with a class of post-link", () => {
      expect(screen.getByTestId("post-link")).toHaveAttribute(
        "href",
        `/r/${post.data.subreddit}/post/${post.data.id}`
      );
      expect(screen.getByTestId("post-link")).toHaveClass("post-link");
    });
  });

  describe("Results thumbnail", () => {
    describe("thumbnail container", () => {
      const post = generatePost(
        "aww",
        23324,
        "src.png",
        "title",
        4543,
        "23423",
        "r/awww"
      );
      beforeEach(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PostResult post={post} />
            </BrowserRouter>
          </Provider>
        );
      });
      it("renders a div with a class of results-thumbnail", () => {
        expect(screen.getByRole("figure")).toBeInTheDocument();
        expect(screen.getByRole("figure")).toHaveClass("results-thumbnail");
      });
    });
    describe("valid thumbnail prop", () => {
      const post = generatePost(
        "aww",
        23324,
        "src.png",
        "title",
        4543,
        "23423",
        "r/awww"
      );
      beforeEach(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PostResult post={post} />
            </BrowserRouter>
          </Provider>
        );
      });
      it("renders an image element with a src equal to the thumbnail prop", () => {
        expect(screen.getByRole("img")).toHaveAttribute(
          "src",
          `${post.data.thumbnail}`
        );
      });
    });
    describe("false thumbnail prop", () => {
      const post = generatePost(
        "aww",
        23324,
        "",
        "title",
        4543,
        "23423",
        "r/awww"
      );
      beforeEach(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PostResult post={post} />
            </BrowserRouter>
          </Provider>
        );
      });
      it("renders an image place holder", () => {
        expect(screen.getByRole("img")).toHaveAttribute("src", noImgThumbnail);
      });
    });
    describe("self thumbnail prop", () => {
      const post = generatePost(
        "aww",
        23324,
        "self",
        "title",
        4543,
        "23423",
        "r/awww"
      );
      beforeEach(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PostResult post={post} />
            </BrowserRouter>
          </Provider>
        );
      });
      it("renders an image place holder", () => {
        expect(screen.getByRole("img")).toHaveAttribute("src", noImgThumbnail);
      });
    });
    describe("default thumbnail prop", () => {
      const post = generatePost(
        "aww",
        23324,
        "default",
        "title",
        4543,
        "23423",
        "r/awww"
      );
      beforeEach(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PostResult post={post} />
            </BrowserRouter>
          </Provider>
        );
      });
      it("renders an image place holder", () => {
        expect(screen.getByRole("img")).toHaveAttribute("src", noImgThumbnail);
      });
    });
  });

  describe("Results title", () => {
    const post = generatePost(
      "aww",
      23324,
      "default",
      "title",
      4543,
      "23423",
      "r/awww"
    );
    beforeEach(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostResult post={post} />
          </BrowserRouter>
        </Provider>
      );
    });

    it("renders a div with the class results-header", () => {
      const div = screen
        .getByText(post.data.title)
        .closest("div.results-header");
      expect(div).toBeInTheDocument();
      expect(div).toHaveClass("results-header");
    });
    it("renders a element with the class name results-title and the proper text", () => {
      expect(screen.getByText(post.data.title)).toBeInTheDocument();
    });
    it("renders a div with the class post-information", () => {
      const div = screen.getByTestId("post-information");
      expect(div).toBeInTheDocument();
      expect(div).toHaveClass("post-information");
    });
    it("renders an element with class results-author and the proper tex ", () => {
      expect(screen.getByText(`u/${post.data.author}`)).toHaveClass(
        "results-author"
      );
    });
    it("renders an element with class results-subreddit-name and the proper tex ", () => {
      expect(
        screen.getByText(`${post.data.subreddit_name_prefixed}`)
      ).toHaveClass("results-subreddit-name");
    });
  });
});
