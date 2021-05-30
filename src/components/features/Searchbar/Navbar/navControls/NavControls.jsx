import React from "react";
import { Link } from "react-router-dom";
const NavControls = ({ handleClick }) => {
  return (
    <div role="menu" className="nav-controls">
      <button onClick={handleClick}>
        <i className="material-icons">settings</i>
      </button>
      <Link role="menuitem" to="/bookmarks">
        <i className="material-icons">bookmarks</i>
      </Link>
    </div>
  );
};

export default NavControls;
