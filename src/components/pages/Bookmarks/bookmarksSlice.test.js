import reducer, {
  initialState,
  removeFavorite,
  selectBookmarks,
} from "./bookmarksSlice";

describe("Bookmark Slice", () => {
  describe("reducer, actions and selectors", () => {
    it("should return the initial state on first run", () => {
      const nextState = initialState;
      const result = reducer(undefined, {});

      expect(result).toEqual(nextState);
    });
  });
});
