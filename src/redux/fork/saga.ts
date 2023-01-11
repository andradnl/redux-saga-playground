import { call, delay, fork, put, takeLatest } from "redux-saga/effects";

import { fetchResource } from "../../api/requests";
import {
  runFork,
  runFailingFork,
  setSuccess,
  setLoading,
  setError,
} from "../../redux/fork/slice";

const FORK_SUCCESS_ACTION = setSuccess.type;
const FORK_LOADING_ACTION = setLoading.type;
const FORK_ERROR_ACTION = setError.type;
const RUN_FORK_ACTION = runFork.type;
const RUN_FAILING_FORK_ACTION = runFailingFork.type;

function* forkTasks() {
  yield put({ type: FORK_LOADING_ACTION });
  yield fork(fetchData, "users");
  console.log("task 1, fetch users");
  yield fork(fetchData, "posts");
  console.log("task 2, fetch posts");
  yield delay(3000);
  console.log("task 3, delay");
  yield console.log("Saga finished");
  yield put({ type: FORK_SUCCESS_ACTION });
}

function* forkTasksWithFailure() {
  yield put({ type: FORK_LOADING_ACTION });
  yield fork(fetchData, "nonexistent-resource");
  console.log("task 1, fetch nonexistent-resource");
  yield fork(fetchData, "posts");
  console.log("task 2, fetch posts");
  yield delay(3000);
  console.log("task 3, delay");
  yield console.log("Saga finished");
}

function* fetchData(resource: "posts" | "users" | string): unknown {
  const response = yield call(fetchResource, resource);
  if (!Array.isArray(response)) {
    yield put({
      type: FORK_ERROR_ACTION,
      payload: "An error has occured while executing saga",
    });

    throw new Error("invalid response");
  } else {
  }
}

export function* forkSaga() {
  yield takeLatest(RUN_FORK_ACTION, forkTasks);
  yield takeLatest(RUN_FAILING_FORK_ACTION, forkTasksWithFailure);
}
