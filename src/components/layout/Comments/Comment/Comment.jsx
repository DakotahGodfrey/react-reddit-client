import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { timeSince } from "../../../../assets/helpers/helpers";

const Comment = ({ comment }) => {
  const { author, body, created_utc } = comment.data;
  const bodyMarkdown = body ? body.replace(/&gt;/g, "> ") : "";
  let utcSeconds = created_utc;
  let d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  const postTime = Date.parse(d);
  const timeStamp = timeSince(postTime);

  return (
    <div data-testid="comment-card" className="comment-card">
      <div className="comment-avatar" data-testid="comment-avatar">
        <img
          src="https://www.redditstatic.com/avatars/avatar_default_07_7E53C1.png"
          alt="reddit snoo alien avatar"
        />
      </div>
      <div className="comment-content" data-testid="comment-content">
        <div className="comment-byline" data-testid="comment-byline">
          <span className="comment-author" data-testid="comment-author">
            u/{author}
          </span>
          <span className="comment-time" data-testid="comment-time">
            {timeStamp} ago
          </span>
        </div>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={bodyMarkdown}
          className="comment-markdown"
          data-testid="comment-markdown"
        />
      </div>
    </div>
  );
};

export default Comment;
