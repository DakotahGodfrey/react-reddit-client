import React from "react";
import PostBanner from "../cardComponents/PostBanner/PostBanner";
import PostContent from "../cardComponents/PostContent/PostContent";
import PostFooter from "../cardComponents/PostFooter/PostFooter";
import { urlReplace } from "../../../../app/api";
import { Link } from "react-router-dom";
import {
  getPostById,
  getSubredditDescription,
} from "../../../pages/Post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../../../pages/features/Searchbar/searchbarSlice";
const HomeCard = ({ post }) => {
  // destructure passed prop.
  const {
    title,
    author,
    subreddit_name_prefixed,
    subreddit,
    num_comments,
    is_video,
    id,
    created_utc,
  } = post.data;
  let utcSeconds = created_utc;
  let d = new Date(0);

  d.setUTCSeconds(utcSeconds);

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
    subreddit,
    d,
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
  const dark = useSelector(selectDarkMode);

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
      className={dark ? "post-card dark" : "post-card "}
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
