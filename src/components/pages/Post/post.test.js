import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { renderWithRouterMatch } from "../../../setupTests";
import Post from "./Post";

describe("Post Page", () => {
  beforeEach(() => {
    renderWithRouterMatch(Post, {
      route: "/r/funny/post/nn16x8",
      path: "/r/funny/post/:id",
    });
  });
  it("should render a main element", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
  it("should render a section with a class of page-content", () => {
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(screen.getByRole("region")).toHaveClass("page-content");
  });
});
