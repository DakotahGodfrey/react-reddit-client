import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SubredditResults from "./SubredditResults";

const subredditResults = [
  {
    data: {
      display_name_prefixed: "r/test",
      display_name: "test",
      public_description: "text lorem ipsum",
      id: 1231231,
    },
  },
  {
    data: {
      display_name_prefixed: "r/testA",
      display_name: "testA",
      public_description: "A text lorem ipsum",
      id: 1231233242341,
    },
  },
];
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <SubredditResults subredditResults={subredditResults} />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("Subreddit Results ", () => {
  it("should render a list element", () => {
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  it("should render a listitem for each element in the subreddits array pro", () => {
    expect(screen.getAllByRole("listitem")).toHaveLength(
      subredditResults.length
    );
  });
});
