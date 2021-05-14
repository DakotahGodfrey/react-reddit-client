import React from "react";
import Aside from "../../../components/layout/Aside/Aside";
import Feed from "../../../features/Feed/Feed";
import Trending from "../../../features/Trending/Trending";
import Navbar from "../../layout/Navbar/Navbar";

const Home = () => {
  const trendingSubs = ["r/eyebleach", "r/aww", "r/news", "r/doge", "r/stonks"];
  return (
    <main className="home">
      <Navbar />
      <header className="trending-container" data-testid="trending-container">
        <Trending />
      </header>
      <section className="feed" data-testid="feed">
        <div className="feed-wrapper" data-testid="feed-wrapper">
          <Feed />
          <Aside trendingSubs={trendingSubs} />
        </div>
      </section>
    </main>
  );
};

export default Home;
