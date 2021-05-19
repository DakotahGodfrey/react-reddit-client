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
export const fetchNextPageBySubreddit = createAsyncThunk(
  "home/fetchNextPagePopular",
  async (action) => {
    const { currentSubreddit, paginationId } = action;
    try {
      const response = await fetch(
        `${base_url}r/${currentSubreddit}/.json?count=30&after=${paginationId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    status: "idle",
    errors: "",
    posts: "",
    currentSubreddit: "",
    paginationId: "",
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
      state.paginationId = action.payload.data.after;
    },
    [fetchDestSubreddit.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
    [fetchNextPageBySubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPageBySubreddit.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
    },
    [fetchNextPageBySubreddit.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});
export const { setCurrentSubreddit } = subredditSlice.actions;
export const selectSubreddit = (state) => state.subreddit;
export default subredditSlice.reducer;
