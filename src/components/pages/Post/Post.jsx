import React, { useEffect } from "react";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import PostCard from "../../layout/Cards/PostCard/PostCard";
import PostAside from "../../layout/sidebar/PostAside/PostAside";
import { getPostById, selectCurrentPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { CommentsContainer } from "../../layout/Comments/CommentsContainer/CommentsContainer";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../features/Searchbar/searchbarSlice";

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const dark = useSelector(selectDarkMode);
  const postState = useSelector(selectCurrentPost);
  const { post, comments, status } = postState;
  useEffect(() => {
    const action = { subreddit: match.params.subreddit, id: match.params.id };
    dispatch(getPostById(action));
  }, [dispatch]);

  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <section className="page-content">
        {status === "pending" ? (
          <Loading />
        ) : (
          <div className="page-wrapper">
            <PostCard post={post} />
            <CommentsContainer comments={comments} />
            {/* <PostAside subredditData={subredditData} /> */}
          </div>
        )}
      </section>
    </main>
  );
};
export default Post;
