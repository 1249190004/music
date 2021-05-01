import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

import {formatMsgTime} from "../../utils/format-utils";

import {RankingCommentWrapper} from "./style";
import Image from "../image";

const TDComment = memo(function (props) {
  const {comment = []} = props
  return (
    <RankingCommentWrapper>
      {
        comment.map(item => {
          return (
            <div key={item.time}>
              <NavLink to={"/" + item.user.userId}>
                <Image src={item.user.avatarUrl} size={45}/>
              </NavLink>
              <div className="info">
                <div>
                  <div>
                    <NavLink to={"/" + item.user.userId} className="text-nowrap">
                      {item.user.nickname}
                    </NavLink>
                    <span className="time">{"~" + formatMsgTime(item.time)}</span>
                  </div>
                  <div className="tool flex-center">
                    <i className="iconfont icon-zan"/>
                    <span>({item.likedCount})</span>
                    <i className="iconfont icon-comments"/>
                  </div>
                </div>
                <div className="content text-wrap">
                  <div>{item.content}</div>
                  {
                    item.beReplied.map(item => {
                      return (
                        <div className="replied" key={item.user.userId}>
                          <span>{"@" + item.user.nickname + "："}</span>
                          <div className="replied-content">
                            {item.content}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </RankingCommentWrapper>
  )
})

export default TDComment
