import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

import Image from "../image";
import {formatMinuteSecond, getCount} from "@/utils/format-utils";
import {VideoListWrapper} from "./style";

const TDVideoList = memo(function (props) {
  const {
    videoList, bg, changePath = function () {
    }
  } = props

  const videoId = videoList.id || videoList.vid
  const videoImgUrl = videoList.imgurl || videoList.cover || videoList.coverUrl
  const title = videoList.artistName || videoList.title
  const duration = formatMinuteSecond(videoList.duration || videoList.durationms)
  const playCount = getCount(videoList.playTime || videoList.playCount)
  const name = videoList.artistName || videoList.creator[0].userName

  let nameDurationElementNode = null
  let playCountElementNode = null
  let bgElementNode = null
  let mvIconElementNode = null
  if (videoList.alg !== "rt") {
    nameDurationElementNode = (
      <div>
        <span className="text-nowrap">{title}</span>
        <span>{duration}</span>
      </div>
    )
    playCountElementNode = <span><i/>{playCount}</span>
  } else {
    bgElementNode = <div style={bg}/>
    mvIconElementNode = <i className="iconfont icon-mv"/>
  }

  return (
    <VideoListWrapper>
      <NavLink to={`/mv-detail/${videoId}`}
               onClick={_ => changePath(videoId)}>
        <div className="video-content">
          <div/>
          <Image src={videoImgUrl} size={325}/>
          {nameDurationElementNode}
          {bgElementNode}
          {playCountElementNode}
        </div>
      </NavLink>
      <h3 className="text-nowrap">{mvIconElementNode}{title}</h3>
      <p className="text-nowrap">{"By." + name}</p>
    </VideoListWrapper>
  )
})

export default TDVideoList
