import { call, delay, fork, put, takeLatest } from "redux-saga/effects";

import { fetchResource } from "../../api/requests";
import {
  runFork,
  setSuccess,
  setLoading,
  setError,
} from "../../redux/fork/slice";

const FORK_SUCCESS_ACTION = setSuccess.type;
const FORK_LOADING_ACTION = setLoading.type;
const FORK_ERROR_ACTION = setError.type;
const RUN_FORK_ACTION = runFork.type;

function* forkTasks() {
  yield put({ type: FORK_LOADING_ACTION });
  // yield fork(fetchData, "users");
  yield fork(fetchData, "usersss");
  console.log("task 1, fetch users");
  yield fork(fetchData, "posts");
  console.log("task 2, fetch posts");
  yield delay(3000);
  console.log("task 3, delay");
  yield console.log("Saga finished");
  yield put({ type: FORK_SUCCESS_ACTION });
}

function* fetchData(resource: "posts" | "users" | string): unknown {
  const response = yield call(fetchResource, resource);
  if (!Array.isArray(response)) {
    yield put({
      type: FORK_ERROR_ACTION,
      payload: "An error has occured while executing saga",
    });

    throw new Error("invalid response");
  }
}

export function* forkSaga() {
  yield takeLatest(RUN_FORK_ACTION, forkTasks);
}
