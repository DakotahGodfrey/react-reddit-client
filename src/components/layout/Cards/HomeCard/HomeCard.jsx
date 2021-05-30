import React, { useState } from "react";
import PostBanner from "../cardComponents/PostBanner/PostBanner";
import PostContent from "../cardComponents/PostContent/PostContent";
import PostFooter from "../cardComponents/PostFooter/PostFooter";
import { urlReplace } from "../../../../app/api";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../../../features/Searchbar/searchbarSlice";
import {
  addBookmarkById,
  removeFavorite,
} from "../../../pages/Bookmarks/bookmarksSlice";

const HomeCard = ({ post, bookmarked }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {
    title,
    author,
    subreddit_name_prefixed,
    subreddit,
    num_comments,
    is_video,
    id,
    created_utc,
    thumbnail,
  } = post.data;

  let utcSeconds = created_utc;
  let d = new Date(0);
  d.setUTCSeconds(utcSeconds);

  const image = post.data.preview
    ? urlReplace(post.data.preview.images[0].source.url)
    : post.data.url_overridden_by_dest
    ? post.data.url_overridden_by_dest
    : null;
  const video = is_video
    ? post.data.secure_media.reddit_video.fallback_url
    : null;
  const postDetails = {
    author,
    subreddit_name_prefixed,
    subreddit,
    d,
    id,
  };
  const postContent = {
    title,
    image,
    video,
    thumbnail,
  };
  const postLinks = {
    num_comments: num_comments,
    subreddit: subreddit,
    id: id,
  };
  const dark = useSelector(selectDarkMode);

  const dispatch = useDispatch();

  const handleBookmark = () => {
    const postToAdd = {
      subreddit,
      id,
    };
    dispatch(addBookmarkById(postToAdd));
    setIsBookmarked(!isBookmarked);
  };
  const removeBookmark = () => {
    dispatch(removeFavorite(id));
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
      <Link
        to={`/r/${subreddit}/post/${id}`}
        replace
        aria-label={title}
        data-testid="content-link"
      >
        <PostContent postContent={postContent} />
        {/* Post Footer Here */}
      </Link>
      <PostFooter
        postLinks={postLinks}
        handleBookmark={handleBookmark}
        isBookmarked={isBookmarked}
        removeBookmark={removeBookmark}
        bookmarked={bookmarked}
      />
    </section>
  );
};

export default HomeCard;
