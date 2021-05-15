import React from "react";

const PostBanner = ({ postDetails }) => {
  const { subreddit, author } = postDetails;
  return (
    <header aria-label="post metadata" className="post-information">
      <span data-testid="subreddit" className="post-subreddit">
        {subreddit}
      </span>
      <span data-testid="author" className="post-author">
        {author}
      </span>
    </header>
  );
};

export default PostBanner;
