import * as React from "react";
import { useDispatch } from "react-redux";

import { Card } from "../components/Card";
import { fetchData } from "../redux/userSlice";

export const EveryLatestExample = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "0 16px" }}>
      <h1>takeEvery vs. takeLatest</h1>
      <div style={{ display: "flex", width: "100%", gap: 16 }}>
        <Card title="Example 1" titleBackground="lightblue">
          <p>Some content</p>
          <button onClick={() => dispatch(fetchData())}>Fetch users</button>
        </Card>
        <Card title="Example 2" titleBackground="lightgreen">
          <p>Some other content</p>
        </Card>
      </div>
    </div>
  );
};
