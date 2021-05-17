import React from "react";

const LargePost = ({ postContent }) => {
  const { title, video, image } = postContent;
  return (
    <article className="post-large-content">
      <h2 className="">{title}</h2>
      {video ? (
        <video data-testid="video" controls>
          <source data-testid="source" src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img src={image} alt={title} />
      ) : null}
    </article>
  );
};

export default LargePost;
