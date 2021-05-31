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
  const avatars = [
    "20",
    "12",
    "10",
    "20",
    "01",
    "02",
    "03",
    "04",
    "09",
    "15",
    "17",
    "19",
  ];
  const randIndex = avatars[Math.floor(Math.random() * avatars.length)];
  const avatarBackgrounds = ["D4E815", "0DD3BB", "FF66AC", "EA0027", "46A508"];
  const randAvatarBg =
    avatarBackgrounds[Math.floor(Math.random() * avatarBackgrounds.length)];
  return (
    <article className="comment-card">
      <figure className="comment-avatar">
        <img
          src={`https://www.redditstatic.com/avatars/avatar_default_${randIndex}_${randAvatarBg}.png`}
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
