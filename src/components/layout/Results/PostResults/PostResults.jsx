import React from "react";
import PostResult from "./PostResult/PostResult";
const PostResults = ({ postsArray }) => {
  return (
    <ul className="results-posts-container">
      {postsArray.map((post) => (
        <PostResult post={post} />
      ))}
    </ul>
  );
};

export default PostResults;
