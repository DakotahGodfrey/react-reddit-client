import React from "react";

const SettingsModal = ({ show, handleClick, handleDarkToggle }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="settings-modal">
      <div className="modal-content">
        <header className="modal-header">
          <h3>Settings</h3>
        </header>
        <div className="modal-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label htmlFor="dark-mode">Toggle Dark Mode</label>
              <input
                type="checkbox"
                onClick={handleDarkToggle}
                name="dark-mode"
                id="dark-mode"
              />
            </div>
          </form>
        </div>
        <footer className="modal-footer">
          <button onClick={handleClick} className="modal-close">
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SettingsModal;
