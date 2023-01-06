import { Action } from "@reduxjs/toolkit";
import { take, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";

import { fetchUsersData } from "./users/slice";
import { fetchPostsData, getPost } from "./posts/slice";
import { getPosts, getIndividualPost } from "./posts/saga";
import { getUsers } from "./users/saga";
import { TakeableChannel } from "redux-saga";

const FETCH_USERS_ACTION = fetchUsersData.type;
const FETCH_POSTS_ACTION = fetchPostsData.type;
const FETCH_POST_ACTION = getPost.type as unknown as TakeableChannel<unknown>;

function* log(action: Action) {
  console.log("Action", action.type, "is being dispatched");
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS_ACTION, getPosts);
  yield takeLatest(FETCH_USERS_ACTION, getUsers);
  yield takeEvery("*", log);
  yield takeLeading(FETCH_POST_ACTION, getIndividualPost);
}
