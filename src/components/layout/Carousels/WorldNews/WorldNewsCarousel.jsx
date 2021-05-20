import React from "react";
import CarouselCard from "../../Cards/CarouselCard/CarouselCard/CarouselCard";
const WorldNewsCarousel = ({ trendingItems }) => {
  return (
    <section aria-label="trending posts">
      <div>
        <h1 className="trending-heading">r/worldnews</h1>
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
