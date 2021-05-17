import React from "react";
import { Link } from "react-router-dom";
const PostFooter = ({ postLinks }) => {
  const { num_comments } = postLinks;
  return (
    <footer data-testid="post-footer" className="post-footer">
      <div to="/" data-testid="comment-link" className="post-links">
        <i className="material-icons">comment</i>
        <span data-testid="num_comments">{num_comments} </span> Comments
      </div>
      <div to="/" data-testid="share-link" className="post-links">
        <i className="material-icons">share</i>
        Share
      </div>
      <button className="post-links">
        <i className="material-icons">star</i>
        Add to favorites
      </button>
    </footer>
  );
};

export default PostFooter;
