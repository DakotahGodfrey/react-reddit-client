import React from "react";
import Aside from "../../../features/feed/Aside";
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
      <section className="feed">
        <div className="feed-wrapper">
          {/* FeedContainer and Sub Components */}
          <Feed />
          {/* Sidebar and Sidebar cards */}
          <Aside />
        </div>
      </section>
    </main>
  );
};

export default Home;
