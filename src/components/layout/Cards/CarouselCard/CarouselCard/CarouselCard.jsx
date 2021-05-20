import React from "react";

const CarouselCard = ({ trendingItem }) => {
  const { title, url } = trendingItem.data;
  return (
    <div className="trending-article">
      <h2 className="article-title">{title}</h2>
      <span className="article-link">
        Source: <a href={url}>{url}</a>
      </span>
    </div>
  );
};

export default CarouselCard;
