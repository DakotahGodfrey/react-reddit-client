import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import {
  fetchDestSubreddit,
  setCurrentSubreddit,
} from "../../../../pages/Subreddit/subredditSlice";
const TrendingSubItem = ({ subreddit }) => {
  const subredditData = subreddit.data;
  const { display_name_prefixed, icon_img, display_name } = subredditData;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchDestSubreddit(display_name));
    dispatch(setCurrentSubreddit(display_name));
  };
  return (
    <li className="trending-subreddit">
      <Link
        to="/subreddit"
        data-testid="anchor-link"
        className="trending-sub"
        onClick={handleClick}
      >
        <div className="trending-subreddit-content">
          <div
            className="trending-subreddit-icon"
            style={{ backgroundColor: "#ff4500" }}
          >
            <img src={icon_img} alt="" />
          </div>
          <span>{display_name_prefixed}</span>
        </div>
      </Link>
    </li>
  );
};

export default TrendingSubItem;
