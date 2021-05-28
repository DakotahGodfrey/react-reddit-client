import { screen, render, fireEvent } from "@testing-library/react";
import LoadMore from "./LoadMore";

describe("Load More", () => {
  const handleLoadMoreClick = jest.fn();
  it("should match the snapshot", () => {
    const wrapper = render(
      <LoadMore handleLoadMoreClick={handleLoadMoreClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  beforeEach(() => {
    render(<LoadMore handleLoadMoreClick={handleLoadMoreClick} />);
  });
  it("should render an accesible loadMore button element without error", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("load-more");
    expect(screen.getByRole("button")).toHaveTextContent("Load More");
    expect(screen.getByRole("button")).toHaveAttribute("aria-label");
  });
  it("should call the handleLoadMoreClick function when clicked", () => {
    fireEvent.click(screen.getByRole("button"));
    expect(handleLoadMoreClick).toHaveBeenCalledTimes(1);
  });
  it("should render an expand more icon, that is hidden from screen readers", () => {
    expect(screen.getByText("expand_more")).toHaveClass("material-icons");
    expect(screen.getByText("expand_more")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });
});
