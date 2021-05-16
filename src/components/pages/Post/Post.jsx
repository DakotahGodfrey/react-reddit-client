import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import PostCard from "../../layout/PostCard/PostCard";
import { selectCurrentPost } from "./postSlice";
import { useSelector } from "react-redux";
const Post = () => {
  const currentPostData = useSelector(selectCurrentPost);
  const post = currentPostData[0]
    ? currentPostData[0].data.children[0].data
    : null;
  return (
    <main className="page">
      <Navbar />
      <section className="page-content">
        <div className="page-wrapper">
          <PostCard post={post} />
        </div>
      </section>
    </main>
  );
};

export default Post;
