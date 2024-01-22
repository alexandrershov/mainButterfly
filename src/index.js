import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import "./firebase.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
