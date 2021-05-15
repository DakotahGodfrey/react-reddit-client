import React from "react";

const PostContent = ({ postContent }) => {
  const { title, image, video } = postContent;
  return (
    <article className="post-content">
      <h2 className="post-title">{title}</h2>
      {video ? (
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img src={image} alt="post image" />
      ) : null}
    </article>
  );
};

export default PostContent;
