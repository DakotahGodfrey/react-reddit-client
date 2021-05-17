import React, { useEffect } from "react";
import Aside from "../../../components/layout/Aside/Aside";
import Feed from "../../../features/Feed/Feed";
import Trending from "../../../features/Trending/Trending";
import Navbar from "../../layout/Navbar/Navbar";

import {
  getPopularPosts,
  getTrending,
  getTrendingSubreddits,
  selectHome,
} from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const home = useSelector(selectHome);
  const { posts, trendingItems, currentSubreddit, errors, trendingSubreddits } =
    home;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularPosts());
    dispatch(getTrending());
    dispatch(getTrendingSubreddits());
  }, [dispatch]);

  return (
    <main className="page">
      <Navbar />
      <header className="trending-container" data-testid="trending-container">
        <Trending trendingItems={trendingItems} />
      </header>
      <section className="page-content" data-testid="feed">
        <div className="page-wrapper" data-testid="feed-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : (
            <Feed posts={posts} currentSubreddit={currentSubreddit} />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Home;
