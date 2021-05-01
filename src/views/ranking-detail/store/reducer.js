import {Map} from 'immutable'

import * as actionTypes from "./constants"

const defaultState = Map({
  rankingDetail: {},
  rankingSubscribers: [],
  related: [],
  comment: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RANKING_DETAIL:
      return state.set("rankingDetail", action.rankingDetail)
    case actionTypes.CHANGE_RANKING_SUBSCRIBERS:
      return state.set("rankingSubscribers", action.rankingSubscribers)
    case actionTypes.CHANGE_RANKING_RELATED:
      return state.set("related", action.related)
    case actionTypes.CHANGE_RANKING_COMMENT:
      return state.set("comment", action.comment)
    default:
      return state
  }
}

export default reducer
