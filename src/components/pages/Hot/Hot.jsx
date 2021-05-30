import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import {
  getHotPosts,
  selectHot,
  getTrendingSubreddits,
  fetchNextPageHot,
} from "./hotSlice";
import { selectHome } from "../Home/homeSlice";
import Loading from "../../layout/Loading/Loading";
import TrendingSidebar from "../../features/TrendingSidebar/TrendingSidebar";
import Feed from "../../features/Feed/Feed";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
const Hot = ({ match }) => {
  const dark = useSelector(selectDarkMode);
  const path = match.path;
  const currentSubreddit = match.params.currentSubreddit;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotPosts(match.params.currentSubreddit));
    dispatch(getTrendingSubreddits());
  }, [dispatch]);
  const hot = useSelector(selectHot);
  const { errors, status, posts, paginationId } = hot;
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
    };
    dispatch(fetchNextPageHot(action));
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

export default Hot;
