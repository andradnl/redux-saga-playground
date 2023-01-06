import { takeEvery, takeLatest } from "redux-saga/effects";

import { fetchUsersData } from "./users/slice";
import { fetchPostsData } from "./posts/slice";
import { getPosts } from "./posts/saga";
import { getUsers } from "./users/saga";

const FETCH_USERS_ACTION = fetchUsersData.type;
const FETCH_POSTS_ACTION = fetchPostsData.type;

export default function* rootSaga() {
  yield takeEvery(FETCH_USERS_ACTION, getUsers);
  yield takeLatest(FETCH_POSTS_ACTION, getPosts);
}
