import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {
  fetchDestSubreddit,
  setCurrentSubreddit,
} from "../../../../pages/Subreddit/subredditSlice";
const SubredditResult = ({ subreddit }) => {
  const { display_name_prefixed, display_name, public_description } =
    subreddit.data;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchDestSubreddit(display_name));
    dispatch(setCurrentSubreddit(display_name));
  };
  return (
    <li className="results-subreddit">
      <Link
        to="/subreddit"
        data-testid="subreddit-link"
        className="subreddit-link"
        onClick={handleClick}
      >
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
