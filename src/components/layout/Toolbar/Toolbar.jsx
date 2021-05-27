import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../pages/features/Searchbar/searchbarSlice";
import { Link } from "react-router-dom";
const Toolbar = ({ filter }) => {
  const dark = useSelector(selectDarkMode);
  return (
    <nav className={dark ? "toolbar dark" : "toolbar"}>
      <div data-testid="filter-controls" className="filter-controls">
        <Link
          to="/hot"
          className={
            filter === "hot" ? "filter-option current" : "filter-option"
          }
        >
          Hot
          <i className="material-icons" aria-hidden="true">
            whatshot
          </i>
        </Link>
        <Link
          className={
            filter === "top" ? "filter-option current" : "filter-option"
          }
          to="/top"
        >
          Top
          <i className="material-icons">emoji_events</i>
        </Link>
        <Link
          to="/new"
          className={
            filter === "new" ? "filter-option current" : "filter-option"
          }
          data-testid="new"
        >
          New{" "}
          <i aria-hidden="true" className="material-icons">
            new_releases
          </i>
        </Link>
      </div>
    </nav>
  );
};

export default Toolbar;
