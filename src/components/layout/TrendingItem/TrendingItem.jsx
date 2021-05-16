import React from "react";
const TrendingItem = ({ trendingItem }) => {
  const { title } = trendingItem.data;
  console.log(trendingItem);

  return (
    <div className="trending-card" data-testid="trending-card">
      <h3 className="trending-title">{title}</h3>
    </div>
  );
};

export default TrendingItem;
