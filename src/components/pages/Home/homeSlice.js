import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const getPopularPosts = createAsyncThunk(
  "home/getPopularPosts",
  async (filter) => {
    try {
      const response = await fetch(`${base_url}${filter}.json?`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTrending = createAsyncThunk("home/getTrending", async () => {
  const response = await fetch(`${base_url}r/worldNews/top.json?limit=10`);
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

export const fetchNextPagePopular = createAsyncThunk(
  "home/fetchNextPagePopular",
  async (action) => {
    const { filter, nextPageId } = action;
    try {
      const response = await fetch(
        `${base_url}${filter}/.json?count=30&after=${nextPageId}`
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
    paginationId: "",
    filter: "",
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
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

    [getTrending.pending]: (state) => {
      state.status = "pending";
    },
    [getTrending.fulfilled]: (state, action) => {
      state.trendingItems = action.payload.data.children
        ? action.payload.data.children
        : null;
      state.status = "idle";
    },
    [getTrending.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },

    [getPostsBySubreddit.pending]: (state) => {
      state.status = "pending";
    },
    [getPostsBySubreddit.fulfilled]: (state, action) => {
      state.posts = action.payload.data
        ? action.payload.data.children
        : ["not found"];
      state.status = "idle";
    },
    [getPostsBySubreddit.rejected]: (state) => {
      state.errors = "request failed";
      state.posts = null;
      state.status = "idle";
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

export const { setStatus, setFilter } = homeSlice.actions;
export const selectHome = (state) => state.home;
export const selectTrendingSubs = (state) => state.home.trendingSubreddits;
export const selectPaginationId = (state) => state.home.paginationId;
export default homeSlice.reducer;
