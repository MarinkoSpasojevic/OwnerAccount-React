import * as actionTypes from './actionTypes';
import axios from '../../Axios/axios';

const getDataArraySuccess = (dataArray) => {
    return {
        type: actionTypes.GET_DATA_ARRAY_SUCCESS,
        dataArray: dataArray
    }
}

export const getDataArray = (url, props) => {
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            dispatch(getDataArraySuccess(response.data));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const getDataObjectSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_OBJECT_SUCCESS,
        dataObject: data
    }
}

export const getDataObject = (url, props) => {
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            dispatch(getDataObjectSuccess(response.data));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}

export const postData = (url, obj, props) => {
    return (dispatch) => {
        axios.post(url, obj)
        .then(response => {
            dispatch(postDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}

export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}

export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}