import React from "react";
import logo from "../../../assets/media/logoSmall.png";
import NavControls from "./navControls/NavControls";
import SearchInput from "./searchInput/SearchInput";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="site-nav">
      {/* Logo Goes Here */}
      <Link to="/">
        <figure className="logo">
          <img src={logo} alt="logo" />
        </figure>
      </Link>
      {/* Search Input Here */}
      <SearchInput />
      {/* navControls Here */}
      <NavControls />
    </nav>
  );
};

export default Navbar;
