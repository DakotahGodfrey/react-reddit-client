import React from "react";
import { Link } from "react-router-dom";
import {
  getPostById,
  getSubredditDescription,
} from "../../../../pages/Post/postSlice";
import { useDispatch } from "react-redux";
import PostFooter from "../../../Cards/cardComponents/PostFooter/PostFooter";
import noImgThumbnail from "../../../../../assets/media/img_placeholder.png";

const PostResult = ({ post }) => {
  const {
    subreddit,
    id,
    thumbnail,
    title,
    num_comments,
    author,
    subreddit_name_prefixed,
  } = post.data;
  const dispatch = useDispatch();
  const handleClick = () => {
    const postToGet = {
      subreddit,
      id,
    };
    dispatch(getPostById(postToGet));
    dispatch(getSubredditDescription(postToGet.subreddit));
  };
  const postLinks = {
    num_comments,
  };
  return (
    <li className="results-post">
      <Link to="/post" onClick={handleClick} className="post-link">
        <div className="results-thumbnail">
          {thumbnail === "self" || thumbnail === "default" || !thumbnail ? (
            <img src={noImgThumbnail} alt="post thumbnail" />
          ) : (
            <img src={thumbnail} alt="no thumbnail available" />
          )}
        </div>
        <div className="results-title">
          <h3>{title}</h3>
          <div className="post-information">
            <span className="results-author">u/{author}</span>
            <span className="results-subreddit-name">
              {subreddit_name_prefixed}
            </span>
          </div>
        </div>
      </Link>
      <PostFooter postLinks={postLinks} />
    </li>
  );
};

export default PostResult;
