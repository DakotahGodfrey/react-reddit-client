import React from "react";
import { Link } from "react-router-dom";
const PostFooter = ({
  postLinks,
  handleBookmark,
  isBookmarked,
  bookmarked,
  removeBookmark,
}) => {
  const { num_comments, subreddit, id } = postLinks;
  const roundComments = (comments) => {
    let roundedComments;
    if (comments >= 1000000) {
      roundedComments = Math.floor(comments / 1000000) + "m";
    } else if (comments >= 1000) {
      roundedComments = Math.floor(comments / 1000) + "k";
    }
    return roundedComments;
  };
  const num_comments_rounded = roundComments(num_comments);
  const currentSubreddit = subreddit;
  console.log(currentSubreddit);
  return (
    <footer data-testid="post-footer" className="post-footer">
      <Link
        to={`r/${currentSubreddit}/post/${id}`}
        replace
        data-testid="comments"
        className="post-links"
      >
        <i className="material-icons">comment</i>
        <span data-testid="num_comments">
          {num_comments_rounded ? num_comments_rounded : "0"}
        </span>{" "}
        Comments
      </Link>

      <button
        style={bookmarked ? { display: "none" } : null}
        disabled={isBookmarked}
        className="post-links"
        onClick={handleBookmark}
        aria-label="add to bookmarks"
        data-testid="bookmark-button"
      >
        <i className="material-icons" aria-hidden="true">
          bookmark
        </i>
        {isBookmarked ? "bookmarked" : "bookmark"}
      </button>
      <button
        style={!bookmarked ? { display: "none" } : { display: "flex" }}
        className="post-links"
        onClick={removeBookmark}
        aria-label="remove from bookmarks"
        data-testid="remove-bookmark"
      >
        <i className="material-icons" aria-hidden="true">
          bookmark_remove
        </i>
        Remove
      </button>
    </footer>
  );
};

export default PostFooter;
