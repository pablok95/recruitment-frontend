import {combineReducers} from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'

import todosReducer from "./todos";

const rootReducer = combineReducers({
    todos: todosReducer,
    // 3td party library
    toastr: toastrReducer,
})

export default rootReducer