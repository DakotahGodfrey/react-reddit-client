import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../components/pages/Home/homeSlice";
import postReducer from "../components/pages/Post/postSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    post: postReducer,
  },
});
