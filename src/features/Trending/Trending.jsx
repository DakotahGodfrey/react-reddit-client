import React from "react";
import TrendingItem from "../../components/layout/TrendingItem/TrendingItem";

const Trending = ({ trendingItems }) => {
  return (
    <section className="trending" aria-label="trending posts">
      <div data-testid="trending-row" className="trending-row">
        {trendingItems.map((trendingItem) => (
          <TrendingItem trendingItem={trendingItem} key={trendingItem.id} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
