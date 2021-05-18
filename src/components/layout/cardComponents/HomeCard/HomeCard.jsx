import React from "react";
import PostBanner from "../PostBanner/PostBanner";
import PostContent from "../PostContent/PostContent";
import PostFooter from "../PostFooter/PostFooter";
import { urlReplace } from "../../../../app/api";
import { Link } from "react-router-dom";
import {
  getPostById,
  getSubredditDescription,
} from "../../../pages/Post/postSlice";
import { useDispatch } from "react-redux";
const HomeCard = ({ post }) => {
  // destructure passed prop.
  const {
    title,
    author,
    subreddit_name_prefixed,
    num_comments,
    is_video,
    subreddit,
    id,
  } = post.data;

  // handle images
  const image = post.data.preview
    ? urlReplace(post.data.preview.images[0].source.url)
    : null;
  // handle video
  const video = is_video
    ? post.data.secure_media.reddit_video.fallback_url
    : null;
  // post banner object
  const postDetails = {
    author,
    subreddit_name_prefixed,
  };
  // post content object
  const postContent = {
    title,
    image,
    video,
  };
  // post footer object
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
    dispatch(getSubredditDescription(postToGet.subreddit));
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

export default HomeCard;
