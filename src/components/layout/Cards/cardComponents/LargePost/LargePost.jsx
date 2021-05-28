import React from "react";
import ReactMarkdown from "react-markdown";
const LargePost = ({ postContent }) => {
  const { title, video, image, selftext, thumbnail } = postContent;
  return (
    <section
      className="post-large-content"
      aria-label="post-content"
      title="post-content"
    >
      <h1>{title}</h1>
      {video ? (
        <video controls>
          <source src={video} poster={thumbnail} type="video/mp4" />
        </video>
      ) : image ? (
        <img src={image} alt={title} />
      ) : (
        <ReactMarkdown className="post-large-body">{selftext}</ReactMarkdown>
      )}
    </section>
  );
};

export default LargePost;
