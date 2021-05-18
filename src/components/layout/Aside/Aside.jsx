import React from "react";
import TrendingSubsList from "../TrendingSubsList/TrendingSubsList";

const Aside = ({ trendingSubreddits }) => {
  return (
    <aside className="sidebar">
      <article className="aside-trending">
        <header role="banner" className="aside-header">
          <h2>Trending Communities</h2>
        </header>
        <TrendingSubsList trendingSubreddits={trendingSubreddits} />
      </article>
    </aside>
  );
};

export default Aside;
