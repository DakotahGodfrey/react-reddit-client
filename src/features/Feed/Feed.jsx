import React from "react";
import Toolbar from "../../components/layout/Toolbar/Toolbar";
import FeedCard from "../../components/layout/FeedCard/FeedCard";

const Feed = ({ posts }) => {
  return (
    <section className="feed-container" data-testid="feed-container">
      {/* Feed Navigation Component */}
      <Toolbar />
      <h2 className="feed-heading">r/popular</h2>
      <div className="posts-container" data-testid="posts-container">
        {posts.map((post) => (
          <FeedCard post={post} key={post.data.id} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
