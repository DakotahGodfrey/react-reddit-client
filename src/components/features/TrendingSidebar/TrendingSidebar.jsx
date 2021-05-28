import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../Searchbar/searchbarSlice";
import TrendingSubsList from "../../layout/Lists/TrendingSubreddits/TrendingSubsList/TrendingSubsList";
import {
  getTrendingSubreddits,
  selectTrendingSidebar,
} from "./trendingSidebarSlice";

const TrendingSidebar = () => {
  const dispatch = useDispatch();
  const dark = useSelector(selectDarkMode);
  useEffect(() => {
    dispatch(getTrendingSubreddits());
  }, [dispatch]);
  const trendingSideBar = useSelector(selectTrendingSidebar);
  const { trendingSubreddits } = trendingSideBar;
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

export default TrendingSidebar;
