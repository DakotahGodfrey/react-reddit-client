import React from "react";
const ResultsBanner = ({ term, resultNum, status }) => {
  return (
    <header className="results-display" aria-live="assertive">
      <span style={{ display: "block" }} className="results-term">
        Query: {term}
      </span>
      {status === "pending" ? (
        <span className="results-count">Searching...</span>
      ) : (
        <span className="results-count">
          {resultNum > 0
            ? `Results: ${resultNum}`
            : "No results found, try narrowing your search"}
        </span>
      )}
    </header>
  );
};

export default ResultsBanner;
