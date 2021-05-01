import {Map} from 'immutable'

import * as actionTypes from "./constants"

const defaultState = Map({
  singerList: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.singerList)
    default:
      return state
  }
}

export default reducer
