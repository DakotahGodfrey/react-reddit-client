import React from "react";
import logo from "../../../../../assets/media/logoSmall.png";
import NavControls from "./navControls/NavControls";
import SearchInput from "./searchInput/SearchInput";
import { Link } from "react-router-dom";
import SettingsModal from "../../../../layout/Modals/SettingsModal/SettingsModal";
import {
  selectShowSettings,
  setShowSettings,
  setDarkMode,
  selectDarkMode,
} from "../searchbarSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const show = useSelector(selectShowSettings);
  const dark = useSelector(selectDarkMode);
  const handleClick = () => {
    dispatch(setShowSettings());
  };
  const handleDarkToggle = () => {
    dispatch(setDarkMode());
  };
  return (
    <nav className={dark ? "site-nav dark" : "site-nav"}>
      {/* Logo Goes Here */}
      <Link to="/" aria-label="home" data-testid="home-link">
        <figure className="logo">
          <img src={logo} alt="logo" />
        </figure>
      </Link>
      {/* Search Input Here */}
      <SearchInput />
      {/* navControls Here */}
      <NavControls handleClick={handleClick} />
      <SettingsModal
        show={show}
        handleClick={handleClick}
        handleDarkToggle={handleDarkToggle}
      />
    </nav>
  );
};

export default Navbar;
