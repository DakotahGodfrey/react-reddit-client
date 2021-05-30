import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultsBanner from "../../layout/Results/ResultsBanner/ResultsBanner";
import SubredditResults from "../../layout/Results/SubredditResults/SubredditResults";
import Navbar from "../../features/Searchbar/Navbar/Navbar";
import {
  searchByTerm,
  selectDarkMode,
  selectSearch,
} from "../../features/Searchbar/searchbarSlice";
import Loading from "../../layout/Loading/Loading";
import { useLocation } from "react-router";
import PostResults from "../../layout/Results/PostResults/PostResults";
const Results = () => {
  const search = useSelector(selectSearch);
  const { status, subredditResults, postResults } = search;
  const dark = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("search");
  const resultsTotal = subredditResults.length + postResults.length;

  useEffect(() => {
    dispatch(searchByTerm(params));
    document.title = `Results | ${params ? params : " "}`;
  }, [params, dispatch]);

  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <ResultsBanner
        term={params}
        status={status}
        resultsTotal={resultsTotal}
      />
      <section className="page-content results">
        {status === "pending" ? (
          <Loading />
        ) : (
          <div className="results-wrapper">
            <article className="results-subreddits">
              <SubredditResults subredditResults={subredditResults} />
            </article>
            <article className="results-posts">
              <PostResults postResults={postResults} />
            </article>
            <article className="results-posts"></article>
          </div>
        )}
      </section>
    </main>
  );
};

export default Results;
