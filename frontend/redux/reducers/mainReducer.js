import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import listReducer from "../reducers/listReducer";

const mainReducer=combineReducers({
    userReducer,
    listReducer
})
export default mainReducer;