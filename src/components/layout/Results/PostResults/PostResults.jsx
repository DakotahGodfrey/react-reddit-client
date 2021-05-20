import React from "react";
import PostResult from "./PostResult/PostResult";
const PostResults = ({ postsArray }) => {
  return (
    <ul className="results-posts-container">
      {postsArray.map((post) => (
        <PostResult post={post} key={post.data.id} />
      ))}
    </ul>
  );
};

export default PostResults;
