import React from "react";
const LoadMore = ({ handleLoadMoreClick }) => {
  return (
    <button className="load-more" onClick={handleLoadMoreClick}>
      Load More
      <i className="material-icons">expand_more</i>
    </button>
  );
};

export default LoadMore;
