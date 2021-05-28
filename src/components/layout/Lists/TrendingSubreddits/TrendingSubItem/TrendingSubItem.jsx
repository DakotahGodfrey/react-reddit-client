import React from "react";
import { Link } from "react-router-dom";

const TrendingSubItem = ({ subreddit }) => {
  const { display_name_prefixed, icon_img, display_name } = subreddit.data;
  return (
    <li className="trending-subreddit">
      <Link to={`/r/${display_name}/`} className="trending-sub">
        <div className="trending-subreddit-content">
          <div className="trending-subreddit-icon">
            <img src={icon_img} alt="" />
          </div>
          <span>{display_name_prefixed}</span>
        </div>
      </Link>
    </li>
  );
};

export default TrendingSubItem;
