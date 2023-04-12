import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProvider from "./routes/RouteProvider";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RoutesProvider />
  </React.StrictMode>
);
