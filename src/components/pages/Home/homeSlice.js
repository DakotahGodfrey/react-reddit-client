import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const getPopularPosts = createAsyncThunk(
  "home/getPopularPosts",
  async () => {
    try {
      const response = await fetch(`${base_url}.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getWorldNews = createAsyncThunk("home/getWorldNews", async () => {
  const response = await fetch(`${base_url}r/worldNews/top.json?limit=12`);
  const data = await response.json();
  return data;
});

export const fetchNextPagePopular = createAsyncThunk(
  "home/fetchNextPagePopular",
  async (action) => {
    const { nextPageId } = action;
    try {
      const response = await fetch(
        `${base_url}/.json?count=30&after=${nextPageId}`
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
    trendingSubreddits: [],
    paginationId: "",
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [getPopularPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPopularPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data.children;
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [getPopularPosts.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },

    [getWorldNews.pending]: (state) => {
      state.status = "pending";
    },
    [getWorldNews.fulfilled]: (state, action) => {
      state.trendingItems = action.payload.data.children
        ? action.payload.data.children
        : null;
      state.status = "idle";
    },
    [getWorldNews.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },

    [fetchNextPagePopular.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNextPagePopular.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.data.children);
      state.paginationId = action.payload.data.after;
      state.status = "idle";
    },
    [fetchNextPagePopular.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});

export const { setStatus } = homeSlice.actions;
export const selectHome = (state) => state.home;
export const selectTrendingSubs = (state) => state.home.trendingSubreddits;
export const selectPaginationId = (state) => state.home.paginationId;
export default homeSlice.reducer;
