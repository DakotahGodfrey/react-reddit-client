import React from "react";
import PostBanner from "../cardComponents/PostBanner/PostBanner";
import { urlReplace } from "../../../../app/api";
import LargePost from "../cardComponents/LargePost/LargePost";
const PostCard = ({ post }) => {
  if (post) {
    const { title, subreddit_name_prefixed, author, is_video, selftext } = post;
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
      selftext,
    };
    const isLarge = true;
    return (
      <article className="post-card-large">
        <PostBanner isLarge={isLarge} postDetails={postDetails} />
        <LargePost postContent={postContent} />
      </article>
    );
  }
  return <div className="load"></div>;
};

export default PostCard;
