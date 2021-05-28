import React from "react";
import Loading from "../../Loading/Loading";
import Comment from "../Comment/Comment";

export const CommentsContainer = ({ comments }) => {
  return (
    <section className="post-large-comments">
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.data.id} />
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default CommentsContainer;
