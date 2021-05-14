import React from "react";
import Feed from "../../../features/feed/Feed";
import Trending from "../../../features/trending_row/Trending";
import Navbar from "../../layout/Navbar/Navbar";

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <header>
        <Trending />
      </header>
      <section className="feed-wrapper">
        <Feed />
        {/* FeedContainer and Sub Components */}
        {/* Sidebar and Sidebar cards */}
      </section>
    </main>
  );
};

export default Home;
