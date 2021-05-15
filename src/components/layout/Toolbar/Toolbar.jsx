import React from "react";

const Toolbar = () => {
  return (
    <nav className="toolbar">
      <div data-testid="filter-controls" className="filter-controls">
        <button className="filter-option">
          Hot <i className="material-icons">whatshot</i>
        </button>
        <button className="filter-option">
          Top <i className="material-icons">emoji_events</i>
        </button>
        <button className="filter-option">
          New <i className="material-icons">new_releases</i>
        </button>
      </div>
      <button className="toolbar-view">
        <i className="material-icons">view_list</i>
      </button>
    </nav>
  );
};

export default Toolbar;
