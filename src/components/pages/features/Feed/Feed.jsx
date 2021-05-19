import React from "react";
import Toolbar from "../../../layout/Toolbar/Toolbar";
import HomeCard from "../../../layout/Cards/Home/HomeCard";
import LoadMore from "../../../layout/Buttons/LoadMore/LoadMore";

const Feed = ({ posts, currentSubreddit, handleClick }) => {
  return (
    <section className="feed-container" data-testid="feed-container">
      <Toolbar />
      <h2 className="page-heading">r/{currentSubreddit}</h2>
      <div className="posts-container" data-testid="posts-container">
        {posts[0] === "not found" ? (
          <p>Sorry, no subreddit was found with that name.</p>
        ) : (
          posts.map((post) => <HomeCard post={post} key={post.data.id} />)
        )}
        <LoadMore handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Feed;
