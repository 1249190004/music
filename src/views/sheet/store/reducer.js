import {Map} from 'immutable'

import * as actionTypes from "./constants"

const defaultState = Map({
  hotBanners: [],
  catList: {},
  sheetList: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_BANNERS:
      return state.set("hotBanners", action.hotBanners)
    case actionTypes.CHANGE_CAT_LIST:
      return state.set("catList", action.catList)
    case actionTypes.CHANGE_SHEET_LIST:
      return state.set("sheetList", action.sheetList)
    default:
      return state
  }
}

export default reducer
