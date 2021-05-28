import React from "react";
import PostResult from "./PostResult/PostResult";
const PostResults = ({ postResults }) => {
  return (
    <ul className="results-posts-container">
      {postResults.map((post) => (
        <PostResult post={post} key={post.data.id} />
      ))}
    </ul>
  );
};

export default PostResults;
