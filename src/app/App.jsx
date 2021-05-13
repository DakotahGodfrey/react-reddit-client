import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Trending from "../features/trending_row/Trending";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Trending />
    </div>
  );
}

export default App;
