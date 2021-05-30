import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import {
  selectTop,
  getTrendingSubreddits,
  fetchNextPageTop,
  fetchTopPosts,
} from "./topSlice";
import { selectHome } from "../Home/homeSlice";
import Loading from "../../layout/Loading/Loading";
import TrendingSidebar from "../../features/TrendingSidebar/TrendingSidebar";
import Feed from "../../features/Feed/Feed";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
const Top = ({ match }) => {
  const dark = useSelector(selectDarkMode);
  const path = match.path;
  const currentSubreddit = match.params.currentSubreddit;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopPosts(match.params.currentSubreddit));
    dispatch(getTrendingSubreddits());
  }, [dispatch]);
  const top = useSelector(selectTop);
  const { errors, status, posts, paginationId } = top;
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
    };
    dispatch(fetchNextPageTop(action));
  };
  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <section className="page-content" data-testid="feed">
        <div className="page-wrapper" data-testid="feed-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed
              posts={posts}
              path={path}
              handleLoadMoreClick={handleLoadMoreClick}
              currentSubreddit={currentSubreddit}
            />
          )}
          <TrendingSidebar />
        </div>
      </section>
    </main>
  );
};

export default Top;
