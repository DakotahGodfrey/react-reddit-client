import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../pages/features/Searchbar/searchbarSlice";
import { Link } from "react-router-dom";
const Toolbar = ({
  handleNewClick,
  handleTopClick,
  handleHotClick,
  handleAllClick,
  handleYearClick,
  handleMonthClick,
  handleDayClick,
  filter,
  menuHidden,
}) => {
  const dark = useSelector(selectDarkMode);
  return (
    <nav className={dark ? "toolbar dark" : "toolbar"}>
      <div data-testid="filter-controls" className="filter-controls">
        <button
          className={
            filter === "hot" ? "filter-option current" : "filter-option"
          }
          onClick={handleHotClick}
        >
          Hot <i className="material-icons">whatshot</i>
        </button>
        <button
          className={
            filter === "top" ? "filter-option top current" : "filter-option top"
          }
          onClick={handleTopClick}
        >
          Top <i className="material-icons">emoji_events</i>
          <div
            className={menuHidden ? "custom-select-hidden" : "custom-select"}
          >
            <button className="option" onClick={handleAllClick}>
              All time
            </button>
            <button className="option" onClick={handleYearClick}>
              Past year
            </button>
            <button className="option" onClick={handleMonthClick}>
              This month
            </button>
            <button className="option" onClick={handleDayClick}>
              Today
            </button>
          </div>
        </button>
        <button
          className={
            filter === "new" ? "filter-option current" : "filter-option"
          }
          onClick={handleNewClick}
        >
          New <i className="material-icons">new_releases</i>
        </button>
        <Link className="filter-option" to="/bookmarks">
          <i className="material-icons">bookmarks</i>
        </Link>
      </div>
    </nav>
  );
};

export default Toolbar;
