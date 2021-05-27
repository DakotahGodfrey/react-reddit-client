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
    setCurrentPostId(state, action) {
      state.currentPostID = action.payload;
    },
  },
  extraReducers: {
    [getPostById.pending]: (state) => {
      state.status = "pending";
    },
    [getPostById.fulfilled]: (state, action) => {
      state.status = "idle";
      state.post = action.payload[0].data.children[0].data;
      state.comments = action.payload[1].data.children;
    },
    [getPostById.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
    [getSubredditDescription.pending]: (state) => {
      state.status = "pending";
    },
    [getSubredditDescription.fulfilled]: (state, action) => {
      state.status = "idle";
      state.subredditDescription = action.payload;
    },
    [getSubredditDescription.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});
export const { setCurrentPostId } = postSlice.actions;
export const selectCurrentPost = (state) => state.post;
export default postSlice.reducer;
