import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFork, runFork } from "../redux/fork/slice";

export const ForkExample = () => {
  const dispatch = useDispatch();
  const {
    fork: { loading, error, success },
  } = useSelector(selectFork);

  React.useEffect(() => {
    dispatch(runFork());
  }, []);

  return (
    <div>
      <h1>Fork example</h1>
      {loading && <p>Saga is being executed</p>}
      {error && <p>{error}</p>}
      {success && <p>Saga has finished successfully</p>}
    </div>
  );
};
