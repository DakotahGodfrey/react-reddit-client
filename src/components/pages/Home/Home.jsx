import React, { useEffect } from "react";
import Aside from "../../../components/layout/sidebar/Aside/Aside";
import Feed from "../features/Feed/Feed";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  fetchNextPagePopular,
  getPopularPosts,
  getTrending,
  getTrendingSubreddits,
  selectHome,
  setFilter,
  setMenuHidden,
  setTime,
} from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../features/Searchbar/searchbarSlice";
import WorldNewsCarousel from "../../layout/Carousels/WorldNews/WorldNewsCarousel";
const Home = () => {
  const dark = useSelector(selectDarkMode);
  const home = useSelector(selectHome);
  const {
    posts,
    trendingItems,
    currentSubreddit,
    errors,
    trendingSubreddits,
    status,
    paginationId,
    filter,
    menuHidden,
    time,
  } = home;

  const dispatch = useDispatch();
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
      filter: filter,
      time: time,
    };
    dispatch(fetchNextPagePopular(action));
  };
  const handleNewClick = () => {
    dispatch(setFilter("new"));
  };
  const handleTopClick = () => {
    dispatch(setFilter("top"));
    dispatch(setMenuHidden());
  };
  const handleHotClick = () => {
    dispatch(setFilter("hot"));
  };
  const handleAllClick = () => {
    dispatch(setTime("all"));
  };
  const handleYearClick = () => {
    dispatch(setTime("year"));
  };
  const handleMonthClick = () => {
    dispatch(setTime("month"));
  };
  const handleDayClick = () => {
    dispatch(setTime("day"));
  };
  useEffect(() => {
    document.title = "Home | Core for Reddit";
    const action = {
      filter: filter,
      time: time,
    };
    dispatch(getPopularPosts(action));
    dispatch(getTrending());
    dispatch(getTrendingSubreddits());
  }, [dispatch, filter, time]);

  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <header className="carousel" data-testid="carousel">
        <WorldNewsCarousel trendingItems={trendingItems} />
      </header>
      <section className="page-content" data-testid="feed">
        <div className="page-wrapper" data-testid="feed-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed
              posts={posts}
              currentSubreddit={currentSubreddit}
              handleLoadMoreClick={handleLoadMoreClick}
              handleNewClick={handleNewClick}
              handleTopClick={handleTopClick}
              filter={filter}
              handleHotClick={handleHotClick}
              menuHidden={menuHidden}
              handleAllClick={handleAllClick}
              handleYearClick={handleYearClick}
              handleMonthClick={handleMonthClick}
              handleDayClick={handleDayClick}
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Home;
