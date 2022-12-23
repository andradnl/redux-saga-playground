import * as React from "react";

import { Card } from "../components/Card";

export const EveryLatestExample = () => {
  return (
    <div style={{ margin: "0 16px" }}>
      <h1>takeEvery vs. takeLatest</h1>
      <div style={{ display: "flex", width: "100%", gap: 16 }}>
        <Card title="Example 1" titleBackground="lightblue">
          <p>Some content</p>
        </Card>
        <Card title="Example 2" titleBackground="lightgreen">
          <p>Some other content</p>
        </Card>
      </div>
    </div>
  );
};
