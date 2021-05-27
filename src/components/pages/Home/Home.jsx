import React, { useEffect } from "react";
import Aside from "../../../components/layout/sidebar/Aside/Aside";
import Feed from "../features/Feed/Feed";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  fetchNextPagePopular,
  getPopularPosts,
  getWorldNews,
  getTrendingSubreddits,
  selectHome,
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
    errors,
    trendingSubreddits,
    status,
    paginationId,
    filter,
    time,
  } = home;

  const dispatch = useDispatch();
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
    };
    dispatch(fetchNextPagePopular(action));
  };

  useEffect(() => {
    document.title = "Home | Core for Reddit";
    dispatch(getPopularPosts());
    dispatch(getWorldNews());
    dispatch(getTrendingSubreddits());
  }, [dispatch]);
  const currentSubreddit = "popular";
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
              handleLoadMoreClick={handleLoadMoreClick}
              filter={filter}
              currentSubreddit={currentSubreddit}
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Home;
