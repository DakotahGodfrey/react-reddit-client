import React, { useEffect } from "react";
import TrendingSidebar from "../../features/TrendingSidebar/TrendingSidebar";
import Feed from "../../features/Feed/Feed";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import {
  fetchNextPagePopular,
  getPopularPosts,
  getWorldNews,
  selectHome,
} from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../layout/Loading/Loading";
import { selectDarkMode } from "../../features/Searchbar/searchbarSlice";
import WorldNewsCarousel from "../../layout/Carousels/WorldNews/WorldNewsCarousel";

const Home = ({ match }) => {
  const dark = useSelector(selectDarkMode);
  const home = useSelector(selectHome);
  const { posts, trendingItems, errors, status, paginationId } = home;
  const dispatch = useDispatch();
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
    };
    dispatch(fetchNextPagePopular(action));
  };
  const path = match.path;
  useEffect(() => {
    document.title = "Home | Core for Reddit";
    dispatch(getPopularPosts());
    dispatch(getWorldNews());
  }, [dispatch]);
  const currentSubreddit = "popular";
  return (
    <main className={dark ? "dark page" : "page"}>
      <Navbar />
      <header className="carousel">
        <WorldNewsCarousel trendingItems={trendingItems} />
      </header>
      <section className="page-content">
        <div className="page-wrapper" data-testid="feed-wrapper">
          {errors ? (
            <p className="feed-error">Sorry, something went wrong</p>
          ) : status === "pending" ? (
            <Loading />
          ) : (
            <Feed
              posts={posts}
              handleLoadMoreClick={handleLoadMoreClick}
              currentSubreddit={currentSubreddit}
              path={path}
            />
          )}
          <TrendingSidebar />
        </div>
      </section>
    </main>
  );
};

export default Home;
