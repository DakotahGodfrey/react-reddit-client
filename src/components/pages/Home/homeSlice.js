import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { popular_url } from "../../../app/api";

export const getPopularPosts = createAsyncThunk(
  "home/getPopularPosts",
  async () => {
    const response = await fetch(popular_url);
    const data = await response.json();
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    posts: [],
    trending: [],
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
      state.posts = action.payload.children;
    },
    [getPopularPosts.rejected]: (state) => {
      state.errors = "request failed";
    },
  },
});

export const { setStatus } = homeSlice.actions;
export const selectHome = (state) => state.home;
export default homeSlice.reducer;
