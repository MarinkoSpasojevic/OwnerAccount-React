import * as actionTypes from '../actions/actionTypes';

const initialState = {
    dataArray: [],
    dataObject: {},
    showSuccessModal: false
}

const executeGetDataArraySuccess = (state, action) => {
    return {
        ...state,
        dataArray: action.dataArray
    }
}

const executeGetDataObjectSuccess = (state, action) => {
    return {
        ...state,
        dataObject: action.dataObject
    }
}

const executePostDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executePutDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executeDeleteDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_ARRAY_SUCCESS:
            return executeGetDataArraySuccess(state, action);
        case actionTypes.GET_DATA_OBJECT_SUCCESS:
            return executeGetDataObjectSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;