import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { rootReducers } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
