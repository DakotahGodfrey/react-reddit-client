import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  fetchDestSubreddit,
  setCurrentSubreddit,
  selectFilter,
} from "../../../../pages/Subreddit/subredditSlice";
const TrendingSubItem = ({ subreddit }) => {
  const { display_name_prefixed, icon_img, display_name, id } = subreddit.data;
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleClick = () => {
    const action = {
      subreddit: display_name,
      filter: filter,
    };
    dispatch(fetchDestSubreddit(action));
    dispatch(setCurrentSubreddit(display_name));
  };
  return (
    <li className="trending-subreddit">
      <Link
        to={`/subreddit/r/${display_name}/${id}`}
        data-testid="anchor-link"
        className="trending-sub"
        onClick={handleClick}
      >
        <div
          className="trending-subreddit-content"
          data-testid="subreddit-content"
        >
          <div className="trending-subreddit-icon">
            <img src={icon_img} alt="" />
          </div>
          <span data-testid="display-name">{display_name_prefixed}</span>
        </div>
      </Link>
    </li>
  );
};

export default TrendingSubItem;
