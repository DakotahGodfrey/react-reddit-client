import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { popular_url, base_url } from "../../../app/api";

export const getPopularPosts = createAsyncThunk(
  "home/getPopularPosts",
  async () => {
    try {
      const response = await fetch(popular_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrending = createAsyncThunk("home/getTrending", async () => {
  const response = await fetch(`${base_url}r/worldNews/.json?limit=5`);
  const data = await response.json();
  return data;
});
export const getPostsBySubreddit = createAsyncThunk(
  "home/getPostsBySubreddit",
  async (term) => {
    try {
      const response = await fetch(`${base_url}r/${term}/.json?limit=30`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrendingSubreddits = createAsyncThunk(
  "home/getTrendingSubreddits",
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
const homeSlice = createSlice({
  name: "home",
  initialState: {
    posts: [],
    trendingItems: [],
    status: "idle",
    errors: "",
    currentSubreddit: "popular",
    trendingSubreddits: [],
  },
  reducers: {},
  extraReducers: {
    [getPopularPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPopularPosts.fulfilled]: (state, action) => {
      state.status = "idle";

      state.posts = action.payload.data.children;
    },
    [getPopularPosts.rejected]: (state) => {
      state.status = "idle";

      state.errors = "request failed";
    },

    [getTrending.pending]: (state) => {
      state.status = "pending";
    },
    [getTrending.fulfilled]: (state, action) => {
      state.status = "idle";
      state.trendingItems = action.payload.data.children
        ? action.payload.data.children
        : null;
    },
    [getTrending.rejected]: (state) => {
      state.status = "idle";

      state.errors = "request failed";
    },

    [getPostsBySubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [getPostsBySubreddit.fulfilled]: (state, action) => {
      state.status = "pending";
      state.posts = action.payload.data
        ? action.payload.data.children
        : ["not found"];
    },
    [getPostsBySubreddit.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
      state.posts = null;
    },

    [getTrendingSubreddits.pending]: (state) => {
      state.status = "pending";
    },

    [getTrendingSubreddits.fulfilled]: (state, action) => {
      state.status = "idle";
      state.trendingSubreddits = action.payload.data;
    },

    [getTrendingSubreddits.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});

export const { setStatus } = homeSlice.actions;
export const selectHome = (state) => state.home;
export default homeSlice.reducer;
