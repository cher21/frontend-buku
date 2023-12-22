import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";
import rootSaga from '../saga'
import bookReducers from "../reducer/bookReducers";

const logger = createLogger()
const saga = createSagaMiddleware();
const reducer = combineReducers({
    bookReducers,
});

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        .concat(logger)
        .concat(saga),
});
saga.run(rootSaga);

export default store;