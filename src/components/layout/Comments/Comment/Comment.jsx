import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { timeSince } from "../../../../assets/helpers/helpers";

const Comment = ({ comment }) => {
  const { author, body, created_utc } = comment.data;
  const bodyMarkdown = body ? body.replace(/&gt;/g, ">") : "";
  let utcSeconds = created_utc;
  let d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  const postTime = Date.parse(d);
  const timeStamp = timeSince(postTime);
  return (
    <article className="comment-card">
      <figure className="comment-avatar">
        <img
          src="https://www.redditstatic.com/avatars/avatar_default_07_7E53C1.png"
          alt="reddit user avatar"
        />
      </figure>
      <div className="comment-content">
        <div className="comment-byline">
          <span className="comment-author">u/{author}</span>
          <span className="comment-time">{timeStamp} ago</span>
        </div>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={bodyMarkdown}
          className="comment-markdown"
        />
      </div>
    </article>
  );
};

export default Comment;
