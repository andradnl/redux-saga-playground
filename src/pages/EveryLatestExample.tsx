import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { fetchPostsData, selectPosts } from "../redux/posts/slice";
import { fetchUsersData, selectUsers } from "../redux/users/slice";

export const EveryLatestExample = () => {
  const [showObservations, setShowObservations] = React.useState(false);

  return (
    <>
      <NavigationBar />
      <div className="page-container">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <h1>takeLatest vs. takeEvery</h1>
          <Button
            label={`${showObservations ? "Hide" : "Show"} observations`}
            onClick={() => setShowObservations(!showObservations)}
          />
        </div>
        {showObservations && <ObservationsSection />}
        <div style={{ display: "flex", width: "100%", gap: 16 }}>
          <UsersCard />
          <PostsCard />
        </div>
      </div>
    </>
  );
};

const ObservationsSection = () => (
  <div
    style={{
      borderRadius: 8,
      border: "1px solid lightgrey",
      width: "100%",
      padding: 16,
    }}
  >
    <p>When clicking the Fetch button multiple times in rapid succession:</p>
    <ul>
      <li>
        The UI is populated with user data retrieved by the last request made
        with takeLatest
      </li>
      <li>
        The UI is populated with posts data retrieved by the first request made
        with takeEvery
      </li>
    </ul>
  </div>
);

const UsersCard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectUsers);

  return (
    <Card title="takeLatest users">
      <Button onClick={() => dispatch(fetchUsersData())} label="Fetch users" />
      {loading && <p>Users loading...</p>}
      {data.length > 0 && !loading && (
        <ul>
          {data.map(({ name }: any) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

const PostsCard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectPosts);

  return (
    <Card title="takeEvery post">
      <Button onClick={() => dispatch(fetchPostsData())} label="Fetch posts" />
      {loading && <p>Posts loading</p>}
      {data.length > 0 && !loading && (
        <ul>
          {data.map(({ id, title }: any) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};
