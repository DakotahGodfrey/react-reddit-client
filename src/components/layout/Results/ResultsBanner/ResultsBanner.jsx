import React from "react";
const ResultsBanner = ({ term, resultNum }) => {
  console.log(resultNum);
  return (
    <header className="results-display">
      <h2 className="results-term">Query: {term}</h2>
      <span className="results-count">{resultNum} results</span>
    </header>
  );
};

export default ResultsBanner;
