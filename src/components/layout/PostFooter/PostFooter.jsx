import React from "react";
import { Link } from "react-router-dom";
const PostFooter = ({ postLinks }) => {
  const { num_comments } = postLinks;
  return (
    <footer data-testid="post-footer" className="post-footer">
      <Link to="/" data-testid="comment-link" className="post-links">
        <i className="material-icons">comment</i>
        {num_comments} Comments
      </Link>
      <Link to="/" data-testid="share-link" className="post-links">
        <i className="material-icons">share</i>
        Share
      </Link>
      <button className="post-links">
        <i className="material-icons">star</i>
        Add to favorites
      </button>
    </footer>
  );
};

export default PostFooter;
