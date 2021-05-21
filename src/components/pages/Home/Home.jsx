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
  } = home;

  const dispatch = useDispatch();
  const handleLoadMoreClick = () => {
    const action = {
      nextPageId: paginationId,
      filter: filter,
    };
    dispatch(fetchNextPagePopular(action));
  };
  const handleNewClick = () => {
    dispatch(setFilter("new"));
  };
  const handleTopClick = () => {
    dispatch(setFilter("top"));
  };
  const handleHotClick = () => {
    dispatch(setFilter("hot"));
  };
  useEffect(() => {
    dispatch(getPopularPosts(filter));
    dispatch(getTrending());
    dispatch(getTrendingSubreddits());
  }, [dispatch, filter]);

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
              handleLoadMoreClick={handleLoadMoreClick}
              handleNewClick={handleNewClick}
              handleTopClick={handleTopClick}
              filter={filter}
              handleHotClick={handleHotClick}
            />
          )}
          <Aside trendingSubreddits={trendingSubreddits} />
        </div>
      </section>
    </main>
  );
};

export default Home;
