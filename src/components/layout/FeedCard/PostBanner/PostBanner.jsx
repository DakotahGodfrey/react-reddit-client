import React from "react";

const PostBanner = ({ postDetails, isLarge }) => {
  const { subreddit_name_prefixed, author } = postDetails;
  return (
    <header
      aria-label="post metadata"
      className={isLarge ? "post-large-information" : "post-information"}
    >
      <span data-testid="subreddit" className="post-subreddit">
        {subreddit_name_prefixed}
      </span>
      <span data-testid="author" className="post-author">
        Posted by u/{author}
      </span>
    </header>
  );
};

export default PostBanner;
