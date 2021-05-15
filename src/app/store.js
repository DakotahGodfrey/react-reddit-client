import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../components/pages/Home/homeSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
