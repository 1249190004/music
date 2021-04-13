import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

import {
  getCount
} from "../../utils/format-utils";
import Image from "../image";

import {
  SheetRCMWrapper,
  SheetRCMItemWrapper
} from "./style";

const TDSheetRCM = memo(function (props) {
  const {recommendSheet} = props

  return (
    <SheetRCMWrapper>
      <div>
        {
          recommendSheet.map(item => {
            return (
              <NavLink key={item.id} to={'/' + item.id}>
                <SheetRCMItemWrapper className={"singerItem"}>
                  <Image src={item.picUrl} size={132}/>
                  <span><i></i>{getCount(item.playCount)}</span>
                </SheetRCMItemWrapper>
                <h2 className="text-nowrap" title={item.name}>{item.name}</h2>
              </NavLink>
            )
          })
        }
      </div>
    </SheetRCMWrapper>
  )
})
export default TDSheetRCM
