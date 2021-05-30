import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const fetchNewPosts = createAsyncThunk(
  "new/fetchNewPosts",
  async (currentSubreddit) => {
    try {
      const response = await fetch(
        `${base_url}r/${currentSubreddit}/new/.json`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrendingSubreddits = createAsyncThunk(
  "new/getTrendingSubreddits",
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

export const fetchNextPageNew = createAsyncThunk(
  "new/fetchNextPageNew",
  async (action) => {
    const { nextPageId, currentSubreddit } = action;
    try {
      const response = await fetch(
        `${base_url}r/${currentSubreddit}/new.json?count=30&after=${nextPageId}`
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
const newSlice = createSlice({
  name: "newSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNewPosts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNewPosts.fulfilled]: (state, action) => {
      state.status = "pending";
      state.posts = action.payload.data.children;
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNewPosts.rejected]: (state) => {
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
    [fetchNextPageNew.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPageNew.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNextPageNew.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});

export const selectNew = (state) => state.newSlice;
export default newSlice.reducer;
