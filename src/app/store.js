import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeReducer from "../components/pages/Home/homeSlice";
import postReducer from "../components/pages/Post/postSlice";
import searchReducer from "../components/features/Searchbar/searchbarSlice";
import subredditReducer from "../components/pages/Subreddit/subredditSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookmarkReducer from "../components/pages/Bookmarks/bookmarksSlice";
import hotReducer from "../components/pages/Hot/hotSlice";
import trendingSidebarReducer from "../components/features/TrendingSidebar/trendingSidebarSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedBookmarkReducer = persistReducer(persistConfig, bookmarkReducer);

const store = configureStore({
  reducer: {
    home: homeReducer,
    hot: hotReducer,
    post: postReducer,
    subreddit: subredditReducer,
    search: searchReducer,
    trendingSidebar: trendingSidebarReducer,
    bookmark: persistedBookmarkReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export let persistor = persistStore(store);
export default store;
