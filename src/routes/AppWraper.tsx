import React from "react";
import Layout from "../components/layout/Layout";
import { StoreProvider } from "../store/StoreProvider";
const AppWraper = () => {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};

export default AppWraper;
