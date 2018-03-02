import { call, put, takeLatest, all } from "redux-saga/effects";

import { getPosts } from "./api";

export function* fetchPosts() {
  const data = yield call(getPosts);
  yield put({ type: "RECIVE_POSTS", payload: data.data });
}

export function* watchfetchPosts() {
  yield takeLatest("REQUEST_POSTS", fetchPosts);
}
export default function* rootSaga() {
  yield all([fetchPosts(), watchfetchPosts()]);
}
