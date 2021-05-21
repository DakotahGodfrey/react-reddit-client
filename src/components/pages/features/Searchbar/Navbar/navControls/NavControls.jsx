import React from "react";
import { Link } from "react-router-dom";
const NavControls = ({ handleClick }) => {
  return (
    <div className="nav-controls" data-testid="nav-control-box">
      <button onClick={handleClick} data-testid="settings-button">
        <i className="material-icons">settings</i>
      </button>
      <Link to="/bookmarks">
        <i className="material-icons">bookmarks</i>
      </Link>
    </div>
  );
};

export default NavControls;
