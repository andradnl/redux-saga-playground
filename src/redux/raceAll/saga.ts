import { all, call, race } from "redux-saga/effects";

import { fetchUserData, fetchTodos, fetchResource } from "../../api/requests";

function* users(): unknown {
  yield fetchUserData();
  console.log("Users first");
}

function* posts(): unknown {
  yield fetchResource("posts");
  console.log("Posts first");
}

function* todos(): unknown {
  yield fetchTodos();
  console.log("Todos first");
}

export function* raceSaga(): unknown {
  yield race([call(todos), call(users), call(posts)]);
}

export function* allSaga(): unknown {
  yield all([call(todos), call(users), call(posts)]);
}
