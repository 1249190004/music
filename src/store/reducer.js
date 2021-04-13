import {combineReducers} from "redux-immutable";

import {reducer as discoverReducer} from "../views/discover/store";

const cReducer = combineReducers({
  discover: discoverReducer
})

export default cReducer;
