import React from "react";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import PostCard from "../../layout/Cards/PostCard/PostCard";
import PostAside from "../../layout/sidebar/PostAside/PostAside";
import {
  selectCurrentPost,
  selectStatus,
  selectSubredditDescription,
} from "./postSlice";
import { useSelector } from "react-redux";
import { CommentsContainer } from "../../layout/Comments/CommentsContainer/CommentsContainer";
import Loading from "../../layout/Loading/Loading";
const Post = () => {
  const currentPostData = useSelector(selectCurrentPost);
  const subredditDescription = useSelector(selectSubredditDescription);
  const status = useSelector(selectStatus);
  // handle pending post
  const post = currentPostData[0]
    ? currentPostData[0].data.children[0].data
    : null;
  // handle subreddit desc
  const subredditData = subredditDescription.data;
  //handle comments
  const comments = currentPostData[1] ? currentPostData[1].data.children : [];
  // only display first 30 comments
  let commentsArr = comments.length > 30 ? comments.slice(0, 30) : comments;

  return (
    <main className="page">
      <Navbar />
      <section className="page-content">
        {status === "pending" ? (
          <Loading />
        ) : (
          <div className="page-wrapper">
            <PostCard post={post} />
            <CommentsContainer comments={commentsArr} />
            <PostAside subredditData={subredditData} />
          </div>
        )}
      </section>
    </main>
  );
};

export default Post;
