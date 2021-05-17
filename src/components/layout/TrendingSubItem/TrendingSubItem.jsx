import React from "react";
import { Link } from "react-router-dom";
const TrendingSubItem = ({ subreddit }) => {
  const subredditData = subreddit.data;
  const { display_name_prefixed, icon_img } = subredditData;
  console.log(icon_img);
  return (
    <li className="trending-subreddit">
      <Link to="/" data-testid="anchor-link" className="trending-sub">
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
