import React from "react";
import { useHistory } from "react-router";

const TimeSelect = ({ timeQueryParam }) => {
  const history = useHistory();
  const handleClick = (time) => {
    history.push({ search: `?t=${time}` });
  };
  return (
    <nav aria-label="filter by time" className="time-select toolbar">
      <ul>
        <li>
          <button
            aria-label="today"
            onClick={() => handleClick("today")}
            className={timeQueryParam === "today" ? "current" : null}
          >
            Today
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("week")}
            className={timeQueryParam === "week" ? "current" : null}
          >
            Week
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("year")}
            className={timeQueryParam === "year" ? "current" : null}
          >
            Year
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("all")}
            className={timeQueryParam === "all" ? "current" : null}
          >
            Alltime
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TimeSelect;
