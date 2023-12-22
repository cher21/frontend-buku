import { call, put } from "redux-saga/effects";
import ApiMethod from "@/api/apiMethod";
import { deleteBookResponse, doAddBookResponse, doGetBookResponse, updateBookResponse } from "../action/actionBook";

function* handleGetBook() : any {
    try {
        const result = yield call(ApiMethod.getBook);
        yield put(doGetBookResponse(result.data))
    }
    catch (error) {
        yield put(doGetBookResponse({ message: error }))
    }
}

function* handleAddBook(action: any): any {
    try {
        const result = yield call(ApiMethod.addBook, action.payload);
        yield put(doAddBookResponse(result.data))
    }
    catch (error: any) {
        yield put(doAddBookResponse({ message: error }))
    }
}

function* handleUpdateBook(action: any): any {
    try {
        const result: any = yield call(
            ApiMethod.updateBook,
            action.payload.id,
            action.payload.result
        );
        yield put(updateBookResponse(result.data.message));
    }
    catch (error: any){
        yield put(updateBookResponse(error))
    }
}

function* handleDelBook(action: any): any {
    try {
        const result = yield call(ApiMethod.deleteBook, action.payload);
        yield put(deleteBookResponse(result.data))
    }
    catch (error) {
        yield put(deleteBookResponse({error}))
    }
}

export { handleGetBook, handleAddBook, handleUpdateBook, handleDelBook }