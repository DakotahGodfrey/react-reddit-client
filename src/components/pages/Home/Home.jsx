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
} from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../features/Searchbar/searchbarSlice";
import CarouselCard from "../../layout/Cards/CarouselCard/CarouselCard/CarouselCard";
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
  } = home;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchNextPagePopular(paginationId));
  };
  useEffect(() => {
    dispatch(getPopularPosts());
    dispatch(getTrending());
    dispatch(getTrendingSubreddits());
  }, [dispatch]);

  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <header className="carousel">
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
              handleClick={handleClick}
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Home;
