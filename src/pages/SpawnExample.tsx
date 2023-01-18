import * as React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { init } from "../redux/spawn/slice";

export const SpawnExample = () => {
  const [showObservations, setShowObservations] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <NavigationBar />
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}
      >
        <div className="title-section">
          <h1>Spawn example</h1>
          <Button
            label={`${showObservations ? "Hide" : "Show"} observations`}
            onClick={() => setShowObservations(!showObservations)}
          />
        </div>
        {showObservations && <ObservationsSection />}
        <div className="content">
          <Button
            onClick={() => dispatch(init())}
            label="Trigger spawn example"
          />
        </div>
      </div>
    </>
  );
};

const ObservationsSection = () => (
  <div className="observations">
    <p>
      A task spawned within a (parent) saga has an execution context independent
      of that of the parent which spawned it. The spawned task is detached
      (unlike a forked task, which is attached), and its execution or completion
      does not influence the parent saga.
    </p>
    <p>
      In this example, the parent saga does not wait for the completion of the
      spawned task, but instead finishes executing its own body of instructions
      first.
    </p>
  </div>
);
