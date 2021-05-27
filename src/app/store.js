import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeReducer from "../components/pages/Home/homeSlice";
import postReducer from "../components/pages/Post/postSlice";
import searchReducer from "../components/pages/features/Searchbar/searchbarSlice";
import subredditReducer from "../components/pages/Subreddit/subredditSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookmarkReducer from "../components/pages/Bookmarks/bookmarksSlice";
import hotReducer from "../components/pages/Hot/hotSlice";
const persistConfig = {
  key: "root",
  storage,
};
const persistedPostReducer = persistReducer(persistConfig, postReducer);
const persistedSubredditReducer = persistReducer(
  persistConfig,
  subredditReducer
);
const persistedBookmarkReducer = persistReducer(persistConfig, bookmarkReducer);

const persistedSearchReducer = persistReducer(persistConfig, searchReducer);
const store = configureStore({
  reducer: {
    home: homeReducer,
    hot: hotReducer,
    post: persistedPostReducer,
    subreddit: persistedSubredditReducer,
    search: persistedSearchReducer,
    bookmark: persistedBookmarkReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export let persistor = persistStore(store);
export default store;
