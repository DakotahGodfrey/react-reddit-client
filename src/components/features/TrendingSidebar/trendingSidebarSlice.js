import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

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

const trendingSidebarSlice = createSlice({
  name: "trendingSidebar",
  initialState: {
    trendingSubreddits: [],
    status: "idle",
    errors: "request failed",
  },
  reducers: {},
  extraReducers: {
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
  },
});

export const selectTrendingSidebar = (state) => state.trendingSidebar;
export default trendingSidebarSlice.reducer;
