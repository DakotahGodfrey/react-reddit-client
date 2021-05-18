import React from "react";
import TrendingItem from "../../../layout/Cards/TrendingItem/TrendingItem";

const Trending = ({ trendingItems }) => {
  return (
    <section className="trending" aria-label="trending posts">
      <div data-testid="trending-row" className="trending-row">
        <h1 className="trending-heading">r/worldnews</h1>

        {trendingItems.map((trendingItem) => (
          <TrendingItem
            trendingItem={trendingItem}
            key={trendingItem.data.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
