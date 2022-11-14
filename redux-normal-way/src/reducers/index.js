import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
})

export default allReducers