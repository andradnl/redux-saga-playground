import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux-saga/effects";

import { Card } from "../components/Card";
import { fetchPostsData, selectPosts } from "../redux/postsSlice";
import { fetchUsersData, selectUsers } from "../redux/userSlice";

export const EveryLatestExample = () => {
  const dispatch = useDispatch();

  const {
    users: { data: users, loading: usersLoading },
  } = useSelector(selectUsers);

  const {
    posts: { data: posts, loading: postsLoading },
  } = useSelector(selectPosts);

  return (
    <div style={{ margin: "0 16px" }}>
      <h1>takeEvery vs. takeLatest</h1>
      <div style={{ display: "flex", width: "100%", gap: 16 }}>
        <Card title="Example 1" titleBackground="lightblue">
          <button onClick={() => dispatch(fetchUsersData())}>
            Fetch users
          </button>
          {usersLoading && <p>Users loading...</p>}
          {users && (
            <ul>
              {users.map((user: any) => (
                <li>{user.name}</li>
              ))}
            </ul>
          )}
        </Card>
        <Card title="Example 2" titleBackground="lightgreen">
          <button onClick={() => dispatch(fetchPostsData())}>
            Fetch posts
          </button>
          {postsLoading && <p>Posts loading</p>}
          {posts && (
            <ul>
              {posts.map((post: any) => (
                <li>{post.title}</li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
};
