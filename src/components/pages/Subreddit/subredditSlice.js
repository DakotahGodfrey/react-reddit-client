import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const fetchSubreddit = createAsyncThunk(
  "subreddit/fetchSubreddit",
  async (action) => {
    const { subreddit } = action;
    const response = await fetch(`${base_url}r/${subreddit}/.json`);
    const data = await response.json();
    return data;
  }
);
export const fetchNextPageBySubreddit = createAsyncThunk(
  "subreddit/fetchNextPageBySubreddit",
  async (action) => {
    const { currentSubreddit, paginationId } = action;
    try {
      const response = await fetch(
        `${base_url}r/${currentSubreddit}.json?count=30&after=${paginationId}`
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
    posts: [],
    paginationId: "",
  },
  reducers: {},
  extraReducers: {
    [fetchSubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [fetchSubreddit.fulfilled]: (state, action) => {
      state.posts = action.payload.data ? action.payload.data.children : [];
      state.paginationId = action.payload.data
        ? action.payload.data.after
        : " ";
      state.status = "idle";
    },
    [fetchSubreddit.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
    [fetchNextPageBySubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPageBySubreddit.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNextPageBySubreddit.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});
export const { setCurrentSubreddit, setFilter, setMenu, setTime } =
  subredditSlice.actions;
export const selectSubreddit = (state) => state.subreddit;
export const selectFilter = (state) => state.subreddit.filter;
export default subredditSlice.reducer;
