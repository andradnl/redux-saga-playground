import { put, call } from "redux-saga/effects";

import {
  setPostsSuccess,
  setPostsError,
  setSelectedPostSuccess,
} from "../posts/slice";
import { fetchPost, fetchUserPosts } from "../../api/requests";

const FETCH_POSTS_SUCCESS_ACTION = setPostsSuccess.type;
const FETCH_POSTS_ERROR_ACTION = setPostsError.type;
const FETCH_POST_SUCCESS_ACTION = setSelectedPostSuccess.type;

export function* getPosts() {
  try {
    const posts: unknown[] = yield call(fetchUserPosts);
    yield put({ type: FETCH_POSTS_SUCCESS_ACTION, payload: posts });
    console.log("Store has been updated with posts");
  } catch (err: any) {
    yield put({ type: FETCH_POSTS_ERROR_ACTION, payload: err });
    throw new Error(err);
  }
}

export function* getIndividualPost({ payload }: any) {
  try {
    const post: unknown[] = yield call(fetchPost, payload);
    yield put({ type: FETCH_POST_SUCCESS_ACTION, payload: post });
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
}
