import React from "react";
import { useSelector } from "react-redux";
import ResultsBanner from "../../layout/Results/ResultsBanner/ResultsBanner";
import SubredditResults from "../../layout/Results/SubredditResults/SubredditResults";
import Navbar from "../features/Searchbar/Navbar/Navbar";
import {
  selectResults,
  selectStatus,
  selectTerm,
} from "../features/Searchbar/searchbarSlice";
import PostResults from "../../layout/Results/PostResults/PostResults";
import Loading from "../../layout/Loading/Loading";
const Results = () => {
  const results = useSelector(selectResults);
  const term = useSelector(selectTerm);
  const status = useSelector(selectStatus);
  const subredditsArray = results[0].data.children;
  const postsArray = results[1].data.children;
  const resultNum = subredditsArray.length + postsArray.length;
  return (
    <main className="page">
      <Navbar />
      <ResultsBanner term={term} resultNum={resultNum} />
      <section className="page-content results" data-testid="feed">
        {status === "pending" ? (
          <Loading />
        ) : (
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
