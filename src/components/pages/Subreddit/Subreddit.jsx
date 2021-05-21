import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  fetchDestSubreddit,
  fetchNextPageBySubreddit,
  selectSubreddit,
  setFilter,
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
  const { posts, errors, currentSubreddit, status, paginationId, filter } =
    subreddit;
  const handleLoadMoreClick = () => {
    const action = {
      currentSubreddit,
      paginationId,
    };

    dispatch(fetchNextPageBySubreddit(action));
  };
  const handleNewClick = () => {
    dispatch(setFilter("new"));
  };
  const handleTopClick = () => {
    dispatch(setFilter("top"));
  };
  const handleHotClick = () => {
    dispatch(setFilter("hot"));
  };
  useEffect(() => {
    const action = {
      filter: filter,
      subreddit: currentSubreddit,
    };
    dispatch(getTrendingSubreddits());
    dispatch(fetchDestSubreddit(action));
  }, [dispatch, filter, currentSubreddit]);
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <header className="subreddit-banner"></header>
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
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Subreddit;
