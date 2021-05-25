import React from "react";

const Loading = () => {
  return (
    <div className="loading-container" data-testid="loading-container">
      <div className="circle-one" data-testid="circle-one"></div>
      <div className="circle-two" data-testid="circle-two"></div>
      <div className="circle-three" data-testid="circle-three"></div>
      <div className="circle-four" data-testid="circle-four"></div>
    </div>
  );
};

export default Loading;
