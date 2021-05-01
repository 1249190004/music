import * as actionTypes from "./constants"

import {
  getSingerList
} from "@/services/singer";

const changeSingerListAction = res => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  singerList: res
})

export const getSingerListAction = (limit, offset, type, area, initial, loadMore) => {
  return (dispatch, getState) => {
    getSingerList(limit, offset, type, area, initial).then(res => {
      if (loadMore) {
        res.artists.unshift(...getState().getIn(["singer", "singerList"]))
      }
      dispatch(changeSingerListAction(res.artists))
    })
  }
}


