import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";
import "./assets/scss/index.scss";
import store, { persistor } from "./app/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
