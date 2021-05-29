import React, { useEffect } from "react";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import PostCard from "../../layout/Cards/PostCard/PostCard";
import PostAside from "../../layout/sidebar/PostAside/PostAside";
import {
  getPostById,
  selectCurrentPost,
  getSubredditDescription,
  clearPost,
} from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { CommentsContainer } from "../../layout/Comments/CommentsContainer/CommentsContainer";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";

const Post = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = { subreddit: match.params.subreddit, id: match.params.id };
    dispatch(clearPost());
    dispatch(getPostById(action));
    dispatch(getSubredditDescription(match.params.subreddit));
  }, [dispatch, match.params.subreddit, match.params.id]);

  const dark = useSelector(selectDarkMode);
  const postState = useSelector(selectCurrentPost);
  const { post, comments, status, subredditDescription } = postState;
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <section aria-label="post-content" className="page-content">
        {status === "pending" ? (
          <Loading />
        ) : (
          <div data-testid="page-wrapper" className="page-wrapper">
            <PostCard post={post} />
            <CommentsContainer comments={comments} />
            {subredditDescription.data ? (
              <PostAside subredditDescription={subredditDescription.data} />
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
};
export default Post;
