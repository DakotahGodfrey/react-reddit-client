import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
import ufo from "../../../assets/media/404ufo.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  const dark = useSelector(selectDarkMode);
  document.title = "404 | Not Found";
  return (
    <main className={dark ? "page dark" : "page"}>
      <div className="content" data-testid="content">
        <header className="greeting" data-testid="greeting">
          <h1>Uh Oh, page not found!</h1>
          <p>It looks like this page is lost in space!</p>
          <Link data-testid="home-link" to="/">
            Return Home
          </Link>
        </header>
        <div className="ufoContainer" data-testid="image-container">
          <img className="ufo" src={ufo} alt="cartoon ufo" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
