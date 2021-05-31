import React from "react";
import Comment from "../Comment/Comment";

export const CommentsContainer = ({ comments }) => {
  console.log(comments.length);
  return (
    <section className="post-large-comments" data-testid="comments-container">
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.data.id} />
        ))
      ) : (
        <article style={{ display: "block" }} className="comment-card">
          <div className="comment-content">
            <p style={{ textAlign: "center" }}>No comments yet!</p>
          </div>
        </article>
      )}
    </section>
  );
};

export default CommentsContainer;
