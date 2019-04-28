
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import LoginDetails from "./reducers/LoginDetails";
import ShortSell from "./reducers/ShortSell";



const rootReducer = combineReducers({
    LoginDetails,
    ShortSell
});

export default createStore(rootReducer, applyMiddleware(thunk));