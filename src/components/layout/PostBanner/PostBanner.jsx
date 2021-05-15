import React from "react";

const PostBanner = ({ postDetails }) => {
  const { subreddit_name_prefixed, author } = postDetails;
  return (
    <header aria-label="post metadata" className="post-information">
      <span data-testid="subreddit" className="post-subreddit">
        {subreddit_name_prefixed}
      </span>
      <span data-testid="author" className="post-author">
        {author}
      </span>
    </header>
  );
};

export default PostBanner;
