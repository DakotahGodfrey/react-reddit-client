import React from "react";

const PostContent = ({ postContent }) => {
  const { title, image, video } = postContent;
  return (
    <article className="post-content">
      <h2 className="post-title">{title}</h2>
      {image && <img src={image} alt="post image" />}
      {video && <iframe data-testid="video" src={video}></iframe>}
    </article>
  );
};

export default PostContent;
