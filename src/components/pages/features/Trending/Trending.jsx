import React from "react";
import { useSelector } from "react-redux";
import TrendingItem from "../../../layout/Cards/TrendingItem/TrendingItem";
import { selectDarkMode } from "../Searchbar/searchbarSlice";
const Trending = ({ trendingItems }) => {
  const dark = useSelector(selectDarkMode);
  return (
    <section
      className={dark ? "trending dark" : "trending"}
      aria-label="trending posts"
    >
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
