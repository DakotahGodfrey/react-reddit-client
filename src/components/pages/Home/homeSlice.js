import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { popular_url, base_url } from "../../../app/api";

export const getPopularPosts = createAsyncThunk(
  "home/getPopularPosts",
  async () => {
    const response = await fetch(popular_url);
    const data = await response.json();
    return data;
  }
);
export const getTrending = createAsyncThunk("home/getTrending", async () => {
  const response = await fetch(`${base_url}r/worldNews/.json?limit=5`);
  const data = await response.json();
  return data;
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    posts: [],
    trendingItems: [],
    status: "idle",
    errors: "",
  },
  reducers: {
    setStatus(state) {
      state.status = !state.status;
    },
  },
  extraReducers: {
    [getPopularPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPopularPosts.fulfilled]: (state, action) => {
      state.status = "idle";
      state.posts = action.payload.data.children;
    },
    [getPopularPosts.rejected]: (state) => {
      state.errors = "request failed";
    },
    [getTrending.pending]: (state) => {
      state.status = "pending";
    },
    [getTrending.fulfilled]: (state, action) => {
      state.status = "idle";
      state.trendingItems = action.payload.data.children;
    },
    [getTrending.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});

export const { setStatus } = homeSlice.actions;
export const selectHome = (state) => state.home;
export default homeSlice.reducer;
