import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { selectFork, runFork, runFailingFork } from "../redux/fork/slice";

export const ForkExample = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(selectFork);

  const [showObservations, setShowObservations] = React.useState(false);

  return (
    <>
      <NavigationBar />
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}
      >
        <div className="title-section">
          <h1>Fork example</h1>
          <Button
            label={`${showObservations ? "Hide" : "Show"} observations`}
            onClick={() => setShowObservations(!showObservations)}
          />
        </div>
        {showObservations && <ObservationsSection />}
        <div className="content">
          <Button
            onClick={() => dispatch(runFork())}
            label="Initiate successful example"
          />
          <Button
            onClick={() => dispatch(runFailingFork())}
            label="Initiate failing example"
          />
        </div>
        {loading && <p>Saga is being executed</p>}
        {error && <p>{error}</p>}
        {success && <p>Saga has finished successfully</p>}
      </div>
    </>
  );
};

const ObservationsSection = () => (
  <div className="observations">
    <p>
      In the first example, the saga successfully finishes its execution. It
      waits for each of its 3 forked tasks to finish, before completing its own
      execution.
    </p>
    <p>
      In the second example, the first forked task is trying to make an invalid
      API call. The second task makes a valid API call and is the first task
      that resolves (approx. 2.03s on a slow network). The first task resolves
      shortly after (approx. 2.06s on a slow network), but throws an error. As
      such, the third forked task never gets to execute, because the parent saga
      terminates once it receives the error from its first forked task.
    </p>
  </div>
);
