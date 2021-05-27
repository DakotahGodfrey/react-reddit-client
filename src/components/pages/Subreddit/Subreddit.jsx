import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  fetchDestSubreddit,
  fetchNextPageBySubreddit,
  selectSubreddit,
} from "./subredditSlice";
import Feed from "../features/Feed/Feed";
import Aside from "../../layout/sidebar/Aside/Aside";
import { getTrendingSubreddits, selectTrendingSubs } from "../Home/homeSlice";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../features/Searchbar/searchbarSlice";
const Subreddit = () => {
  const subreddit = useSelector(selectSubreddit);
  const trendingSubreddits = useSelector(selectTrendingSubs);
  const dark = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const {
    posts,
    errors,
    currentSubreddit,
    status,
    paginationId,
    filter,
    menuHidden,
    time,
  } = subreddit;
  const handleLoadMoreClick = () => {
    const action = {
      currentSubreddit,
      paginationId,
    };

    dispatch(fetchNextPageBySubreddit(action));
  };

  useEffect(() => {
    document.title = `Subreddit | ${currentSubreddit}`;
    const action = {
      filter: filter,
      subreddit: currentSubreddit,
      time: time,
    };
    dispatch(getTrendingSubreddits());
    dispatch(fetchDestSubreddit(action));
  }, [dispatch, filter, currentSubreddit, time]);
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <section className="page-content">
        <div className="page-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed
              posts={posts}
              currentSubreddit={currentSubreddit}
              handleLoadMoreClick={handleLoadMoreClick}
              filter={filter}
              menuHidden={menuHidden}
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Subreddit;
