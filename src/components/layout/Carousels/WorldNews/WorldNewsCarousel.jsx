import React from "react";
import CarouselCard from "../../Cards/CarouselCard/CarouselCard/CarouselCard";
const WorldNewsCarousel = ({ trendingItems }) => {
  return (
    <section>
      <h1 className="carousel-heading">r/worldnews</h1>
      <div className="carousel-container">
        {trendingItems.map((trendingItem) => (
          <CarouselCard
            trendingItem={trendingItem}
            key={trendingItem.data.id}
          />
        ))}
      </div>
    </section>
  );
};

export default WorldNewsCarousel;
