import { Action } from "@reduxjs/toolkit";
import { call, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";

import { fetchUsersData } from "./users/slice";
import { getUsers } from "./users/saga";
import { fetchPostsData, getPost } from "./posts/slice";
import { getPosts, getIndividualPost } from "./posts/saga";

import { forkSaga } from "./fork/saga";

const FETCH_USERS_ACTION = fetchUsersData.type;
const FETCH_POSTS_ACTION = fetchPostsData.type;
const FETCH_POST_ACTION = getPost.type;

function* log(action: Action) {
  console.log("Action", action.type, "is being dispatched");
  yield action.type;
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS_ACTION, getPosts);
  yield takeLatest(FETCH_USERS_ACTION, getUsers);
  yield takeEvery("*", log);
  yield takeLeading(FETCH_POST_ACTION, getIndividualPost);

  try {
    yield call(forkSaga);
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}

