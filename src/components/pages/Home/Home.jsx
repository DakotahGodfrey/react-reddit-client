import React, { useEffect } from "react";
import Aside from "../../../components/layout/Aside/Aside";
import Feed from "../../../features/Feed/Feed";
import Trending from "../../../features/Trending/Trending";
import Navbar from "../../layout/Navbar/Navbar";
import Doge from "../../../assets/media/dogecoin.jpeg.jpg";

import { getPopularPosts, selectHome } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularPosts());
  }, []);
  const home = useSelector(selectHome);
  const { posts } = home;
  const trendingSubs = ["r/eyebleach", "r/aww", "r/news", "r/doge", "r/stonks"];
  const trendingItems = [
    {
      title: "Doge to the moon",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 1,
    },
    {
      title: "Stonks",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 2,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 3,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 4,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 5,
    },
  ];
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
