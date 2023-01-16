import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { fetchPostsData, selectPosts } from "../redux/posts/slice";
import { fetchUsersData, selectUsers } from "../redux/users/slice";
import { NavigationBar } from "../components/NavigationBar";

export const EveryLatestExample = () => {
  const dispatch = useDispatch();

  const {
    users: { data: users, loading: usersLoading },
  } = useSelector(selectUsers);

  const {
    posts: { data: posts, loading: postsLoading },
  } = useSelector(selectPosts);

  return (
    <>
      <NavigationBar />
      <div className="page-container">
        <h1>takeEvery vs. takeLatest</h1>
        <div style={{ display: "flex", width: "100%" }}>
          <Card title="takeLatest users">
            <Button
              onClick={() => dispatch(fetchUsersData())}
              label="Fetch users"
            />

            {usersLoading && <p>Users loading...</p>}
            {users.length > 0 && !usersLoading && (
              <ul>
                {users.map(({ name }: any) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            )}
          </Card>
          <Card title="takeEvery post">
            <Button
              onClick={() => dispatch(fetchPostsData())}
              label="Fetch posts"
            />
            {postsLoading && <p>Posts loading</p>}
            {posts.length > 0 && !postsLoading && (
              <ul>
                {posts.map(({ id, title }: any) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};
