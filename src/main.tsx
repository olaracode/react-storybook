import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProvider from "./routes/RouteProvider";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RoutesProvider />
  </React.StrictMode>
);
