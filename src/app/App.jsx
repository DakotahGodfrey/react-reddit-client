import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Post from "../components/pages/Post/Post";
import Subreddit from "../components/pages/Subreddit/Subreddit";
import Results from "../components/pages/Results/Results";
import NotFound from "../components/layout/NotFound/NotFound";
import Bookmarks from "../components/pages/Bookmarks/Bookmarks";
function App() {
  return (
    <div className="App" id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/subreddit" component={Subreddit} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
