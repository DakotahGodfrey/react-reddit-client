import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
const SubredditResult = ({ subreddit }) => {
  const { display_name_prefixed, display_name, public_description } =
    subreddit.data;
  return (
    <li className="results-subreddit">
      <Link to={`/r/${display_name}`} className="subreddit-link">
        <h3 className="results-subreddit-title">{display_name_prefixed}</h3>

        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={public_description}
          className="results-subreddit-description"
        />
      </Link>
    </li>
  );
};

export default SubredditResult;
