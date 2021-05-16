import React from "react";
import PostBanner from "../PostBanner/PostBanner";
import { urlReplace } from "../../../app/api";
import LargePost from "../LargePost/LargePost";
const PostCard = ({ post }) => {
  // const { title, subreddit_name_prefixed, author } = post;
  console.log(post);
  if (post) {
    const { title, subreddit_name_prefixed, author, is_video } = post;
    console.log(title);

    const image = post.preview
      ? urlReplace(post.preview.images[0].source.url)
      : null;

    const video = is_video ? post.secure_media.reddit_video.fallback_url : null;
    const postDetails = {
      subreddit_name_prefixed,
      author,
    };
    const postContent = {
      title,
      image,
      video,
    };
    return (
      <article>
        <PostBanner postDetails={postDetails} />
        <LargePost postContent={postContent} />
      </article>
    );
  }
  return <div className="load"></div>;
};

export default PostCard;
