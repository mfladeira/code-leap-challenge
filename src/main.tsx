import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
