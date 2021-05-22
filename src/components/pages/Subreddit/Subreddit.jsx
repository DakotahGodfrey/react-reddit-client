import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  fetchDestSubreddit,
  fetchNextPageBySubreddit,
  selectSubreddit,
  setFilter,
  setMenu,
  setTime,
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
      time,
      filter,
    };

    dispatch(fetchNextPageBySubreddit(action));
  };
  const handleNewClick = () => {
    dispatch(setFilter("new"));
  };
  const handleTopClick = () => {
    dispatch(setFilter("top"));
    dispatch(setMenu());
  };
  const handleHotClick = () => {
    dispatch(setFilter("hot"));
  };
  const handleAllClick = () => {
    dispatch(setTime("all"));
  };
  const handleYearClick = () => {
    dispatch(setTime("year"));
  };
  const handleMonthClick = () => {
    dispatch(setTime("month"));
  };
  const handleDayClick = () => {
    dispatch(setTime("day"));
  };
  useEffect(() => {
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
              handleNewClick={handleNewClick}
              handleTopClick={handleTopClick}
              handleHotClick={handleHotClick}
              handleAllClick={handleAllClick}
              handleYearClick={handleYearClick}
              handleMonthClick={handleMonthClick}
              handleDayClick={handleDayClick}
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
