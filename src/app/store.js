import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeReducer from "../components/pages/Home/homeSlice";
import postReducer from "../components/pages/Post/postSlice";
import subredditReducer from "../components/pages/Subreddit/subredditSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedPostReducer = persistReducer(persistConfig, postReducer);
const persistedSubredditReducer = persistReducer(
  persistConfig,
  subredditReducer
);
const store = configureStore({
  reducer: {
    home: homeReducer,
    post: persistedPostReducer,
    subreddit: persistedSubredditReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export let persistor = persistStore(store);
export default store;
