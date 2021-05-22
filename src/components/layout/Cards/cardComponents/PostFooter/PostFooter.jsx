import React from "react";
const PostFooter = ({
  postLinks,
  handleBookmark,
  isBookmarked,
  bookmarked,
  removeBookmark,
}) => {
  const { num_comments } = postLinks;
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
  return (
    <footer data-testid="post-footer" className="post-footer">
      <div to="/" data-testid="comment-link" className="post-links">
        <i className="material-icons">comment</i>
        <span data-testid="num_comments">
          {num_comments ? num_comments_rounded : null}{" "}
        </span>{" "}
        Comments
      </div>
      <div to="/" data-testid="share-link" className="post-links">
        <i className="material-icons">share</i>
        Share
      </div>
      <button
        style={bookmarked ? { display: "none" } : null}
        disabled={isBookmarked}
        className="post-links"
        onClick={handleBookmark}
      >
        <i className="material-icons">bookmark</i>
        {isBookmarked ? "bookmarked" : "bookmark"}
      </button>
      <button
        style={!bookmarked ? { display: "none" } : { display: "flex" }}
        className="post-links"
        onClick={removeBookmark}
      >
        <i className="material-icons">bookmark_remove</i>
        Remove
      </button>
    </footer>
  );
};

export default PostFooter;
