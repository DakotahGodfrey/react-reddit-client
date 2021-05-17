import React from "react";
import TrendingSubItem from "../TrendingSubItem/TrendingSubItem";

const TrendingSubsList = ({ trendingSubreddits }) => {
  const trendingArray = trendingSubreddits.children
    ? trendingSubreddits.children
    : null;
  return (
    <ul className="trending-subs">
      {trendingArray !== null
        ? trendingArray.map((subreddit) => (
            <TrendingSubItem subreddit={subreddit} />
          ))
        : null}
    </ul>
  );
};

export default TrendingSubsList;
