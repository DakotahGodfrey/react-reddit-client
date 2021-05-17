import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import PostCard from "../../layout/FeedCard/PostCard/PostCard";
import Aside from "../../layout/Aside/Aside";
import { selectCurrentPost, selectSubredditDescription } from "./postSlice";
import { useSelector } from "react-redux";
import { CommentsContainer } from "../../layout/CommentsContainer/CommentsContainer";
import PostAside from "../../layout/PostAside/PostAside";
const Post = () => {
  const currentPostData = useSelector(selectCurrentPost);
  const subredditDescription = useSelector(selectSubredditDescription);
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
        <div className="page-wrapper">
          <PostCard post={post} />
          <CommentsContainer comments={commentsArr} />
          <PostAside subredditData={subredditData} />
        </div>
      </section>
    </main>
  );
};

export default Post;
