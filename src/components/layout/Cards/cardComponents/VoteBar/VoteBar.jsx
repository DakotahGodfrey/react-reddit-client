import React from "react";

const VoteBar = () => {
  return (
    <div className="post-vote-control">
      <button>
        <i className="material-icons">arrow_upward</i>
      </button>
      <button>
        <i className="material-icons">arrow_downward</i>
      </button>
    </div>
  );
};

export default VoteBar;
