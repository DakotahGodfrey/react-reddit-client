import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SubredditResult from "./SubredditResult";

const subreddit = {
  data: {
    display_name_prefixed: "r/test",
    display_name: "test",
    public_description: "text lorem ipsum",
  },
};
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <SubredditResult subreddit={subreddit} />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Subreddit Result", () => {
  it("should render a list item", () => {
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
  it("should render a link to the subreddit page", () => {
    expect(screen.getByTestId("subreddit-link")).toHaveAttribute(
      "href",
      "/subreddit"
    );
  });
  it("should render a heading with text content equal to the display_name_prefixed prop", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      subreddit.data.display_name_prefixed
    );
  });
  it("should render an element with text content equal to the public_description", () => {
    expect(
      screen.getByText(subreddit.data.public_description)
    ).toBeInTheDocument();
  });
});
