import React from "react";
import Toolbar from "../../layout/Toolbar/Toolbar";
import HomeCard from "../../layout/Cards/HomeCard/HomeCard";
import LoadMore from "../../layout/Buttons/LoadMore/LoadMore";
import TimeSelect from "../../layout/Selects/TimeSelect/TimeSelect";

const Feed = ({
  posts,
  currentSubreddit,
  handleLoadMoreClick,
  filter,
  path,
  timeQueryParam,
}) => {
  return (
    <section className="feed-container" role="feed">
      <Toolbar
        filter={filter}
        path={path}
        currentSubreddit={currentSubreddit}
      />
      {path.includes("top") ? (
        <TimeSelect timeQueryParam={timeQueryParam} />
      ) : null}
      <h2 className="page-heading">r/{currentSubreddit}</h2>
      <div className="posts-container" data-testid="posts-container">
        {posts[0] === "not found" ? (
          <p>Sorry, no subreddit was found with that name.</p>
        ) : (
          posts.map((post) => <HomeCard post={post} key={post.data.id} />)
        )}
        <LoadMore handleLoadMoreClick={handleLoadMoreClick} />
      </div>
    </section>
  );
};

export default Feed;
