import React, {memo, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux"

import {
  formatMinuteSecond,
  padLeftZero
} from "@/utils/format-utils";

import Image from "../image";
import {
  SingRCMWrapper,
  SingRCMItemWrapper
} from "./style";
import {getSongDetailAction} from "../playerBar/store/actionCreators";

const TDSingRCM = memo(function (props) {
  const {recommendSing = []} = props
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
    <SingRCMWrapper>
      {
        recommendSing.map((item, index) => {
          return (
            <SingRCMItemWrapper key={item.id}>
              <div onClick={_ => changePlay(index, (item.id || item.song.id))}>
                <span>{padLeftZero(index + 1)}</span>
                {musicUrl.id === (item.id || item.song.id) ? <i className="iconfont icon-pause"/> :
                  <i className="iconfont icon-play"/>}
              </div>
              <Image src={item.picUrl} size={55}/>
              <div>
                <span className="text-nowrap" title={item.name}>{item.name}</span>
                <span className="text-nowrap singer">{item.song.artists[0].name}</span>
              </div>
              <h3 className="text-wrap">《{item.song.album.name}》</h3>
              <span>{formatMinuteSecond(item.song.duration)}</span>
            </SingRCMItemWrapper>
          )
        })
      }
    </SingRCMWrapper>
  )
})
export default TDSingRCM
