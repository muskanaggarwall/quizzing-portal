import { combineReducers } from "redux";
import { reducer } from "./Index";

export const rootreducer = combineReducers({ reducer: reducer });
