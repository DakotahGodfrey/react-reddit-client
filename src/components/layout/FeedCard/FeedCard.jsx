import React from "react";
import PostBanner from "../PostBanner/PostBanner";
import PostContent from "../PostContent/PostContent";
import PostFooter from "../PostFooter/PostFooter";
import VoteBar from "../VoteBar/VoteBar";
import { urlReplace } from "../../../app/api";
const FeedCard = ({ post }) => {
  const { title, author, subreddit_name_prefixed, num_comments, is_video } =
    post.data;

  const image = post.data.preview
    ? urlReplace(post.data.preview.images[0].source.url)
    : null;

  const video = is_video
    ? post.data.secure_media.reddit_video.fallback_url
    : null;
  const postDetails = {
    author,
    subreddit_name_prefixed,
  };
  const postContent = {
    title,
    image,
    video,
  };
  const postLinks = {
    num_comments,
  };
  return (
    <section
      aria-label="user post"
      data-testid="user-post"
      className="post-card"
    >
      {/* Vote Component Here */}
      {/* <VoteBar /> */}
      {/* Post Information Here */}
      <PostBanner postDetails={postDetails} />
      {/* Post Content Here */}
      <PostContent postContent={postContent} />
      {/* Post Footer Here */}
      <PostFooter postLinks={postLinks} />
    </section>
  );
};

export default FeedCard;
