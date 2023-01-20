import * as React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { fetch } from "../redux/raceAll/slice";

export const RaceAllExample = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavigationBar />
      <div style={{ marginTop: 16 }}>
        <Button label="Fetch surprise data" onClick={() => dispatch(fetch())} />
      </div>
    </>
  );
};
