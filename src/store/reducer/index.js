import { combineReducers } from "redux";
import { cart } from "./cart";
import { user } from "./user";

let rootReducer=combineReducers({
    cart,
    user
})

export  default rootReducer;