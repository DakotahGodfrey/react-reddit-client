import React from "react";
import smallLogo from "../../assets/media/logoSmall.png";
import NavControls from "./navControls/NavControls";
import SearchInput from "./searchInput/SearchInput";
const Navbar = () => {
  return (
    <nav className="site-nav">
      {/* Logo Goes Here */}
      <figure className="logo">
        <img src={smallLogo} alt="reddit snoo logo" />
      </figure>
      {/* Search Input Here */}
      <SearchInput />
      {/* navControls Here */}
      <NavControls />
    </nav>
  );
};

export default Navbar;
