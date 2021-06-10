import React, {memo, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"

import {
  getUserDetail,
  getUserRecord,
  getUserPlaylist,
  getSign
} from "../../services/user";
import {getAstro} from "../../utils/format-utils";

import {Menu, message} from 'antd';
import TDArtist from "../../components/artist";
import Empty from "../../components/empty";
import TDSheetRCM from "../../components/sheet-rcm";
import Image from "../../components/image";
import {PersonalWrapper} from "./style"


const TDPersonal = memo(function () {
  const [keyword, changeKeyword] = useState(window.location.search.split("=")[1])
  const [userDetail, changeUserDetail] = useState({})
  const [userRecord, changeUserRecord] = useState([])
  const [userPlaylist, changeUserPlaylist] = useState([])
  const userId = window.localStorage.getItem("profile") ? JSON.parse(window.localStorage.getItem("profile")).userId : 0
  useEffect(() => {
    const getUserInfo = async _ => {
      const detail = await getUserDetail(keyword)
      changeUserDetail(detail)

      const playlist = await getUserPlaylist(keyword)
      changeUserPlaylist(playlist.playlist)
    }
    changeKey(1)
    getUserInfo().catch(err => new Error(err))
  }, [keyword])

  if (window.location.search.split("=")[1] !== keyword) {
    changeKeyword(window.location.search.split("=")[1])
  }
  //切换菜单栏
  const changeKey = async key => {
    changeUserRecord([])
    const record = await getUserRecord(keyword, key)
    changeUserRecord(key === "0" ? record.allData : record.weekData)
  }

  //签到
  const sign = async _ => {
    const sign = await getSign()
    if (sign.code === 200) {
      message.success("签到成功")
    } else {
      message.error("重复签到")
    }
  }


  // 数据设置
  const avatarUrl = userDetail.profile && userDetail.profile.avatarUrl
  const nickname = userDetail.profile && userDetail.profile.nickname
  const level = userDetail.level
  const birthday = userDetail.profile && userDetail.profile.birthday
  const gender = userDetail.profile && userDetail.profile.gender
  const dynamic = userDetail.profile && userDetail.profile.eventCount
  const follows = userDetail.profile && userDetail.profile.follows
  const fans = userDetail.profile && userDetail.profile.followeds
  const listenSongs = userDetail.listenSongs

  let signElementNode = null
  let setElementNode = null
  let userName = "我"
  if (parseInt(userId) === parseInt(String(keyword))) {
    signElementNode = <button onClick={sign}>签到</button>
    setElementNode = (
      <div className="foot flex-center">
        <NavLink to={"/#"}>个人设置</NavLink>
        <NavLink to={"/#"}>我的等级</NavLink>
      </div>
    )
  } else {
    userName = nickname
  }

  const createSheet = userPlaylist.filter(item => item.creator.userId === parseInt(keyword))
  const collectionSheet = userPlaylist.filter(item => item.creator.userId !== parseInt(keyword))
  return (
    <PersonalWrapper>
      <div className="banner"/>
      <div className="main">
        <div className="left">
          <div className="layer"/>
          <div className="card flex-center">
            <Image src={avatarUrl} size={64}/>
            <h2>{nickname}</h2>
            {signElementNode}
          </div>

          <div className="profile">
            <div className="tag">
              等级：<i className={"iconfont icon-level-" + level}/>
            </div>
            <div className="tag">
              {"年龄：" + getAstro(birthday)}
              <i className={"iconfont icon-gender-" + gender}/>
            </div>
            <div className="tag">{"地区：-"}</div>
          </div>

          <ul className="follow">
            <li>动态 <span>{dynamic}</span></li>
            <li>关注 <span>{follows}</span></li>
            <li>粉丝 <span>{fans}</span></li>
          </ul>
          {setElementNode}
        </div>

        <div className="center">
          <div className="top">
            <div className="flex-center order">
              听歌排行 <span>(累计听歌({listenSongs}))</span>
            </div>
            <Menu mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  onClick={({key}) => changeKey(key)}>
              <Menu.Item key="1">最近一周</Menu.Item>
              <Menu.Item key="0">所有时间</Menu.Item>
            </Menu>
          </div>
          {userRecord ? <TDArtist artist={userRecord}/> : <Empty/>}
        </div>

        <div className="right">
          <div className="my-module">
            <h3>{userName}创建的歌单</h3>
            <TDSheetRCM
              recommendSheet={createSheet}/>
          </div>
          <div className="collect-module">
            <h3>{userName}收藏的歌单</h3>
            <TDSheetRCM
              recommendSheet={collectionSheet}/>
          </div>
        </div>
      </div>
    </PersonalWrapper>
  )
})

export default TDPersonal
