import React from "react";
import { Link } from "react-router-dom";
import {
  getPostById,
  getSubredditDescription,
} from "../../../../pages/Post/postSlice";
import { useDispatch } from "react-redux";
import PostFooter from "../../../Cards/cardComponents/PostFooter/PostFooter";

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
        {/* thumbnail */}
        <div className="results-thumbnail">
          <img src={thumbnail} alt={"post thumbnail"} />
        </div>
        {/* banner */}
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
      {/* buttons */}
      <PostFooter postLinks={postLinks} />
    </li>
  );
};

export default PostResult;
