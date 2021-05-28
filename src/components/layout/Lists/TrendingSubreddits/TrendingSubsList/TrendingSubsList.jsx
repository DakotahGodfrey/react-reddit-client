import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../../features/Searchbar/searchbarSlice";
import TrendingSubItem from "../TrendingSubItem/TrendingSubItem";
const TrendingSubsList = ({ trendingSubreddits }) => {
  const dark = useSelector(selectDarkMode);
  const trendingArray = trendingSubreddits.children
    ? trendingSubreddits.children
    : null;
  return (
    <ul className={dark ? "trending-subs dark" : "trending-subs"}>
      {trendingArray !== null
        ? trendingArray.map((subreddit) => (
            <TrendingSubItem subreddit={subreddit} key={subreddit.data.id} />
          ))
        : null}
    </ul>
  );
};

export default TrendingSubsList;
