import React from "react";
import Feed from "../../../features/feed/Feed";
import Trending from "../../../features/trending_row/Trending";
import Navbar from "../../layout/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
        <Trending />
      </header>
      <main>
        <Feed />
        {/* FeedContainer and Sub Components */}
        {/* Sidebar and Sidebar cards */}
      </main>
    </div>
  );
};

export default Home;
