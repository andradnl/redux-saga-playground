import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFork, runFork, runFailingFork } from "../redux/fork/slice";

export const ForkExample = () => {
  const dispatch = useDispatch();

  const {
    fork: { loading, error, success },
  } = useSelector(selectFork);

  return (
    <div>
      <h1>Fork example</h1>
      <button onClick={() => dispatch(runFork())}>
        Initiate successful example
      </button>
      <button onClick={() => dispatch(runFailingFork())}>
        Initiate failing example
      </button>
      {loading && <p>Saga is being executed</p>}
      {error && <p>{error}</p>}
      {success && <p>Saga has finished successfully</p>}
    </div>
  );
};
