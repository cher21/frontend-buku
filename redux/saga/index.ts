import { takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
import { handleAddBook, handleDelBook, handleGetBook, handleUpdateBook } from "./bookSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_BOOK,handleGetBook),
        takeEvery(ActionTypes.ADD_BOOK,handleAddBook),
        takeEvery(ActionTypes.UPDATE_BOOK,handleUpdateBook),
        takeEvery(ActionTypes.DEL_BOOK,handleDelBook)
    ])
}

export default watchAll;