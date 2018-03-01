import { combineReducers } from "redux";
import books from "./reducer_books";

const rootReducer = combineReducers({ books });

export default rootReducer;
