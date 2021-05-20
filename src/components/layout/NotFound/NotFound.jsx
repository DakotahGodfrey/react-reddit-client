import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../pages/features/Searchbar/searchbarSlice";
import ufo from "../../../assets/media/404ufo.svg";
import Navbar from "../../pages/features/Searchbar/Navbar/Navbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  const dark = useSelector(selectDarkMode);
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <div className="content">
        <header className="greeting">
          <h1>Uh Oh, page not found!</h1>
          <p>It looks like this page is lost in space!</p>
          <Link to="/">Return Home</Link>
        </header>
        <div className="ufoContainer">
          <img className="ufo" src={ufo} alt="decorative ufo 404 page image" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
