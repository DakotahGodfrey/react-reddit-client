import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../../pages/features/Searchbar/searchbarSlice";
import TrendingSubItem from "../TrendingSubItem/TrendingSubItem";
import { Link } from "react-router-dom";
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
      <li className="bookmarks-link">
        <Link to="/bookmarks">View Your Bookmarks</Link>
      </li>
    </ul>
  );
};

export default TrendingSubsList;
