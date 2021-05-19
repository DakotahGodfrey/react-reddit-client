import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../../../app/api";

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
    results: [],
    term: "",
    showSettings: false,
    darkMode: false,
  },
  reducers: {
    setTerm(state, action) {
      state.term = action.payload;
    },
    setShowSettings(state) {
      state.showSettings = !state.showSettings;
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
      state.status = "idle";
      state.results = action.payload;
    },
    [searchByTerm.rejected]: (state) => {
      state.errors = "request failed";
      state.status = "idle";
    },
  },
});
export const { setTerm, setShowSettings, setDarkMode } = searchBarSlice.actions;
export const selectTerm = (state) => state.search.term;
export const selectResults = (state) => state.search.results;
export const selectStatus = (state) => state.search.status;
export const selectShowSettings = (state) => state.search.showSettings;
export const selectDarkMode = (state) => state.search.darkMode;
export default searchBarSlice.reducer;
