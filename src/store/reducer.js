import {combineReducers} from "redux-immutable";

import {reducer as discoverReducer} from "../views/discover/store";
import {reducer as sheetReducer} from "../views/sheet/store";
import {reducer as singerReducer} from "../views/singer/store";
import {reducer as rankingDetailReducer} from "../views/ranking-detail/store";
import {reducer as playMusicReducer} from "../components/playerBar/store";


const cReducer = combineReducers({
  discover: discoverReducer,
  sheet: sheetReducer,
  singer: singerReducer,
  rankingDetail: rankingDetailReducer,
  playMusic: playMusicReducer
})

export default cReducer;
