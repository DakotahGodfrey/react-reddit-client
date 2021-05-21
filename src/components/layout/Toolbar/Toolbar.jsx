import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../pages/features/Searchbar/searchbarSlice";
const Toolbar = ({
  handleNewClick,
  handleTopClick,
  handleHotClick,
  filter,
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
            filter === "top" ? "filter-option current" : "filter-option"
          }
          onClick={handleTopClick}
        >
          Top <i className="material-icons">emoji_events</i>
        </button>
        <button
          className={
            filter === "new" ? "filter-option current" : "filter-option"
          }
          onClick={handleNewClick}
        >
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
