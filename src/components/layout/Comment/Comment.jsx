import React from "react";
import ReactMarkdown from "react-markdown";
const Comment = ({ comment }) => {
  const { author, body } = comment.data;
  return (
    <div className="comment-card">
      <div className="comment-avatar">
        <img
          src="https://www.redditstatic.com/avatars/avatar_default_07_7E53C1.png"
          alt="default reddit snoo avatar"
        />
      </div>
      <div className="comment-content">
        <div className="comment-byline">
          <span className="comment-author">u/{author}</span>
          <span className="comment-time">hours ago</span>
        </div>
        <p className="comment-body">
          <ReactMarkdown className="comment-markdown">{body}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default Comment;
