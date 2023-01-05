import { takeEvery, put, call, takeLatest } from "redux-saga/effects";

import { fetchUsersData, setUsersSuccess, setUsersError } from "./userSlice";
import { fetchPostsData, setPostsSuccess, setPostsError } from "./postsSlice";
import { fetchUserData, fetchUserPosts } from "../api/requests";

const FETCH_USERS_ACTION = fetchUsersData.type;
const FETCH_USERS_SUCCESS_ACTION = setUsersSuccess.type;
const FETCH_USERS_ERROR_ACTION = setUsersError.type;

const FETCH_POSTS_ACTION = fetchPostsData.type;
const FETCH_POSTS_SUCCESS_ACTION = setPostsSuccess.type;
const FETCH_POSTS_ERROR_ACTION = setPostsError.type;

function* getUsers() {
  try {
    const users: unknown[] = yield call(fetchUserData);
    yield put({ type: FETCH_USERS_SUCCESS_ACTION, payload: users });
  } catch (err: any) {
    yield put({ type: FETCH_USERS_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}

function* getPosts() {
  try {
    const posts: unknown[] = yield call(fetchUserPosts);
    yield put({ type: FETCH_POSTS_SUCCESS_ACTION, payload: posts });
  } catch (err: any) {
    yield put({ type: FETCH_POSTS_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}

export default function* saga() {
  yield takeEvery(FETCH_USERS_ACTION, getUsers);
  yield takeLatest(FETCH_POSTS_ACTION, getPosts);
}
