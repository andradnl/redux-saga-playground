import * as React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { fetchRace, fetchAll } from "../redux/raceAll/slice";

export const RaceAllExample = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavigationBar />
      <div>
        <h1 style={{ margin: "32px 0", textAlign: "left" }}> race vs. all</h1>
        <div style={{ display: "flex", gap: 16 }}>
          <Button
            label="Fetch surprise data"
            onClick={() => dispatch(fetchRace())}
          />
          <Button label="Fetch all data" onClick={() => dispatch(fetchAll())} />
        </div>
      </div>
    </>
  );
};
