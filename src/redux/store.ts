import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import saga from "./saga";
import { userSlice } from "./userSlice";
import { postsSlice } from "./postsSlice";

const rootReducer = combineReducers({
  users: userSlice.reducer,
  posts: postsSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
