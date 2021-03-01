import { combineReducers } from "redux";
//import reducers
import { todoReducer } from "./todoReducer";

export const rootReducers = combineReducers({
  todoReducer,
});
