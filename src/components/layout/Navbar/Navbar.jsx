import React from "react";
import smallLogo from "../../assets/media/logoSmall.png";
import SearchInput from "./searchInput/SearchInput";
const Navbar = () => {
  return (
    <nav className="site-nav">
      {/* Logo Goes Here */}
      <figure className="logo">
        <img src={smallLogo} alt="reddit snoo logo" />
      </figure>
      <SearchInput />
      {/* Search Input Here */}
      {/* navToggles Here */}
    </nav>
  );
};

export default Navbar;
