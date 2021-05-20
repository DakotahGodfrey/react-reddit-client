import React from "react";

import SubredditResult from "./SubredditResult/SubredditResult";

const SubredditResults = ({ subredditsArray }) => {
  return (
    <ul className="results-subreddit-container">
      {subredditsArray.map((subreddit) => (
        <SubredditResult subreddit={subreddit} key={subreddit.data.id} />
      ))}
    </ul>
  );
};

export default SubredditResults;
