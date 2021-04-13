import React, {memo, useState} from 'react';

import {
  formatMinuteSecond,
  padLeftZero
} from "@/utils/format-utils";

import Image from "../image";
import {
  SingRCMWrapper,
  SingRCMItemWrapper
} from "./style";

const TDSingRCM = memo(function (props) {
  const {recommendSing} = props
  const [{currentIndex, isShow}, changeIsShow] = useState({currentIndex: -1, isShow: true})

  return (
    <SingRCMWrapper>
      {
        recommendSing.map((item, index) => {
          return (
            <SingRCMItemWrapper key={item.id}>
              <div onClick={_ => changeIsShow({currentIndex: index, isShow: !isShow})}>
                <span>{padLeftZero(index + 1)}</span>
                {(isShow ? true :(currentIndex !== index)) && (currentIndex === index ? true : currentIndex !== index) &&
                <i className="iconfont icon-play"></i>}
                {!isShow && (currentIndex === index) && <i className="iconfont icon-pause"></i>}
              </div>
              <Image src={item.picUrl} size={55}/>
              <div>
                <span className="text-nowrap">{item.name}</span>
                <span className="text-nowrap">{item.song.artists[0].name}</span>
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
