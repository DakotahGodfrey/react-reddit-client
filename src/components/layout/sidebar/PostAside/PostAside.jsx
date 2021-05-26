import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {
  fetchDestSubreddit,
  setCurrentSubreddit,
} from "../../../pages/Subreddit/subredditSlice";
import { useDispatch } from "react-redux";
import { roundSubs } from "../../../../assets/helpers/helpers";
const PostAside = ({ subredditData }) => {
  const dispatch = useDispatch();
  const {
    display_name_prefixed,
    public_description,
    display_name,
    subscribers,
    accounts_active,
  } = subredditData ? subredditData : null;
  const handleClick = () => {
    dispatch(setCurrentSubreddit(display_name));
    dispatch(fetchDestSubreddit(display_name));
  };

  const subscribersRounded = roundSubs(subscribers);
  const activeRounded = roundSubs(accounts_active);
  return (
    <div className="sidebar post-sidebar" data-testid="sidebar">
      <aside className="aside-subreddit">
        <header
          role="banner"
          className="aside-header"
          data-testid="aside-header"
        >
          <span>About Community</span>
          <Link
            data-testid="subreddit-link"
            to="/subreddit"
            onClick={handleClick}
          >
            <h2>{display_name_prefixed}</h2>
          </Link>
        </header>
        <div className="aside-information" data-testid="aside-information">
          <ReactMarkdown className="aside-description">
            {public_description}
          </ReactMarkdown>

          <div className="aside-member-info">
            <div className="aside-member-count">
              <div className="aside-count">{subscribersRounded}</div>
              <p className="aside-members">Members</p>
            </div>
            <div className="aside-active-members">
              <div className="aside-count">{activeRounded}</div>
              <p className="aside-members">Online</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PostAside;
