import React from "react";
import CarouselCard from "../../Cards/CarouselCard/CarouselCard";
const WorldNewsCarousel = ({ trendingItems }) => {
  return (
    <section data-testid="carousel-section">
      <h1 className="carousel-heading">r/worldnews</h1>
      <div className="slot-left" data-testid="left-fade"></div>
      <div className="carousel-container" data-testid="carousel-row">
        {trendingItems.map((trendingItem) => (
          <CarouselCard
            trendingItem={trendingItem}
            key={trendingItem.data.id}
          />
        ))}
      </div>
      <div className="slot-right" data-testid="right-fade"></div>
    </section>
  );
};

export default WorldNewsCarousel;
