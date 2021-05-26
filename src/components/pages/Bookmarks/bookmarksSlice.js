import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const addBookmarkById = createAsyncThunk(
  "bookmark/addBookmarkById",
  async (action) => {
    try {
      const { subreddit, id } = action;
      const response = await fetch(`${base_url}r/${subreddit}/${id}/.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const initialState = {
  bookmarks: [],
  status: "idle",
  errors: "",
};
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    removeFavorite(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.children[0].data.id !== action.payload
      );
    },
  },
  extraReducers: {
    [addBookmarkById.pending]: (state) => {
      state.status = "pending";
    },
    [addBookmarkById.fulfilled]: (state, action) => {
      state.bookmarks.push(action.payload[0].data);
      state.status = "idle";
    },
    [addBookmarkById.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});

export const { removeFavorite } = bookmarkSlice.actions;
export const selectBookmarks = (state) => state.bookmark;
export default bookmarkSlice.reducer;
