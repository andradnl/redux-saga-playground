import { call, put, spawn } from "redux-saga/effects";

import { fetchTodos } from "../../api/requests";
import { successfulFetch } from "./slice";

const SUCCESSFUL_FETCH_ACTION = successfulFetch.type;

export function* spawnSaga() {
  yield console.log("Parent saga has begun executing");
  yield spawn(countTo5);
  yield console.log("Parent begins fetching data");
  yield call(fetchData);
  yield console.log("Parent saga has finished executing");
}

function* fetchData(): unknown {
  yield call(fetchTodos);
  yield put({ type: SUCCESSFUL_FETCH_ACTION });
}

function countTo5() {
  console.log("Spawned saga has begun executing");
  let start = 1;
  const finish = 5;
  let timerId = setInterval(() => {
    console.log(start);
    if (start === finish) {
      clearInterval(timerId);
      console.log("Spawned saga has finished executing");
    }
    start++;
  }, 1000);
}
