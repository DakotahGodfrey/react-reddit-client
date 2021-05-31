import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const getPostById = createAsyncThunk(
  "post/getPostById",
  async (action) => {
    const { id, subreddit } = action;
    const response = await fetch(
      `${base_url}r/${subreddit}/comments/${id}/.json`
    );
    const data = await response.json();
    return data;
  }
);
export const getSubredditDescription = createAsyncThunk(
  "post/getSubredditDescription",
  async (subreddit) => {
    const response = await fetch(`${base_url}r/${subreddit}/about/.json`);
    const data = await response.json();
    return data;
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "idle",
    post: {},
    comments: [],
    errors: null,
    subredditDescription: {},
  },
  reducers: {
    clearPost(state) {
      state.status = "pending";
      state.comments = [];
      state.post = {};
    },
  },
  extraReducers: {
    [getPostById.pending]: (state) => {
      state.status = "pending";
    },
    [getPostById.fulfilled]: (state, action) => {
      state.status = "idle";
      state.post = action.payload[0].data.children[0].data;
      state.comments = action.payload[1].data.children.slice(0, 30);
    },
    [getPostById.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
    [getSubredditDescription.pending]: (state) => {
      state.status = "pending";
    },
    [getSubredditDescription.fulfilled]: (state, action) => {
      state.subredditDescription = action.payload;
      state.status = "idle";
    },
    [getSubredditDescription.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});
export const { clearPost } = postSlice.actions;
export const selectCurrentPost = (state) => state.post;
export default postSlice.reducer;
