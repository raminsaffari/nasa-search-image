import { ActionTypes } from './../constans/action-types';
export const setImages = (images) => {
    return{
        type: ActionTypes.SET_IMAGES,
        payload: images,
    }
}

export const selectedImage = (image) => {
    return{
        type: ActionTypes.SELECTED_IMAGE,
        payload: image,
    }
}

export const removeSelectedImage = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_IMAGE,
    }
}
export const setQuery = (query) => {
    return{
        type: ActionTypes.SET_QUERY,
        payload: query
    }
}

