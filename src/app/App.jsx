import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Post from "../components/pages/Post/Post";
import Subreddit from "../components/pages/Subreddit/Subreddit";
import Results from "../components/pages/Results/Results";
import NotFound from "../components/layout/NotFound/NotFound";
import Bookmarks from "../components/pages/Bookmarks/Bookmarks";
import Hot from "../components/pages/Hot/Hot";
import Top from "../components/pages/Top/Top";
import New from "../components/pages/New/New";
import Contact from "../components/pages/Contact/Contact";
import SiteFooter from "../components/layout/SiteFooter/SiteFooter";
function App() {
  return (
    <div className="App" id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/r/:display_name/" component={Subreddit} />
          <Route path="/r/:subreddit/post/:id" component={Post} />
          <Route exact path="/r/:currentSubreddit/hot" component={Hot} />
          <Route exact path="/r/:currentSubreddit/top" component={Top} />
          <Route exact path="/r/:currentSubreddit/new" component={New} />
          <Route path="/results" component={Results} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <SiteFooter />
    </div>
  );
}

export default App;
