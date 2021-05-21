import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const fetchDestSubreddit = createAsyncThunk(
  "subreddit/fetchDestSubreddit",
  async (action) => {
    const { subreddit, filter, time } = action;
    const response = await fetch(
      `${base_url}r/${subreddit}/${filter}.json?t=${time}`
    );
    const data = await response.json();
    return data;
  }
);
export const fetchNextPageBySubreddit = createAsyncThunk(
  "subreddit/fetchNextPageBySubreddit",
  async (action) => {
    const { currentSubreddit, paginationId, time, filter } = action;
    try {
      const response = await fetch(
        `${base_url}r/${currentSubreddit}/${filter}/.json?count=30&after=${paginationId}&t=${time}`
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
    filter: "top",
    menuHidden: true,
    time: "day",
  },
  reducers: {
    setCurrentSubreddit(state, action) {
      state.currentSubreddit = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setMenu(state) {
      state.menuHidden = !state.menuHidden;
    },
    setTime(state, action) {
      state.time = action.payload;
    },
  },
  extraReducers: {
    [fetchDestSubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [fetchDestSubreddit.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts = action.payload.data ? action.payload.data.children : [];
      state.paginationId = action.payload.data
        ? action.payload.data.after
        : " ";
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
export const { setCurrentSubreddit, setFilter, setMenu, setTime } =
  subredditSlice.actions;
export const selectSubreddit = (state) => state.subreddit;
export const selectFilter = (state) => state.subreddit.filter;
export default subredditSlice.reducer;
