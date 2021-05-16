import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";
export const getPostById = createAsyncThunk(
  "post/getPostById",
  async (object) => {
    const { id, subreddit } = object;
    const response = await fetch(
      `${base_url}r/${subreddit}/comments/${id}/.json`
    );
    const data = await response.json();
    return data;
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "idle",
    currentPostID: "",
    currentPostSubreddit: "",
    currentPostData: {},
    errors: null,
  },
  reducers: {
    setCurrentPostId(state, action) {
      state.currentPostID = action.payload;
    },
    setCurrentPostSubreddit(state, action) {
      state.currentPostSubreddit = action.payload;
    },
  },
  extraReducers: {
    [getPostById.pending]: (state) => {
      state.currentPostData = "";
      state.status = "pending";
    },
    [getPostById.fulfilled]: (state, action) => {
      state.status = "idle";
      state.currentPostData = action.payload;
    },
    [getPostById.rejected]: (state) => {
      state.status = "idle";
      state.errors = "request failed";
    },
  },
});

export const { setCurrentPostId, setCurrentPostSubreddit } = postSlice.actions;
export const selectCurrentPost = (state) => state.post.currentPostData;
export default postSlice.reducer;
