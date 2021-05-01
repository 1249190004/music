import * as actionTypes from "./constants"

import {
  getRankingDetail,
  getRankingSubscribers,
  getRankingRelated,
  getRankingComment
} from "@/services/ranking";

const changeRankingDetailAction = res => ({
  type: actionTypes.CHANGE_RANKING_DETAIL,
  rankingDetail: res.playlist
})

const changeRankingSubscribersAction = res => ({
  type: actionTypes.CHANGE_RANKING_SUBSCRIBERS,
  rankingSubscribers: res.subscribers
})

const changeRankingRelatedAction = res => ({
  type: actionTypes.CHANGE_RANKING_RELATED,
  related: res.playlists
})

const changeRankingCommentAction = res => ({
  type: actionTypes.CHANGE_RANKING_COMMENT,
  comment: res
})

export const getRankingDetailAction = (id) => {
  return dispatch => {
    getRankingDetail(id).then(res => {
      dispatch(changeRankingDetailAction(res))
    })
  }
}

export const getRankingSubscribersAction = (id) => {
  return dispatch => {
    getRankingSubscribers(id).then(res => {
      dispatch(changeRankingSubscribersAction(res))
    })
  }
}

export const getRankingRelatedAction = (id) => {
  return dispatch => {
    getRankingRelated(id).then(res => {
      dispatch(changeRankingRelatedAction(res))
    })
  }
}

export const getRankingCommentAction = (id) => {
  return dispatch => {
    getRankingComment(id).then(res => {
      dispatch(changeRankingCommentAction(res))
    })
  }
}

export const clearRankingContentAction = () => {
  return dispatch => {
    dispatch(changeRankingDetailAction({}))
    dispatch(changeRankingSubscribersAction([]))
    dispatch(changeRankingRelatedAction([]))
    dispatch(changeRankingCommentAction({}))
  }
}
