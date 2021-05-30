import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const getHotPosts = createAsyncThunk(
  "hot/getHotPosts",
  async (currentSubreddit) => {
    try {
      const response = await fetch(`${base_url}r/${currentSubreddit}/hot.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrendingSubreddits = createAsyncThunk(
  "hot/getTrendingSubreddits",
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

export const fetchNextPageHot = createAsyncThunk(
  "hot/fetchNextPageHot",
  async (action) => {
    const { nextPageId, currentSubreddit } = action;
    try {
      const response = await fetch(
        `${base_url}/${currentSubreddit}/hot.json?count=30&after=${nextPageId}`
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
const hotSlice = createSlice({
  name: "hot",
  initialState,
  reducers: {},
  extraReducers: {
    [getHotPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getHotPosts.fulfilled]: (state, action) => {
      state.status = "pending";
      state.posts = action.payload.data.children;
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [getHotPosts.rejected]: (state) => {
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
    [fetchNextPageHot.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPageHot.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNextPageHot.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});

export const selectHot = (state) => state.hot;
export default hotSlice.reducer;
