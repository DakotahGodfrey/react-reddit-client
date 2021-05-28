import React from "react";
import { Link } from "react-router-dom";
import { timeSince } from "../../../../../assets/helpers/helpers";
const PostBanner = ({ postDetails, isLarge }) => {
  const { subreddit_name_prefixed, author, subreddit, d } = postDetails;
  const postTime = Date.parse(d);
  const timeStamp = timeSince(postTime);
  return (
    <div
      role="region"
      className={isLarge ? "post-large-information" : "post-information"}
      aria-label="post-banner"
    >
      <Link to={`/r/${subreddit}`} replace className="post-subreddit">
        {subreddit_name_prefixed}
      </Link>

      <span className="post-author">
        Posted by u/{author} <span className="post-date">{timeStamp} ago</span>
      </span>
    </div>
  );
};

export default PostBanner;
