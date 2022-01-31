import { combineReducers } from "redux";

import division from "./division";

const reducers = {
  division,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
