import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addBookmarkById } from "../../../../pages/Bookmarks/bookmarksSlice";
import { useDispatch } from "react-redux";
import PostFooter from "../../../Cards/cardComponents/PostFooter/PostFooter";
import noImgThumbnail from "../../../../../assets/media/img_placeholder.png";

const PostResult = ({ post }) => {
  const [isBookmarked, setisBookmarked] = useState(false);

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
  const handleBookmark = () => {
    const postToAdd = {
      subreddit,
      id,
    };
    dispatch(addBookmarkById(postToAdd));
    setisBookmarked(!isBookmarked);
  };
  const postLinks = {
    num_comments,
  };
  return (
    <li className="results-post">
      <Link
        to={`/r/${subreddit}/post/${id}`}
        className="post-link"
        data-testid="post-link"
      >
        <div className="results-thumbnail" data-testid="results-thumbnail">
          {thumbnail === "self" || thumbnail === "default" || !thumbnail ? (
            <img src={noImgThumbnail} alt="" />
          ) : (
            <img src={thumbnail} alt="" />
          )}
        </div>
        <div className="results-title" data-testid="results-title">
          <h3>{title}</h3>
          <div className="post-information" data-testid="post-information">
            <span className="results-author">u/{author}</span>
            <span className="results-subreddit-name">
              {subreddit_name_prefixed}
            </span>
          </div>
        </div>
      </Link>
      <PostFooter
        handleBookmark={handleBookmark}
        isBookmarked={isBookmarked}
        postLinks={postLinks}
      />
    </li>
  );
};

export default PostResult;
