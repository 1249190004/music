import React, {memo, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import classNames from 'classnames';

import {
  formatMinuteSecond,
  padLeftZero
} from "@/utils/format-utils";

import Image from "../image";
import TDLoading from "../loading";
import {ArtistWrapper} from "./style";
import {
  getSongDetailAction
} from "../playerBar/store/actionCreators";

const TDArtist = memo(function (props) {
  const {artist = []} = props
  const dispatch = useDispatch()
  const [currentIndex, changeIsShow] = useState(-1)

  const changePlay = (index, id) => {
    if (index === currentIndex && musicUrl.id === id) {
      changeIsShow(-1)
    } else {
      dispatch(getSongDetailAction(id))
      changeIsShow(index)
    }
  }
  const {musicUrl} = useSelector(state => ({
    musicUrl: state.getIn(["playMusic", "currentSong"]),
  }), shallowEqual)
  return (
    <div style={{"width": "100%"}}>
      <ArtistWrapper>
        <span className="number">序号</span>
        <span className="song">歌曲</span>
        <span className="singer">歌手</span>
        <span className="album">专辑</span>
        <span className="dt">时长</span>
      </ArtistWrapper>
      {artist.length > 0 ?
        artist.map((item, index) => {
          return (
            <ArtistWrapper key={item.id || item.song.id}
                           className={classNames({"active": musicUrl.id === (item.id || item.song.id)})}>
              <div onClick={_ => changePlay(index, (item.id || item.song.id))}>
                {musicUrl.id !== (item.id || item.song.id) ? <span>{padLeftZero(index + 1)}</span> :
                  <div className="play-icon flex-center">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                  </div>}
                {musicUrl.id !== (item.id || item.song.id) && <i className="iconfont icon-play"/>}
              </div>
              <div className="song">
                <Image src={item.al ? item.al.picUrl : item.song.al.picUrl} size={35}/>
                <span className="text-nowrap" title={item.name || item.song.name}>{item.name || item.song.name}</span>
              </div>
              <div className="singer text-nowrap">
                {(item.ar || item.song.ar).map((item, index) => {
                  return (index !== 0 ? " / " : "") + item.name
                })}
              </div>
              <span className="album text-nowrap"
                    title={item.al ? item.al.name : item.song.al.name}>
                {item.al ? item.al.name : item.song.al.name}
              </span>
              <span className="dt">{formatMinuteSecond(item.dt || item.song.dt)}</span>
            </ArtistWrapper>
          )
        }) : <TDLoading/>
      }
    </div>
  )
})

export default TDArtist
