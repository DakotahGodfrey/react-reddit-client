import React from "react";
const LoadMore = ({ handleLoadMoreClick }) => {
  return (
    <button
      className="load-more"
      aria-label="load more"
      onClick={handleLoadMoreClick}
    >
      Load More
      <i className="material-icons" aria-hidden="true">
        expand_more
      </i>
    </button>
  );
};

export default LoadMore;
