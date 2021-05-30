import React from "react";
import logo from "../../../../assets/media/logoSmall.png";
import NavControls from "./navControls/NavControls";
import SearchInput from "./searchInput/SearchInput";
import { Link } from "react-router-dom";
import { setDarkMode, selectDarkMode } from "../searchbarSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = (isContact) => {
  const dispatch = useDispatch();
  const dark = useSelector(selectDarkMode);
  const handleDarkToggle = () => {
    dispatch(setDarkMode());
  };
  return (
    <nav className={dark ? "site-nav dark" : "site-nav"}>
      {/* Logo Goes Here */}
      <Link to="/" aria-label="home">
        <figure className="logo">
          <img src={logo} alt="logo" />
        </figure>
      </Link>
      {/* Search Input Here */}
      <SearchInput />
      {/* navControls Here */}
      <NavControls
        handleDarkToggle={handleDarkToggle}
        dark={dark}
        isContact={isContact}
      />
    </nav>
  );
};

export default Navbar;
