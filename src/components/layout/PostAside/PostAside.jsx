import React from "react";

const PostAside = () => {
  return (
    <div className="sidebar post-sidebar">
      <aside className="aside-subreddit">
        <header role="banner" className="aside-header">
          <span>About Community</span>
          <h2>r/politics</h2>
        </header>
        <div className="aside-information">
          <p>r/politics is for news and discussion about U.S. politics.</p>
          <div className="aside-member-info">
            <div className="aside-member-count">
              <div className="aside-count">7.5m</div>
              <p className="aside-members">members</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PostAside;
