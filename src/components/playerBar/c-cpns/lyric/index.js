import React, {memo, useRef, useEffect} from 'react';
import classNames from 'classnames';

import {scrollTo} from "@/utils/ui-helper";

import {LyricWrapper} from "./style";

const TDLyric = memo(function (props) {

  const {musicDetail, lyricList, currentLyricIndex, picUrl} = props
  const singerName = musicDetail.ar || ["未知歌手"];
  const panelRef = useRef();

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 5) return;
    scrollTo(panelRef.current, (currentLyricIndex - 5) * 40, 500)
  }, [currentLyricIndex]);

  return (
    <LyricWrapper picUrl={picUrl}>
      <div className="lyrics-page">
        <div className="dynamic-background">
          <div className="top-right"/>
          <div className="bottom-left"/>
        </div>
        <div className="info">
          <h1 className="title">{musicDetail.name}</h1>
          <div className="singer text-nowrap">
            {singerName.map((item, index) => {
              return (index !== 0 ? " / " : "") + item.name
            })}
          </div>
        </div>
        <div className="lyrics-panel" ref={panelRef}>
          {
            lyricList.map((item, index) => {
              return (
                <div key={item.time}
                     className={classNames("lrc-item", {"active": index === currentLyricIndex})}>
                  {item.content}
                </div>
              )
            })
          }
        </div>
      </div>
    </LyricWrapper>
  )
})

export default TDLyric
