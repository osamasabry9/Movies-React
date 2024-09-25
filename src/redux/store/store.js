import { createStore, applyMiddleware } from "redux";
import { movieReducer } from "../reducer/movieReducer";
import  {thunk}  from "redux-thunk";


// 1- create store
export const store = createStore(movieReducer, applyMiddleware(thunk));