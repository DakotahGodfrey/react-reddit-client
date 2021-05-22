import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ResultsBanner from "../../layout/Results/ResultsBanner/ResultsBanner";
import SubredditResults from "../../layout/Results/SubredditResults/SubredditResults";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  selectDarkMode,
  selectResults,
  selectStatus,
  selectTerm,
} from "../features/Searchbar/searchbarSlice";
import PostResults from "../../layout/Results/PostResults/PostResults";
import Loading from "../../layout/Loading/Loading";
const Results = () => {
  useEffect(() => {
    document.title = `Results | ${term ? term : null}`;
  });
  const results = useSelector(selectResults);
  const term = useSelector(selectTerm);
  const status = useSelector(selectStatus);
  const subredditsArray = results[0] ? results[0].data.children : [];
  const postsArray = results[1] ? results[1].data.children : [];
  const resultNum = subredditsArray.length + postsArray.length;
  const dark = useSelector(selectDarkMode);
  return (
    <main className={dark ? "page dark" : "page"}>
      <Navbar />
      <ResultsBanner term={term} resultNum={resultNum} status={status} />
      <section className="page-content results" data-testid="feed">
        {status === "pending" ? (
          <Loading />
        ) : resultNum === 0 ? null : (
          <div className="results-wrapper">
            <article className="results-subreddits">
              <SubredditResults subredditsArray={subredditsArray} />
            </article>
            <article className="results-posts">
              <PostResults postsArray={postsArray} />
            </article>
          </div>
        )}
      </section>
    </main>
  );
};

export default Results;
