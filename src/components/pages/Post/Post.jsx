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
    <main className="post">
      <Navbar />
      <section className="post">
        <PostCard post={post} />
      </section>
    </main>
  );
};

export default Post;
