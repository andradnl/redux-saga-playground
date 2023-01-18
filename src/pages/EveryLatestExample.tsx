import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { fetchPostsData, selectPosts } from "../redux/posts/slice";
import { fetchUsersData, selectUsers } from "../redux/users/slice";

export const EveryLatestExample = () => {
  return (
    <>
      <NavigationBar />
      <div className="page-container">
        <h1>takeEvery vs. takeLatest</h1>
        <div style={{ display: "flex", width: "100%", gap: 16 }}>
          <UsersCard />
          <PostsCard />
        </div>
      </div>
    </>
  );
};

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
