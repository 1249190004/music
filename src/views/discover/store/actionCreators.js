import * as actionTypes from "./constants"

import {
  getTopBanners,
  getRecommendSheet,
  getRecommendSing,
  getRecommendSinger
} from "@/services/discover";

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeRecommendSheetAction = res => ({
  type: actionTypes.CHANGE_RECOMMEND_SHEET,
  recommendSheet: res.result
})

const changeRecommendSingAction = res => ({
  type: actionTypes.CHANGE_RECOMMEND_SING,
  recommendSing: res.result
})

const changeRecommendSingerAction = res => ({
  type: actionTypes.CHANGE_RECOMMEND_SINGER,
  recommendSinger: res.artists
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getRecommendSheetAction = (limit) => {
  return dispatch => {
    getRecommendSheet(limit).then(res => {
      dispatch(changeRecommendSheetAction(res))
    })
  }
}

export const getRecommendSingAction = () => {
  return dispatch => {
    getRecommendSing().then(res => {
      dispatch(changeRecommendSingAction(res))
    })
  }
}

export const getRecommendSingerAction = (offset, limit) => {
  return dispatch => {
    getRecommendSinger(offset, limit).then(res => {
      dispatch(changeRecommendSingerAction(res))
    })
  }
}
