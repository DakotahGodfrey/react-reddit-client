import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostCard from "./PostCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
let post = {
  title: "text",
  subreddit_name_prefixed: "r/test",
  author: "author",
  isVideo: undefined,
  selfText: "body text",
  subreddit: "test",
  created_utc: 1621735029574,
  thumbnail: "src.png",
};
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <PostCard post={post} />
          </Router>
        </PersistGate>
      </Router>
    </Provider>
  );
});

describe("Post Card", () => {
  it("should render an element with test id card-large", () => {
    const cardLarge = screen.getByTestId("card-large");
    expect(cardLarge).toBeInTheDocument();
  });
});
