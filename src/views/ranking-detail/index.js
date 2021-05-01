import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {NavLink} from "react-router-dom"

import {
  getRankingDetailAction,
  getRankingSubscribersAction,
  getRankingRelatedAction,
  getRankingCommentAction,
  clearRankingContentAction
} from "./store/actionCreators";
// import {getSearchSing} from "../../services/search";
import {getPlayListAction} from "../../components/playerBar/store/actionCreators";
import {formatDate} from "../../utils/format-utils";

import {Popconfirm} from 'antd';
import TDArtist from "../../components/artist";
import {RankingDetailWrapper} from "./style";
import Image from "../../components/image";
import TDComment from "../../components/comment";

const TDRankingDetail = memo(function () {
  const [path, changeLocalPath] = useState(window.location.pathname.split("/")[2])
  // const [songs, changeSongs] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankingDetailAction(path))
    dispatch(getRankingSubscribersAction(path))
    dispatch(getRankingRelatedAction(path))
    dispatch(getRankingCommentAction(path))
    // getSearchSing(rankingDetail.trackIds.map(item => item.id).join(",")).then(res => {
    //   changeSongs(res.songs)
    // })
    return () => dispatch(clearRankingContentAction())
  }, [dispatch, path])

  const {rankingDetail = {}, rankingSubscribers = [], related = [], comment = {}} = useSelector(state => ({
    rankingDetail: state.getIn(["rankingDetail", "rankingDetail"]),
    rankingSubscribers: state.getIn(["rankingDetail", "rankingSubscribers"]),
    related: state.getIn(["rankingDetail", "related"]),
    comment: state.getIn(["rankingDetail", "comment"])
  }), shallowEqual)

  const changePath = (path) => {
    changeLocalPath(path)
  }
  const playAll = _ => {
    dispatch(getPlayListAction(rankingDetail.tracks))
  }

  return (
    <RankingDetailWrapper>
      <div className="left">
        <div className="top">
          <div className="avatar">
            <Image src={rankingDetail.coverImgUrl} size={200}/>
          </div>
          <div className="info">
            <h1>{rankingDetail.name}</h1>
            <div className="user">
              <Image src={rankingDetail.creator && rankingDetail.creator.avatarUrl} size={30}/>
              {rankingDetail.userId && <NavLink
                to={`/personal?userId=${rankingDetail.userId}`}>
                {rankingDetail.creator && rankingDetail.creator.nickname}
              </NavLink>}
              <p>{formatDate(rankingDetail.createTime, "yyyy-MM-dd") + "创建"}</p>
            </div>
            <div className="desc text-wrap">
              {rankingDetail.description}
            </div>
            <Popconfirm
              title={rankingDetail.description}
              placement="top"
            >
              <span className="spread flex-center">全部<i className="iconfont icon-spread"/></span>
            </Popconfirm>
          </div>
        </div>
        <div className="content">
          <div className="tool-head">
            <div className="play-item" onClick={playAll}>
              <i className="iconfont icon-outlined_play"/>
              播放全部
            </div>
            <div className="collection-item">
              <i className="iconfont icon-collection"/>
              收藏
            </div>
          </div>
          <div className="artist--body">
            <TDArtist artist={rankingDetail.tracks}/>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="avatars">
          <h3>喜欢这个歌单的人</h3>
          {
            rankingSubscribers.map(item => {
              return (
                <NavLink to={"/personal?userId=" + item.userId} key={item.userId}
                         onClick={_ => changePath(item.userId)}>
                  <Image src={item.avatarUrl} size={37}/>
                </NavLink>
              )
            })
          }
        </div>

        <div className="recommend">
          <h3>相关推荐</h3>
          {
            related.map(item => {
              return (
                <NavLink key={item.name} to={item.id} onClick={_ => changePath(item.id)}>
                  <Image src={item.coverImgUrl} size={50}/>
                  <div>
                    <p className="name text-nowrap" title={item.name}>{item.name}</p>
                    <p className="nickname text-nowrap">{"By." + item.creator.nickname}</p>
                  </div>
                </NavLink>
              )
            })
          }
        </div>

        <div className="comment">
          <h3>精彩评论</h3>
          <TDComment comment={comment.comments}/>
        </div>
      </div>
    </RankingDetailWrapper>
  )
})

export default TDRankingDetail
