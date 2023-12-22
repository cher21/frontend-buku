import ActionTypes from "../action/actionType";

const initialState = {
    books: [],
    message: null,
    refresh: "",
};

function bookReducers(state = initialState, action: any){
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.GET_BOOK_RESPONSE:
            return { ...state, books: payload, refresh: true };
        case ActionTypes.ADD_BOOK_RESPONSE:
            return { message: payload.message, refresh: false };
        case ActionTypes.UPDATE_BOOK_RESPONSE:
            return { message: payload.message, refresh: false };
        case ActionTypes.DEL_BOOK_RESPONSE:
            return { message: payload, refresh: false };
        default:
            return state;
    }
}

export default bookReducers;