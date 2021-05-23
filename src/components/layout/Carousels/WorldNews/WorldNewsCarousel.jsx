import React from "react";
import CarouselCard from "../../Cards/CarouselCard/CarouselCard";
const WorldNewsCarousel = ({ trendingItems }) => {
  return (
    <section>
      <h1 className="carousel-heading">r/worldnews</h1>
      <div className="slot-left"></div>
      <div className="carousel-container">
        {trendingItems.map((trendingItem) => (
          <CarouselCard
            trendingItem={trendingItem}
            key={trendingItem.data.id}
          />
        ))}
      </div>
      <div className="slot-right"></div>
    </section>
  );
};

export default WorldNewsCarousel;
