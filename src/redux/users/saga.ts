import { put, call } from "redux-saga/effects";

import { setUsersSuccess, setUsersError } from "../users/slice";
import { fetchUserData } from "../../api/requests";

const FETCH_USERS_SUCCESS_ACTION = setUsersSuccess.type;
const FETCH_USERS_ERROR_ACTION = setUsersError.type;

export function* getUsers() {
  try {
    const users: unknown[] = yield call(fetchUserData);
    yield put({ type: FETCH_USERS_SUCCESS_ACTION, payload: users });
  } catch (err: any) {
    yield put({ type: FETCH_USERS_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}
