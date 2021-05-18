import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {
  fetchDestSubreddit,
  setCurrentSubreddit,
} from "../../../pages/Subreddit/subredditSlice";
import { useDispatch } from "react-redux";
const PostAside = ({ subredditData }) => {
  const dispatch = useDispatch();
  const {
    display_name_prefixed,
    public_description,
    display_name,
    subscribers,
    accounts_active,
  } = subredditData;
  const handleClick = () => {
    dispatch(setCurrentSubreddit(display_name));
    dispatch(fetchDestSubreddit(display_name));
  };
  const roundSubs = (subscribers) => {
    let roundedSubs;
    if (subscribers >= 1000000) {
      roundedSubs = Math.floor(subscribers / 1000000) + "m";
    } else if (subscribers >= 1000) {
      roundedSubs = Math.floor(subscribers / 1000) + "k";
    }
    return roundedSubs;
  };
  const subscribersRounded = roundSubs(subscribers);
  const activeRounded = roundSubs(accounts_active);
  return (
    <div className="sidebar post-sidebar">
      <aside className="aside-subreddit">
        <header role="banner" className="aside-header">
          <span>About Community</span>
          <Link to="/subreddit" onClick={handleClick}>
            <h2>{display_name_prefixed}</h2>
          </Link>
        </header>
        <div className="aside-information">
          <p className="aside-description">
            <ReactMarkdown>{public_description}</ReactMarkdown>
          </p>
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
