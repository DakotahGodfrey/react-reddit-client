import React from "react";
import TrendingItem from "./TrendingItem";
import Doge from "../../components/assets/media/dogecoin.jpeg.jpg";

const Trending = () => {
  const trendingItems = [
    {
      title: "Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
    },
  ];
  return (
    <section className="trending">
      <div className="trending-row">
        {trendingItems.map((trendingItem) => (
          <TrendingItem trendingItem={trendingItem} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
