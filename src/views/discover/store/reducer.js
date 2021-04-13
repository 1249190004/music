import {Map} from 'immutable'

import * as actionTypes from "./constants"

const defaultState = Map({
  topBanners: [],
  recommendSheet: [],
  recommendSing: [],
  recommendSinger: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_RECOMMEND_SHEET:
      return state.set("recommendSheet", action.recommendSheet)
    case actionTypes.CHANGE_RECOMMEND_SING:
      return state.set("recommendSing", action.recommendSing)
    case actionTypes.CHANGE_RECOMMEND_SINGER:
      return state.set("recommendSinger", action.recommendSinger)
    default:
      return state
  }
}

export default reducer
