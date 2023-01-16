import * as React from "react";

import { NavigationBar } from "../components/NavigationBar";

export const Home = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <h1>Redux Saga playground</h1>
    </div>
  );
};
