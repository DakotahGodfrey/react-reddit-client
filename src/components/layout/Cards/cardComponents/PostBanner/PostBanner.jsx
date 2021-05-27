import React from "react";
import { Link } from "react-router-dom";
import { timeSince } from "../../../../../assets/helpers/helpers";
const PostBanner = ({ postDetails, isLarge }) => {
  const { subreddit_name_prefixed, author, subreddit, d } = postDetails;
  const postTime = Date.parse(d);
  const timeStamp = timeSince(postTime);
  return (
    <div
      className={isLarge ? "post-large-information" : "post-information"}
      data-testid="post-banner"
    >
      <Link
        to={`/r/${subreddit}`}
        replace
        data-testid="subreddit-link"
        className="post-subreddit"
      >
        {subreddit_name_prefixed}
      </Link>

      <span data-testid="author" className="post-author">
        Posted by u/{author}{" "}
        <span data-testid="time-stamp" className="post-date">
          {timeStamp} ago
        </span>
      </span>
    </div>
  );
};

export default PostBanner;
