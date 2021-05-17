import React from "react";
import PostBanner from "../PostBanner/PostBanner";
import PostContent from "../PostContent/PostContent";
import PostFooter from "../PostFooter/PostFooter";
import { urlReplace } from "../../../../app/api";
import { Link } from "react-router-dom";
import { getPostById } from "../../../pages/Post/postSlice";
import { useDispatch } from "react-redux";
const FeedCard = ({ post }) => {
  const {
    title,
    author,
    subreddit_name_prefixed,
    num_comments,
    is_video,
    subreddit,
    id,
  } = post.data;
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
  const dispatch = useDispatch();
  const handleClick = () => {
    const postToGet = {
      subreddit,
      id,
    };
    dispatch(getPostById(postToGet));
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
      <Link to="/post" onClick={handleClick}>
        <PostContent postContent={postContent} />
        {/* Post Footer Here */}
      </Link>

      <PostFooter postLinks={postLinks} />
    </section>
  );
};

export default FeedCard;