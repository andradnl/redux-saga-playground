import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { selectFork, runFork, runFailingFork } from "../redux/fork/slice";

export const ForkExample = () => {
  const dispatch = useDispatch();

  const {
    fork: { loading, error, success },
  } = useSelector(selectFork);

  return (
    <>
      <NavigationBar />
      <div className="page-container">
        <h1>Fork example</h1>
        <div style={{ display: "flex", width: "100%", gap: 16 }}>
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
