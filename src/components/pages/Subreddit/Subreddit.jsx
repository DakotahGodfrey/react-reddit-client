import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import {
  fetchNextPageBySubreddit,
  selectSubreddit,
  fetchSubreddit,
} from "./subredditSlice";
import Feed from "../../features/Feed/Feed";
import TrendingSidebar from "../../features/TrendingSidebar/TrendingSidebar";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";

const Subreddit = ({ match }) => {
  const dispatch = useDispatch();
  const path = match.path;
  useEffect(() => {
    document.title = `Subreddit | r/${match.params.display_name}`;
    const action = { subreddit: match.params.display_name };
    dispatch(fetchSubreddit(action));
  }, [dispatch, match.params.display_name]);
  const subreddit = useSelector(selectSubreddit);
  const dark = useSelector(selectDarkMode);
  const { paginationId, posts, errors, status } = subreddit;
  const handleLoadMoreClick = () => {
    const action = {
      paginationId,
    };
    dispatch(fetchNextPageBySubreddit(action));
  };
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <section className="page-content">
        <div className="page-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed
              posts={posts}
              currentSubreddit={match.params.display_name}
              handleLoadMoreClick={handleLoadMoreClick}
              path={path}
            />
          )}
          <TrendingSidebar />
        </div>
      </section>
    </main>
  );
};

export default Subreddit;
