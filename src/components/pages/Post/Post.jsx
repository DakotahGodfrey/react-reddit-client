import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import PostCard from "../../layout/FeedCard/PostCard/PostCard";
import { selectCurrentPost } from "./postSlice";
import { useSelector } from "react-redux";
import { CommentsContainer } from "../../layout/CommentsContainer/CommentsContainer";
const Post = () => {
  const currentPostData = useSelector(selectCurrentPost);
  const post = currentPostData[0]
    ? currentPostData[0].data.children[0].data
    : null;
  const comments = currentPostData[1] ? currentPostData[1].data.children : [];
  const commentsArr = comments.length > 30 ? comments.slice(0, 30) : comments;
  console.log(commentsArr);
  return (
    <main className="page">
      <Navbar />
      <section className="page-content">
        <div className="page-wrapper">
          <PostCard post={post} />
          <CommentsContainer comments={commentsArr} />
        </div>
      </section>
    </main>
  );
};

export default Post;
