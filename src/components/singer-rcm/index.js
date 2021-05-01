import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

import Image from "../image";
import TDLoading from "../loading";
import {SingerRCMWrapper} from "./style";

const TDSingerRCM = memo(function (props) {
  const {recommendSinger = []} = props
  return (
    <SingerRCMWrapper>
      {
        recommendSinger.length > 0 ? recommendSinger.map(item => {
          return (

            <NavLink to={"/singer-detail/" + item.id} key={item.id}>
              <div>
                <Image src={item.img1v1Url} size={108}/>
                <h3>{item.name}</h3>
                <span>{"单曲数:" + item.musicSize}</span>
              </div>
            </NavLink>
          )
        }) : <TDLoading/>
      }
    </SingerRCMWrapper>
  )
})
export default TDSingerRCM
