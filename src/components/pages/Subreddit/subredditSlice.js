import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const fetchDestSubreddit = createAsyncThunk(
  "subreddit/fetchDestSubreddit",
  async (subreddit) => {
    const response = await fetch(`${base_url}r/${subreddit}/.json`);
    const data = await response.json();
    return data;
  }
);
const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    status: "idle",
    errors: "",
    posts: "",
    currentSubreddit: "",
  },
  reducers: {
    setCurrentSubreddit(state, action) {
      state.currentSubreddit = action.payload;
    },
  },
  extraReducers: {
    [fetchDestSubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [fetchDestSubreddit.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts = action.payload.data.children;
    },
    [fetchDestSubreddit.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});
export const { setCurrentSubreddit } = subredditSlice.actions;
export const selectSubreddit = (state) => state.subreddit;
export default subredditSlice.reducer;
