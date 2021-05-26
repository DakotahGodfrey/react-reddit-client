import React from "react";
import Toolbar from "../../../layout/Toolbar/Toolbar";
import HomeCard from "../../../layout/Cards/HomeCard/HomeCard";
import LoadMore from "../../../layout/Buttons/LoadMore/LoadMore";

const Feed = ({
  posts,
  currentSubreddit,
  handleLoadMoreClick,
  handleNewClick,
  handleTopClick,
  handleHotClick,
  filter,
  menuHidden,
  handleAllClick,
  handleYearClick,
  handleMonthClick,
  handleDayClick,
}) => {
  return (
    <section className="feed-container" data-testid="feed-container">
      <Toolbar
        handleNewClick={handleNewClick}
        handleTopClick={handleTopClick}
        handleHotClick={handleHotClick}
        handleAllClick={handleAllClick}
        handleYearClick={handleYearClick}
        handleMonthClick={handleMonthClick}
        handleDayClick={handleDayClick}
        filter={filter}
        menuHidden={menuHidden}
      />
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
