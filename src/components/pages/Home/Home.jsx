import React, { useEffect } from "react";
import Aside from "../../../components/layout/Aside/Aside";
import Feed from "../../../features/Feed/Feed";
import Trending from "../../../features/Trending/Trending";
import Navbar from "../../layout/Navbar/Navbar";
import Doge from "../../../assets/media/dogecoin.jpeg.jpg";

import { getPopularPosts, getTrending, selectHome } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularPosts());
    dispatch(getTrending());
  }, [dispatch]);
  const home = useSelector(selectHome);
  const { posts } = home;
  const trendingSubs = ["r/eyebleach", "r/aww", "r/news", "r/doge", "r/stonks"];
  const { trendingItems } = home;
  return (
    <main className="home">
      <Navbar />
      <header className="trending-container" data-testid="trending-container">
        <Trending trendingItems={trendingItems} />
      </header>
      <section className="feed" data-testid="feed">
        <div className="feed-wrapper" data-testid="feed-wrapper">
          <Feed posts={posts} />
          <Aside trendingSubs={trendingSubs} />
        </div>
      </section>
    </main>
  );
};

export default Home;
