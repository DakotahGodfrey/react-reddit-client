import React from "react";
import { Link } from "react-router-dom";
const TrendingSubItem = ({ subreddit }) => {
  const { display_name_prefixed, icon_img, display_name } = subreddit.data;
  return (
    <li className="trending-subreddit">
      <Link
        to={`/r/${display_name}/`}
        data-testid="anchor-link"
        className="trending-sub"
      >
        <div
          className="trending-subreddit-content"
          data-testid="subreddit-content"
        >
          <div className="trending-subreddit-icon">
            <img
              src={
                icon_img
                  ? icon_img
                  : "https://www.redditstatic.com/avatars/avatar_default_20_7E53C1.png"
              }
              alt=""
            />
          </div>
          <span data-testid="display-name">{display_name_prefixed}</span>
        </div>
      </Link>
    </li>
  );
};

export default TrendingSubItem;
