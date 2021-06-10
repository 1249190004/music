import React, {memo, useState, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom"

import {
  getMvPlay,
  getMvDesc,
  getMvInfo,
  getMvComment,
  getMvRecommend
} from "../../services/mv";
import {
  getVideoPlay,
  getVideoDesc,
  getVideoInfo,
  getVideoComment,
  getVideoRecommend
} from "../../services/video"
import {
  getCount,
  formatDate
} from "../../utils/format-utils";

import {Pagination} from 'antd';
import TDVideoList from "../../components/video-list";
import TDComment from "../../components/comment";
import {MvDetailWrapper} from "./style";

const TDMvDetail = memo(function () {
  const [path, changeLocalPath] = useState(window.location.pathname.split("/")[2])
  const [mvPlayUrl, changeMvPlayUrl] = useState({})
  const [mvDesc, changeMvDesc] = useState({})
  const [mvInfo, changeMvInfo] = useState({})
  const [mvComment, changeMvComment] = useState([])
  const [mvHotComment, changeMvHotComment] = useState([])
  const [mvRecommend, changeMvRecommend] = useState([])
  const [offset, changeOffset] = useState(0)
  const commentRef = useRef()
  const commentTop = commentRef.current && commentRef.current.offsetTop

  useEffect(() => {
    //mv和video请求数据接口不一致，结构相同，因此判断id值是否大于某个长度来请求相应的接口数据
    const mvDetail = async () => {
      if (path.length > 10) {
        const playUrl = await getVideoPlay(path)
        changeMvPlayUrl(playUrl.data || playUrl.urls[0])

        const desc = await getVideoDesc(path)
        changeMvDesc(desc.data)

        const info = await getVideoInfo(path)
        changeMvInfo(info)

        const comment = await getVideoComment(path, 20, offset * 20)
        changeMvHotComment(comment.hotComments)
        changeMvComment(comment)

        const recommend = await getVideoRecommend(path)
        changeMvRecommend(recommend.mvs || recommend.data)
      } else {
        const playUrl = await getMvPlay(path)
        changeMvPlayUrl(playUrl.data)

        const desc = await getMvDesc(path)
        changeMvDesc(desc.data)

        const info = await getMvInfo(path)
        changeMvInfo(info)

        const comment = await getMvComment(path, 20, offset * 20)
        changeMvHotComment(comment.hotComments)
        changeMvComment(comment)

        const recommend = await getMvRecommend(path)
        changeMvRecommend(recommend.mvs)
      }
    }

    mvDetail().catch(err => new Error(err))
  }, [path,offset])

  const changePath = path => {
    changeLocalPath(path)
  }

  const changeParam = async page => {
    if (path.length > 10) {
      const comment = await getVideoComment(path, 20, page * 20)
      changeMvComment(comment)
    } else {
      const comment = await getMvComment(path, 20, page * 20)
      changeMvComment(comment)
    }
    document.documentElement.scrollTop = commentTop - 70
    changeOffset(page)
  }
  return (
    <MvDetailWrapper>
      <div className="left">
        <div className="video">
          <video src={mvPlayUrl.url} controls autoPlay/>
        </div>
        <div className="desc">
          <h2 className="flex-left"><i className="iconfont icon-mv"/>{mvDesc.name || mvDesc.title}</h2>
          <div className="tag">
            {
              (mvDesc.videoGroup || []).map(item => {
                return (
                  <NavLink to={"/" + item.id} key={item.id}>{"#" + item.name}</NavLink>
                )
              })
            }
          </div>

          <div className="time-count">
            <span>{"发布：" + formatDate(mvDesc.publishTime, "yyyy-MM-dd")}</span>
            <span>{"播放次数：" + getCount(mvDesc.playCount || mvDesc.playTime)}</span>
          </div>

          <div className="info">
            <span><i className="iconfont icon-like"/>{mvInfo.likedCount}</span>
            <span><i className="iconfont icon-collection-2"/>{mvDesc.subCount || mvDesc.subscribeCount}</span>
            <span><i className="iconfont icon-share"/>{mvInfo.shareCount}</span>
          </div>
        </div>

        <div className="comments">
          <div className="title flex-left">
            <i className="iconfont icon-comment"/>Comments
            | {mvDesc.commentCount + "条评论"}
          </div>
          {mvHotComment && (
            <div className="hot-comments">
              <h2>精彩评论</h2>
              <TDComment comment={mvHotComment}/>
            </div>
          )
          }
          <div className="all-comments" ref={commentRef}>
            <h2>最新评论</h2>
            <TDComment comment={mvComment.comments}/>
          </div>
        </div>
        {mvComment.total > 20 && <Pagination current={offset + 1}
                                             total={mvComment.total}
                                             showSizeChanger={false}
                                             pageSize={20}
                                             showTotal={total => `共 ${total} 条`}
                                             onChange={page => changeParam(page - 1)}/>}
      </div>

      <div className="right">
        <div className="video-brief">
          <h2>视频简介</h2>
          <div>{mvDesc.desc || mvDesc.description || "暂时没有简介哦~"}</div>
        </div>

        <div className="recommend">
          <h2>相关推荐</h2>
          {
            mvRecommend.map(item => {
              return (
                <TDVideoList videoList={item}
                             key={item.id || item.vid}
                             bg={{"background": "transparent"}}
                             changePath={changePath}/>
              )
            })
          }
        </div>
      </div>
    </MvDetailWrapper>
  )
})

export default TDMvDetail
