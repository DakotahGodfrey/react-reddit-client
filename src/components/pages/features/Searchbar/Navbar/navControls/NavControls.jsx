import React from "react";

const NavControls = ({ handleClick }) => {
  return (
    <div className="nav-controls" data-testid="nav-control-box">
      <button onClick={handleClick} data-testid="settings-button">
        <i className="material-icons">settings</i>
      </button>
    </div>
  );
};

export default NavControls;
