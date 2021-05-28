import React from "react";

const PostContent = ({ postContent }) => {
  const { title, image, video, thumbnail } = postContent;
  return (
    <article className="post-content">
      <h2 className="post-title">{title}</h2>
      {video ? (
        <video controls>
          <source src={video} poster={thumbnail} type="video/mp4" />
        </video>
      ) : image ? (
        <img src={image} alt={title} />
      ) : null}
    </article>
  );
};

export default PostContent;
