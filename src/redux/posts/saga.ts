import { put, call } from "redux-saga/effects";

import { setPostsSuccess, setPostsError } from "../posts/slice";
import { fetchUserPosts } from "../../api/requests";

const FETCH_POSTS_SUCCESS_ACTION = setPostsSuccess.type;
const FETCH_POSTS_ERROR_ACTION = setPostsError.type;

export function* getPosts() {
  try {
    const posts: unknown[] = yield call(fetchUserPosts);
    yield put({ type: FETCH_POSTS_SUCCESS_ACTION, payload: posts });
  } catch (err: any) {
    yield put({ type: FETCH_POSTS_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}
