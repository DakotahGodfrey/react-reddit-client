import React from "react";
import { Link } from "react-router-dom";
const NavControls = ({ handleDarkToggle, dark, isContact }) => {
  return (
    <div role="menu" className="nav-controls">
      <Link role="menuitem" to="/bookmarks">
        <i className="material-icons">bookmarks</i>
      </Link>
      <button onClick={handleDarkToggle}>
        <i className="material-icons">{dark ? "light_mode" : "nights_stay"}</i>
      </button>
      <Link to="/contact">
        <i className="material-icons">email</i>
      </Link>
    </div>
  );
};

export default NavControls;
