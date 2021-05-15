import React from "react";
import TrendingItem from "../../components/layout/TrendingItem/TrendingItem";
import Doge from "../../assets/media/dogecoin.jpeg.jpg";

const Trending = () => {
  const trendingItems = [
    {
      title: "Doge to the moon",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 1,
    },
    {
      title: "Stonks",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 2,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 3,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 4,
    },
    {
      title: "Much Doge",
      image: Doge,
      subreddit: "r/finance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis.",
      id: 5,
    },
  ];
  return (
    <section className="trending">
      <div className="trending-row">
        {trendingItems.map((trendingItem) => (
          <TrendingItem trendingItem={trendingItem} key={trendingItem.id} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
