import React, {memo, useEffect, useState} from 'react';

import {getRanking} from "../../services/ranking";
import TDSheetRCM from "../../components/sheet-rcm";
import {RankingWrapper} from "./style"

const TDRanking = memo(function () {
  let [ranking, changeRanking] = useState([])
  useEffect(() => {
    getRanking().then(res => {
      changeRanking(res.list)
    })
  }, [])
  return (
    <div>
      <RankingWrapper>云音乐特色榜</RankingWrapper>
      <TDSheetRCM recommendSheet={ranking ? ranking.slice(0, 4) : []}/>
      <RankingWrapper>全球媒体榜</RankingWrapper>
      <TDSheetRCM recommendSheet={ranking ? ranking.slice(4, ranking.length) : []}/>
    </div>
  )
})
export default TDRanking
