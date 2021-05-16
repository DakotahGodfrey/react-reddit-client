import React from "react";
import Toolbar from "../../components/layout/Toolbar/Toolbar";
import FeedCard from "../../components/layout/FeedCard/FeedCard";
import { useDispatch } from "react-redux";
import {
  getPostsBySubreddit,
  setCurrentSubreddit,
} from "../../components/pages/Home/homeSlice";

const Feed = ({ posts, currentSubreddit }) => {
  const testFn = () => {
    console.log("this works");
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPostsBySubreddit(currentSubreddit));
  };
  const handleChange = (e) => {
    dispatch(setCurrentSubreddit(e.target.value));
  };
  return (
    <section className="feed-container" data-testid="feed-container">
      {/* Feed Navigation Component */}
      <Toolbar />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="feed-heading" htmlFor="subreddit" onClick={testFn}>
          r/{currentSubreddit}
        </label>
        <input
          type="text"
          id="search"
          name="subreddit"
          id="subreddit"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className="posts-container" data-testid="posts-container">
        {posts[0] === "not found" ? (
          <p>Sorry, no subreddit was found with that name.</p>
        ) : (
          posts.map((post) => <FeedCard post={post} key={post.data.id} />)
        )}
      </div>
    </section>
  );
};

export default Feed;
