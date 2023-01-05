import { takeEvery, put } from "redux-saga/effects";

// import { FETCH, FETCH_SUCCESS, FETCH_ERROR } from "./actions";
import { fetchData, setFetchSuccess, setFetchError } from "./userSlice";

const FETCH_DATA_ACTION = fetchData.type;
const FETCH_SUCCESS_ACTION = setFetchSuccess.type;
const FETCH_ERROR_ACTION = setFetchError.type;

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUserData() {
  const response = await fetch(USERS_URL).then((response) => response.json());
  return response;
}

function* fetchUsers() {
  try {
    const users = fetchUserData();
    yield put({ type: FETCH_SUCCESS_ACTION, payload: users });
  } catch (err: any) {
    yield put({ type: FETCH_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}

export default function* saga() {
  yield takeEvery(FETCH_DATA_ACTION, fetchUsers);
}
