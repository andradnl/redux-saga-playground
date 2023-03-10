import { Action } from "@reduxjs/toolkit";
import { call, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";

import { fetchUsersData } from "./users/slice";
import { fetchPostsData, getPost } from "./posts/slice";
import { init } from "./spawn/slice";
import { fetchAll, fetchRace } from "./raceAll/slice";

import { getUsers } from "./users/saga";
import { getPosts, getIndividualPost } from "./posts/saga";
import { forkSaga } from "./fork/saga";
import { spawnSaga } from "./spawn/saga";
import { allSaga, raceSaga } from "./raceAll/saga";

const FETCH_USERS_ACTION = fetchUsersData.type;
const FETCH_POSTS_ACTION = fetchPostsData.type;
const FETCH_POST_ACTION = getPost.type;
const INIT_SPAWN_TASK_ACTION = init.type;
const INIT_RACE_ACTION = fetchRace.type;
const INIT_ALL_ACTION = fetchAll.type;

function* log(action: Action) {
  console.log("Action", action.type, "is being dispatched");
  yield action.type;
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS_ACTION, getPosts);
  yield takeLatest(FETCH_USERS_ACTION, getUsers);
  yield takeEvery("*", log);
  yield takeLeading(FETCH_POST_ACTION, getIndividualPost);
  yield takeLatest(INIT_SPAWN_TASK_ACTION, spawnSaga);
  yield takeLatest(INIT_RACE_ACTION, raceSaga);
  yield takeLatest(INIT_ALL_ACTION, allSaga);

  try {
    yield call(forkSaga);
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }
}

