import * as React from "react";

import { NavigationBar } from "../components/NavigationBar";

export const Home = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <div
        style={{
          marginTop: 32,
          display: "flex",
          gap: 32,
          flexDirection: "column",
        }}
      >
        <h1>Redux Saga playground</h1>
        <div
          style={{
            textAlign: "left",
            border: "1px solid lightgrey",
            borderRadius: 8,
            padding: "32px 32px 16px",
          }}
        >
          <h2>Context & purpose</h2>
          <p>
            In an attempt to get a better grasp of how Redux & Redux Saga work,
            this application acted as a playground in which different behaviours
            and simple functionalities were explored during the learning
            process. In parallel, questions and answers were gathered, starting
            from a general level then moving on into more details.
          </p>
        </div>
        <div
          style={{
            textAlign: "left",
            border: "1px solid lightgrey",
            borderRadius: 8,
            padding: "32px 32px 16px",
          }}
        >
          <h2>What you will find here</h2>
          <p>
            An initial simple example of a Redux store, with the functionality
            of adding and deleting FAQs, as well as examples of how different
            Redux Saga effect creators and combinators work. The observations
            made for each example are based on console outputs, with the Slow 3G
            setting active in the devtools network tab.
          </p>
        </div>
      </div>
    </div>
  );
};
