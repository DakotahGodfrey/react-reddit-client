import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../pages/features/Searchbar/searchbarSlice";
const Toolbar = ({
  handleNewClick,
  handleTopClick,
  handleHotClick,
  handleAllClick,
  handleYearClick,
  handleMonthClick,
  handleDayClick,
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
          data-testid="hot"
        >
          Hot{" "}
          <i className="material-icons" aria-hidden="true">
            whatshot
          </i>
        </button>
        <select
          className={
            filter === "top" ? "filter-option top current" : "filter-option top"
          }
          onClick={handleTopClick}
          data-testid="combobox"
        >
          Top
          <option
            className="option"
            data-testid="all-time"
            onClick={handleAllClick}
          >
            All time
          </option>
          <option
            className="option"
            data-testid="year"
            onClick={handleYearClick}
          >
            Past year
          </option>
          <option
            className="option"
            data-testid="month"
            onClick={handleMonthClick}
          >
            This month
          </option>
          <option className="option" data-testid="day" onClick={handleDayClick}>
            Today
          </option>
        </select>
        <button
          className={
            filter === "new" ? "filter-option current" : "filter-option"
          }
          onClick={handleNewClick}
          data-testid="new"
        >
          New{" "}
          <i aria-hidden="true" className="material-icons">
            new_releases
          </i>
        </button>
      </div>
    </nav>
  );
};

export default Toolbar;
