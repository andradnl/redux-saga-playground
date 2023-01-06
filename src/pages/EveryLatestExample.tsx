import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { fetchPostsData, selectPosts } from "../redux/posts/slice";
import { fetchUsersData, selectUsers } from "../redux/users/slice";

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
        <Card title="Take latest users" titleBackground="lightblue">
          <button onClick={() => dispatch(fetchUsersData())}>
            Fetch users
          </button>
          {usersLoading && <p>Users loading...</p>}
          {users.length > 0 && !usersLoading && (
            <ul>
              {users.map(({ name }: any) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </Card>
        <Card title="Take every post" titleBackground="lightgreen">
          <button onClick={() => dispatch(fetchPostsData())}>
            Fetch posts
          </button>
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
  );
};
