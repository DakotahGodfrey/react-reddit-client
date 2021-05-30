import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
import { Link } from "react-router-dom";
const Toolbar = ({ filter }) => {
  const dark = useSelector(selectDarkMode);
  return (
    <nav className={dark ? "toolbar dark" : "toolbar"}>
      <ul role="menu" className="filter-controls">
        <li role="menuitem">
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
        </li>
        <li role="menuitem">
          <Link
            className={
              filter === "top" ? "filter-option current" : "filter-option"
            }
            to="/top"
          >
            Top
            <i aria-hidden="true" className="material-icons">
              emoji_events
            </i>
          </Link>
        </li>
        <li role="menuitem">
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
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
