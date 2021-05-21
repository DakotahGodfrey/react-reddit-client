import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../pages/features/Searchbar/searchbarSlice";
import TrendingSubsList from "../../Lists/TrendingSubreddits/TrendingSubsList/TrendingSubsList";
import { Link } from "react-router-dom";
const Aside = ({ trendingSubreddits }) => {
  const dark = useSelector(selectDarkMode);
  return (
    <aside className={dark ? "sidebar dark" : "sidebar"}>
      <article className="aside-trending">
        <header role="banner" className="aside-header">
          <h2>Trending Communities</h2>
        </header>
        <TrendingSubsList trendingSubreddits={trendingSubreddits} />
      </article>
    </aside>
  );
};

export default Aside;
