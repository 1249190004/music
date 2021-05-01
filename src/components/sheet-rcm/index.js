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
import TDLoading from "../loading";

const TDSheetRCM = memo(function (props) {
  const {recommendSheet = []} = props
  return (
    <SheetRCMWrapper>
      <div className="sheetRcm">
        {
          recommendSheet.length > 0 ? recommendSheet.map(item => {
            return (
              <NavLink key={item.id} to={`/ranking-detail/${item.id}`}>
                <SheetRCMItemWrapper className={"singerItem"}>
                  <Image src={item.picUrl || item.coverImgUrl} size={132}/>
                  <span><i/>{getCount(item.playCount)}</span>
                </SheetRCMItemWrapper>
                <h2 className="text-nowrap" title={item.name}>{item.name}</h2>
              </NavLink>
            )
          }) : <TDLoading/>
        }
      </div>
    </SheetRCMWrapper>
  )
})
export default TDSheetRCM
