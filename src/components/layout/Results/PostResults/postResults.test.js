import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../../../../app/store";
import PostResults from "./PostResults";
const postsArray = [
  {
    data: {
      title: "title",
      display_name_prefixed: "r/test",
      id: 2342,
      author: "dfsadf",
      created_utc: 2342342342,
    },
  },
  {
    data: {
      title: "titlesdf",
      display_name_prefixed: "r/testing",
      id: 223523442,
      author: "dfsasdfsdf",
      created_utc: 2342323423442342,
    },
  },
];
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <PostResults postsArray={postsArray} />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
});

describe("PostResults", () => {
  it("should render a list element", () => {
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  it("should render a list item for each item in the postsArray Prop", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(postsArray.length);
  });
});
