import React from "react";
import Aside from "../../../components/layout/Aside/Aside";
import Feed from "../../../features/Feed/Feed";
import Trending from "../../../features/Trending/Trending";
import Navbar from "../../layout/Navbar/Navbar";

const Home = () => {
  const posts = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      image: "https://i.redd.it/043rme7pzvy61.jpg",
      author: "u/throwaway",
      subreddit: "r/rarepuppers",
      commentCount: 9,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      video: "https://www.youtube.com/embed/G52dUQLxPzg",
      author: "u/throwaway235234",
      subreddit: "r/rarepuppers",
      commentCount: 1233,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?",
      image: "https://i.redd.it/043rme7pzvy61.jpg",
      author: "u/throwaway",
      subreddit: "r/rarepuppers",
      commentCount: 453,
    },
    {
      title:
        "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs",
      author: "u/jeffGoldblum",
      subreddit: "r/jeffsum",
      commentCount: 666,
    },
  ];
  const trendingSubs = ["r/eyebleach", "r/aww", "r/news", "r/doge", "r/stonks"];
  return (
    <main className="home">
      <Navbar />
      <header className="trending-container" data-testid="trending-container">
        <Trending />
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
