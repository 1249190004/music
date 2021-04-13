import React, {memo} from 'react';

import Image from "../image";
import {SingerRCMWrapper} from "./style";

const TDSingerRCM = memo(function (props) {
  const {recommendSinger} = props
  return (
    <SingerRCMWrapper>
      {
        recommendSinger.map(item => {
          return (
            <div key={item.img1v1Id}>
              <Image src={item.img1v1Url} size={108}/>
              <h3>{item.name}</h3>
              <span>{"单曲数:"+item.musicSize}</span>
            </div>
          )
        })
      }
    </SingerRCMWrapper>
  )
})
export default TDSingerRCM
