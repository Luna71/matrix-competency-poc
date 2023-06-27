import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reducers from "state"
import "./index.css";
import { configureStore } from "@reduxjs/toolkit/dist";

const container = document.getElementById("root");
const root = createRoot(container);
const store = configureStore({
  reducer: reducers
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
