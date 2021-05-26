import React from "react";
import ReactMarkdown from "react-markdown";
const LargePost = ({ postContent }) => {
  const { title, video, image, selftext, thumbnail } = postContent;
  return (
    <article className="post-large-content">
      <h2 className="">{title}</h2>
      {video ? (
        <video data-testid="video" controls>
          <source
            data-testid="source"
            src={video}
            poster={thumbnail}
            type="video/mp4"
          />
        </video>
      ) : image ? (
        <img src={image} alt={title} />
      ) : (
        <ReactMarkdown data-testid="body" className="post-large-body">
          {selftext}
        </ReactMarkdown>
      )}
    </article>
  );
};

export default LargePost;
