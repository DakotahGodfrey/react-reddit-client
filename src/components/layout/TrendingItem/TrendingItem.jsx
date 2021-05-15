import React from "react";
import { urlReplace } from "../../../app/api";
const TrendingItem = ({ trendingItem }) => {
  const { subreddit_name_prefixed, title } = trendingItem.data;
  console.log(trendingItem);
  const image = trendingItem.data.preview
    ? urlReplace(trendingItem.data.preview.images[0].source.url)
    : null;
  return (
    <div className="trending-card">
      <h3 className="trending-title">{title}</h3>
    </div>
  );
};

export default TrendingItem;
