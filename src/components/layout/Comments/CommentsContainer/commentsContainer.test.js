import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import { PersistGate } from "redux-persist/integration/react";
import CommentsContainer from "./CommentsContainer";

const comments = [
  {
    data: {
      author: "author",
      body: "text text",
      id: 2,
      created_utc: 234353334,
    },
  },
  {
    data: {
      author: "author",
      body: "text text",
      id: 23,
      created_utc: 234353334,
    },
  },
];

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <CommentsContainer comments={comments} />
        </PersistGate>
      </Router>
    </Provider>
  );
});
describe("Comments Container", () => {
  it("should render a comment container element", () => {
    const commentContainer = screen.getByTestId("comments-container");
    expect(commentContainer).toBeInTheDocument();
  });
});
