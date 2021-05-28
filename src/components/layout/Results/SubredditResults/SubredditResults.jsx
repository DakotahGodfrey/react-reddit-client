import React from "react";

import SubredditResult from "./SubredditResult/SubredditResult";

const SubredditResults = ({ subredditResults }) => {
  return (
    <ul className="results-subreddit-container">
      {subredditResults.map((subreddit) => (
        <SubredditResult subreddit={subreddit} key={subreddit.data.id} />
      ))}
    </ul>
  );
};

export default SubredditResults;
