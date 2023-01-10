import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import rootSaga from "./rootSaga";
import { userSlice } from "./users/slice";
import { postsSlice } from "./posts/slice";
import { forkSlice } from "./fork/slice";

const rootReducer = combineReducers({
  users: userSlice.reducer,
  posts: postsSlice.reducer,
  fork: forkSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
