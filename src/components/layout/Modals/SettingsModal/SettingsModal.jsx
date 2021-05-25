import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../pages/features/Searchbar/searchbarSlice";
const SettingsModal = ({ show, handleClick, handleDarkToggle }) => {
  const dark = useSelector(selectDarkMode);
  if (!show) {
    return null;
  }
  return (
    <article
      role="dialog"
      aria-labelledby="modal-title"
      className={dark ? "settings-modal dark" : "settings-modal"}
    >
      <div className="modal-content" data-testid="modal-content">
        <header className="modal-header" data-testid="modal-header">
          <h3 id="modal-title">Settings</h3>
        </header>
        <div className="modal-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label htmlFor="dark-mode">
                {!dark ? "Dark Mode" : "Light Mode"}
              </label>
              <input
                type="checkbox"
                aria-label="toggle theme"
                onClick={handleDarkToggle}
                name="dark-mode"
                id="dark-mode"
              />
              <i
                aria-hidden="true"
                className={dark ? "material-icons hide" : "material-icons"}
              >
                nights_stay
              </i>
              <i
                aria-hidden="true"
                className={
                  !dark ? "material-icons hide" : "material-icons light"
                }
              >
                light_mode
              </i>
            </div>
          </form>
        </div>
        <footer className="modal-footer">
          <button onClick={handleClick} className="modal-close">
            Close
            <i aria-hidden="true" className="material-icons">
              close
            </i>
          </button>
        </footer>
      </div>
    </article>
  );
};

export default SettingsModal;
