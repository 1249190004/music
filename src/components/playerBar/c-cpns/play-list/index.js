import React, {memo} from 'react';
import {shallowEqual, useSelector} from "react-redux"

import TDArtist from "../../../artist";
import {PlayListWrapper} from "./style";

const TDPlayList = memo(function () {
  const {playList} = useSelector(state => ({
    playList: state.getIn(["playMusic", "playList"])
  }), shallowEqual)
  return (
    <PlayListWrapper>
      <TDArtist artist={playList}/>
    </PlayListWrapper>
  )
})

export default TDPlayList
