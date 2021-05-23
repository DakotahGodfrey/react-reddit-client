import React from "react";

const CarouselCard = ({ trendingItem }) => {
  const { title, url } = trendingItem.data;
  return (
    <div className="carousel-card" data-testid="carousel-card">
      <p className="card-title" data-testid="title-element">
        {title}
      </p>
      <span className="card-link">
        Get the full story, <a href={url}>{url}</a>
      </span>
    </div>
  );
};

export default CarouselCard;
