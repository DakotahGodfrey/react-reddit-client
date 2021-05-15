import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import { store } from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
