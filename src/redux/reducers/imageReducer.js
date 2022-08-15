
import { ActionTypes } from '../constans/action-types';
const intialState  = {
    images: [],
}
const query = {
}
export const imageReducer = (state = intialState , {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_IMAGES:
            return {...state, images: payload}


        default:
            return state
    }
}

export const selectedImageReducer = (state = {} , {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_IMAGE:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_IMAGE:
            return {}
        default:
            return state
    }
}
export const setQuery = (state = query , {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_QUERY:
            return {...state, ...payload}

        default:
            return state
    }
}