import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const fetchTopPosts = createAsyncThunk(
  "top/fetchTopPosts",
  async (currentSubreddit) => {
    try {
      const response = await fetch(`${base_url}r/${currentSubreddit}/top.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrendingSubreddits = createAsyncThunk(
  "top/getTrendingSubreddits",
  async () => {
    try {
      const response = await fetch(
        `${base_url}subreddits/popular/.json?limit=10`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchNextPageTop = createAsyncThunk(
  "top/fetchNextPagePopular",
  async (action) => {
    const { nextPageId } = action;
    try {
      const response = await fetch(
        `${base_url}/Top.json?count=30&after=${nextPageId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  posts: [],
  status: "idle",
  errors: "",
  trendingSubreddits: [],
  paginationId: "",
};
const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopPosts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchTopPosts.fulfilled]: (state, action) => {
      state.status = "pending";
      state.posts = action.payload.data.children;
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchTopPosts.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
    [getTrendingSubreddits.pending]: (state) => {
      state.status = "pending";
    },

    [getTrendingSubreddits.fulfilled]: (state, action) => {
      state.trendingSubreddits = action.payload.data;
      state.status = "idle";
    },

    [getTrendingSubreddits.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
    [fetchNextPageTop.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPageTop.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNextPageTop.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});

export const selectTop = (state) => state.top;
export default topSlice.reducer;
