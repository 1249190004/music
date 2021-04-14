import * as actionTypes from "./constants"

import {
  getHotSheet,
  getCatList,
  getSheetList
} from "@/services/sheet";

const changeHotSheetAction = res => ({
  type: actionTypes.CHANGE_HOT_BANNERS,
  hotBanners: res.tags
})

const changeCatListAction = res => ({
  type: actionTypes.CHANGE_CAT_LIST,
  catList: res
})

const changeSheetListAction = res => ({
  type: actionTypes.CHANGE_SHEET_LIST,
  sheetList: res
})

export const getHotSheetAction = () => {
  return dispatch => {
    getHotSheet().then(res => {
      dispatch(changeHotSheetAction(res))
    })
  }
}

export const getCatListAction = () => {
  return dispatch => {
    getCatList().then(res => {
      dispatch(changeCatListAction(res))
    })
  }
}

export const getSheetListAction = (order, cat, limit, offset) => {
  return dispatch => {
    getSheetList(order, cat, limit, offset).then(res => {
      dispatch(changeSheetListAction(res))
    })
  }
}


