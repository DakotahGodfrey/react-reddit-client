import React from "react";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
import { selectBookmarks } from "./bookmarksSlice";
import HomeCard from "../../layout/Cards/HomeCard/HomeCard";

const Bookmarks = () => {
  document.title = "Your Bookmarks";
  const dark = useSelector(selectDarkMode);
  const bookmarksState = useSelector(selectBookmarks);
  const { bookmarks } = bookmarksState;
  const bookmarked = true;
  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <section className="page-content" data-testid="feed">
        <div className="page-wrapper bookmarks" data-testid="feed-wrapper">
          <h1 className="bookmarks-header">Your Bookmarks</h1>
          {bookmarks.map((bookmark) => (
            <HomeCard post={bookmark.children[0]} bookmarked={bookmarked} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Bookmarks;
