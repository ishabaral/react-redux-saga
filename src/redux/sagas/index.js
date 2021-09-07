import axios from "axios";
import { put, all, takeEvery } from "redux-saga/effects";
import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
} from "../actions/actionTypes";

function* fetchUsers() {
  const json = yield fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  yield put({ type: FETCH_USERS_SUCCESS, payload: json });
}

function* actionWatcher() {
  yield takeEvery(FETCH_USERS_LOADING, fetchUsers);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

// import axios from "axios";
// import { takeLatest, call, put } from "redux-saga/effects";
// import { FETCH_USERS_ERROR, FETCH_USERS_LOADING } from "./actions/actionTypes";

// export function* watcherSaga() {
//   yield takeLatest(FETCH_USERS_LOADING, workerSaga);
// }

// const fetchUsers = () => {
//   return axios({
//     method: "GET",
//     url: "http://jsonplaceholder.typicode.com/users",
//   });
// };

// function* workerSaga() {
//   //   console.log("Called Worker saga");
//   try {
//     const response = yield call(fetchUsers);
//     const users = response.data;
//     yield put({ type: FETCH_USERS_LOADING, users });
//     console.log(users);
//   } catch (error) {
//     yield put({ type: FETCH_USERS_ERROR, error });
//   }
// }
