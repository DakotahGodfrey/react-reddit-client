import React from "react";
import Comment from "../Comment/Comment";

export const CommentsContainer = ({ comments }) => {
  return (
    <section className="post-large-comments">
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.data.id} />
        ))
      ) : (
        <p className="status-message">No Comments Yet! </p>
      )}
    </section>
  );
};
