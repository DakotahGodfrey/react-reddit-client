import React from "react";
import PostBanner from "../cardComponents/PostBanner/PostBanner";
import { urlReplace } from "../../../../app/api";
import LargePost from "../cardComponents/LargePost/LargePost";
import { selectDarkMode } from "../../../features/Searchbar/searchbarSlice";
import { useSelector } from "react-redux";
const PostCard = ({ post }) => {
  const dark = useSelector(selectDarkMode);
  const {
    title,
    subreddit_name_prefixed,
    author,
    is_video,
    selftext,
    subreddit,
    created_utc,
    thumbnail,
  } = post;

  let d = new Date(0);
  d.setUTCSeconds(created_utc);

  const image = post.preview
    ? urlReplace(post.preview.images[0].source.url)
    : null;
  const video = is_video ? post.secure_media.reddit_video.fallback_url : null;
  const postDetails = {
    subreddit_name_prefixed,
    author,
    subreddit,
    d,
  };
  const postContent = {
    title,
    image,
    video,
    selftext,
    thumbnail,
  };
  const isLarge = true;
  return (
    <article
      data-testid="card-large"
      className={dark ? "post-card-large dark" : "post-card-large"}
    >
      <PostBanner isLarge={isLarge} postDetails={postDetails} />
      <LargePost postContent={postContent} />
    </article>
  );
};

export default PostCard;
