import React, {memo, useRef, useState, useCallback, useEffect} from 'react';
import {shallowEqual, useSelector, useDispatch} from "react-redux"

import {formatMinuteSecond, getPlaySong} from "../../utils/format-utils";
import {
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
  changeSequenceAction
} from "./store/actionCreators";

import {Slider} from 'antd';
import Image from "../image";
import TDLyric from "./c-cpns/lyric";
import TDPlayList from "./c-cpns/play-list";
import {PlayBarWrapper} from "./style";

const TDPlayMusicUrl = memo(function (props) {
  const audioRef = useRef()
  const [isPlay, changeIsPlay] = useState(false)
  const [isVoice, changeIsVoice] = useState(false)
  const [isChanging, setIsChanging] = useState(false);
  const [lyric, changeLyricShow] = useState(false)
  const [playList, changePlayList] = useState(false)
  const [currentIndex, changeCurrentIndex] = useState(0)
  const [currentTime, changeCurrentTime] = useState("00:00")
  const [currentTimeProgress, changeCurrentProgress] = useState(0)
  const [currentVoiceProgress, changeCurrentVoiceProgress] = useState(100)
  const dispatch = useDispatch()

  const {musicDetail, sequence, lyricList, currentLyricIndex} = useSelector(state => ({
    musicDetail: state.getIn(["playMusic", "currentSong"]),
    sequence: state.getIn(["playMusic", "sequence"]),
    lyricList: state.getIn(["playMusic", "lyricList"]),
    currentLyricIndex: state.getIn(["playMusic", "currentLyricIndex"])
  }), shallowEqual)

  useEffect(() =>  {
    audioRef.current.src = getPlaySong(musicDetail.id);
    audioRef.current.play().then(res => {
      changeIsPlay(true);
    }).catch(err => {
      changeIsPlay(false);
    });
  }, [musicDetail]);

  const changePlayState = _ => {
    isPlay ? audioRef.current.play() : audioRef.current.pause()
    changeIsPlay(!isPlay)
  }
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  }
  const changePlayVoice = _ => {
    audioRef.current.muted = !isVoice
    changeIsVoice(!isVoice)
  }
  const changePlayProgress = useCallback(value => {
    setIsChanging(true);
    changeCurrentProgress(value)
    changeCurrentTime(formatMinuteSecond(value * audioRef.current.duration * 10))
  }, [])
  const changeAfterProgress = useCallback(value => {
    audioRef.current.currentTime = value * audioRef.current.duration / 100
    changeCurrentTime(formatMinuteSecond(audioRef.current.currentTime * 1000))
    setIsChanging(false);
    // if (!isPlay) {
    //   audioRef.current.play()
    //   changeIsPlay(false)
    // }
  }, [isPlay])
  const changeVoiceProgress = value => {
    changeCurrentVoiceProgress(value)
    audioRef.current.volume = value / 100
  }
  const timeUpdate = e => {
    let currentTimes = e.target.currentTime
    currentTimes < 1 && changeIsPlay(false)
    if (!isChanging) {
      changeCurrentTime(formatMinuteSecond(currentTimes * 1000))
      changeCurrentProgress(currentTimes * 100 / e.target.duration)
    }

    // 获取当前的歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTimes * 1000 < lyricItem.time) {
        break;
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
    }
  }
  const handleMusicEnded = _ => {
    changePlayState()
    if (sequence === 2) { // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  }
  const changeSequence = _ => {
    let sequence = currentIndex + 1
    if (currentIndex < 2) {
      changeCurrentIndex(currentIndex + 1)
    } else {
      changeCurrentIndex(0)
      sequence = 0
    }
    dispatch(changeSequenceAction(sequence))
  }
  const showLyricPanel = _ => {
    changeLyricShow(!lyric)
  }

  const picUrl = (musicDetail.al && musicDetail.al.picUrl) || "";
  const singerName = musicDetail.ar || ["未知歌手"];
  const showDuration = formatMinuteSecond(musicDetail.dt || (musicDetail.song && musicDetail.song.dt));

  return (
    <div>
      <audio ref={audioRef}
             onTimeUpdate={e => timeUpdate(e)}
             onEnded={_ => handleMusicEnded()}/>

      {lyric && <TDLyric musicDetail={musicDetail}
                         lyricList={lyricList}
                         currentLyricIndex={currentLyricIndex}
                         picUrl={picUrl}/>}

      {playList && <TDPlayList/>}

      {props.children}

      <PlayBarWrapper className="flex-center" height={musicDetail.name}>
        <Image src={picUrl} size={60}/>
        <div className="info">
          <h2 className="text-nowrap" title={musicDetail.name}>{musicDetail.name}</h2>
          <div className="singer text-nowrap">
            {singerName.map((item, index) => {
              return (index !== 0 ? " / " : "") + item.name
            })}
          </div>
        </div>

        <div className="player-btn flex-center">
          <i className="iconfont icon-prev" onClick={_ => changeMusic(-1)}/>
          <div onClick={changePlayState}>
            {isPlay ? <i className="iconfont icon-play"/> : <i className="iconfont icon-pause"/>}
          </div>
          <i className="iconfont icon-next" onClick={_ => changeMusic(1)}/>
        </div>

        <div className="progress flex-center">
          <p className="current-time">{currentTime || "00:00"}</p>
          <Slider tipFormatter={null}
                  value={currentTimeProgress}
                  onChange={changePlayProgress}
                  onAfterChange={changeAfterProgress}/>
          <span className="duration-time">{showDuration}</span>
        </div>

        <div className="volume-wrap flex-center">
          <div onClick={changePlayVoice}>
            {isVoice ? <i className="iconfont icon-mute"/> : <i className="iconfont icon-voice"/>}
          </div>
          <Slider tipFormatter={null} value={currentVoiceProgress}
                  onChange={changeVoiceProgress}/>
        </div>

        <div className="tool flex-center">
          <div onClick={changeSequence}>
            {currentIndex === 0 && <i className="iconfont icon-order"/>}
            {currentIndex === 1 && <i className="iconfont icon-random"/>}
            {currentIndex === 2 && <i className="iconfont icon-circle"/>}
          </div>
          <i className="iconfont icon-ci" onClick={showLyricPanel}/>
          <i className="iconfont icon-list" onClick={_ => changePlayList(!playList)}/>
        </div>
      </PlayBarWrapper>
    </div>
  )
})

export default TDPlayMusicUrl
