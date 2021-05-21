import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSubreddit,
  fetchDestSubreddit,
  selectFilter,
} from "../../../../pages/Subreddit/subredditSlice";
import { Link } from "react-router-dom";
import { timeSince } from "../../../../../assets/helpers/helpers";
const PostBanner = ({ postDetails, isLarge }) => {
  const { subreddit_name_prefixed, author, subreddit, d } = postDetails;
  const postTime = Date.parse(d);
  const timeStamp = timeSince(postTime);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleClick = () => {
    dispatch(setCurrentSubreddit(subreddit));
    const action = { subreddit: subreddit, filter: filter };
    dispatch(fetchDestSubreddit(action));
  };

  return (
    <header
      aria-label="post metadata"
      className={isLarge ? "post-large-information" : "post-information"}
    >
      <span data-testid="subreddit" className="post-subreddit">
        <Link to="/subreddit" onClick={handleClick}>
          {subreddit_name_prefixed}
        </Link>
      </span>
      <span data-testid="author" className="post-author">
        Posted by u/{author} <span className="post-date">{timeStamp} ago</span>
      </span>
    </header>
  );
};

export default PostBanner;
