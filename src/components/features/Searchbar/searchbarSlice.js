import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../app/api";

export const searchByTerm = createAsyncThunk(
  "search/searchByTerm",
  async (term) => {
    const response = await fetch(
      `${base_url}/search/.json?q=${term}&type=sr,link`
    );
    const data = await response.json();
    return data;
  }
);

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    errors: "",
    status: "idle",
    subredditResults: [],
    postResults: [],
    term: "",
    darkMode: false,
  },
  reducers: {
    setTerm(state, action) {
      state.term = action.payload;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: {
    [searchByTerm.pending]: (state) => {
      state.status = "pending";
    },
    [searchByTerm.fulfilled]: (state, action) => {
      state.subredditResults = action.payload[0].data.children;
      state.postResults = action.payload[1].data.children;
      state.status = "idle";
    },
    [searchByTerm.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});
export const { setTerm, setShowSettings, setDarkMode } = searchBarSlice.actions;
export const selectShowSettings = (state) => state.search.showSettings;
export const selectDarkMode = (state) => state.search.darkMode;
export const selectSearch = (state) => state.search;
export default searchBarSlice.reducer;
