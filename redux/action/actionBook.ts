import ActionTypes from "./actionType";

export const doRequestGetBook = () => {
    return {
        type: ActionTypes.GET_BOOK
    }
}

export const doGetBookResponse = (payload: any) => {
    return {
        type: ActionTypes.GET_BOOK_RESPONSE,
        payload
    }
}

export const doAddBook = (payload: any) => {
    return {
        type: ActionTypes.ADD_BOOK,
        payload
    }
}

export const doAddBookResponse = (payload: any) => {
    return {
        type: ActionTypes.ADD_BOOK_RESPONSE,
        payload
    }
}

export const updateBook = (payload: any) => {
    return { type: ActionTypes.UPDATE_BOOK, payload }
}

export const updateBookResponse = (payload: any) => {
    return { type: ActionTypes.UPDATE_BOOK_RESPONSE, payload }
}

export const deleteBook = (payload: any) => {
    return {
        type: ActionTypes.DEL_BOOK,
        payload
    }
}

export const deleteBookResponse = (payload: any) => {
    return {
        type: ActionTypes.DEL_BOOK_RESPONSE,
        payload
    }
}