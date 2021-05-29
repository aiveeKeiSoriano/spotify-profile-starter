import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";



let rootReducer = combineReducers({ auth: authReducer, user: userReducer })

let store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store