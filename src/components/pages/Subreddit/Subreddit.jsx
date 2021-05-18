import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import { selectSubreddit } from "./subredditSlice";
import Feed from "../features/Feed/Feed";
import Aside from "../../layout/sidebar/Aside/Aside";
import { getTrendingSubreddits, selectTrendingSubs } from "../Home/homeSlice";
import Loading from "../../layout/Loading/Loading";
const Subreddit = () => {
  const subreddit = useSelector(selectSubreddit);
  const trendingSubreddits = useSelector(selectTrendingSubs);
  const dispatch = useDispatch();
  const { posts, errors, currentSubreddit, status } = subreddit;
  useEffect(() => {
    dispatch(getTrendingSubreddits());
  }, [dispatch]);
  return (
    <main className="page">
      <Navbar />
      <header className="subreddit-banner"></header>
      <section className="page-content">
        <div className="page-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed posts={posts} currentSubreddit={currentSubreddit} />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Subreddit;
