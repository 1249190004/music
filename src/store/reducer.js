import {combineReducers} from "redux-immutable";

import {reducer as discoverReducer} from "../views/discover/store";
import {reducer as sheetReducer} from "../views/sheet/store";


const cReducer = combineReducers({
  discover: discoverReducer,
  sheet: sheetReducer
})

export default cReducer;
