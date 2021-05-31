import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { roundSubs } from "../../../../assets/helpers/helpers";
const PostAside = ({ subredditDescription }) => {
  const {
    display_name_prefixed,
    public_description,
    display_name,
    subscribers,
    accounts_active,
  } = subredditDescription;

  const subscribersRounded = roundSubs(subscribers);
  const activeRounded = roundSubs(accounts_active);

  return (
    <div className="sidebar post-sidebar">
      <aside className="aside-subreddit">
        <header className="aside-header">
          <span>About Community</span>
          <Link className="subreddit-link" to={`/r/${display_name}`}>
            {display_name_prefixed}
          </Link>
        </header>
        <div className="aside-information">
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
