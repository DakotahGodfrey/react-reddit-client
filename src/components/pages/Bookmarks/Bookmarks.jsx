import React from "react";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../features/Searchbar/searchbarSlice";

const Bookmarks = () => {
  const dark = useSelector(selectDarkMode);
  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <section className="page-content" data-testid="feed">
        <div className="page-wrapper" data-testid="feed-wrapper"></div>
      </section>
    </main>
  );
};

export default Bookmarks;
