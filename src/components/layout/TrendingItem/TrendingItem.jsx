import React from "react";

const TrendingItem = ({ trendingItem }) => {
  const { title, subreddit, image, content } = trendingItem;
  return (
    <figure>
      <img src={image} alt={title} />
      <figcaption data-testid="figure-caption">
        <h3 className="trending-title">{title}</h3>
        <p className="trending-lead">{content}</p>
        <span className="trending-subreddit">{subreddit}</span>
      </figcaption>
    </figure>
  );
};

export default TrendingItem;
