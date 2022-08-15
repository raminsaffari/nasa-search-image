// Combine reducer together
import { combineReducers } from "redux";
import { imageReducer, selectedImageReducer, setQuery } from "./imageReducer";

const reducers = combineReducers({
    query: setQuery,
    allImages : imageReducer,
    image : selectedImageReducer,
})
export default reducers;