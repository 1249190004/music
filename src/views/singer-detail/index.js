import React, {memo, useEffect, useState} from 'react';
import {Menu} from 'antd';

import Image from "../../components/image";
import TDArtist from "../../components/artist";
import TDAlbum from "../../components/album";
import TDVideoList from "../../components/video-list";
import TDSingerRCM from "../../components/singer-rcm";
import Empty from "../../components/empty";
import {SingerDetailWrapper, ArtistDescWrapper} from "./style";

import {
  getSingerDetail,
  getSingerDesc,
  getSingerMv,
  getSimilar
} from "../../services/singer";
import {getUserDetail} from "../../services/user";
import {getAlbum} from "../../services/album";
import {navList} from "../../common/local-data";

const TDSingerDetail = memo(function () {
  const [singerIntroduce, changeSingerIntroduce] = useState({})
  const [userInfo, changeUserInfo] = useState({})
  const [currentIndex, changeCurrentIndex] = useState(1)
  const [album, changeAlbum] = useState([])
  const [desc, changeDesc] = useState([])
  const [mv, changeMv] = useState([])
  const [similar, changeSimilar] = useState([])
  const path = window.location.pathname.split("/")[2]
  useEffect(() => {
    getSingerDetail(path).then(res => changeSingerIntroduce(res))

    if (singerIntroduce.artist) {
      getUserDetail(singerIntroduce.artist.accountId).then(res => {
        changeUserInfo(res)
      })
    }
  }, [path,singerIntroduce.artist])

  const changeContent = (key) => {
    switch (parseInt(key)) {
      case 2:
        getAlbum(path, singerIntroduce.artist.albumSize > 30 ? 30 : singerIntroduce.artist.albumSize).then(res => {
          changeAlbum(res)
        })
        break
      case 3:
        if (singerIntroduce.artist.mvSize) {
          getSingerMv(path, singerIntroduce.artist.mvSize > 30 ? 30 : singerIntroduce.artist.mvSize).then(res => {
            changeMv(res.mvs)
          })
        }
        break
      case 4:
        getSingerDesc(path).then(res => {
          changeDesc(res.introduction)
        })
        break
      case 5:
        getSimilar(path).then(res => {
          changeSimilar(res.singer)
        })
        break
      default:
    }
    changeCurrentIndex(parseInt(key))
  }
  return (
    <SingerDetailWrapper>
      <div className="top">
        <div className="top-mask">
          {singerIntroduce.artist && <div className="singer-introduce">
            <div className="avatar">
              <Image src={singerIntroduce.artist.img1v1Url} size={120}/>
              {userInfo.level && <div className="level">
                <i className={"iconfont icon-level-" + userInfo.level}/>
              </div>}
            </div>
            <h1 className="name">
              {singerIntroduce.artist.name}
              {userInfo.profile && <i className={"iconfont icon-gender-" + userInfo.profile.gender}/>}
            </h1>
            <div className="follow flex-center">
              <i className="iconfont icon-add"/>
              关注TA
            </div>
            <p className="desc text-wrap">
              <strong>{singerIntroduce.artist.briefDesc.replace(/ㅤ/g, "")}</strong>
            </p>

            <ul className="flex-center">
              <li>
                <p className="num">{singerIntroduce.artist.musicSize}</p>
                <p className="text">单曲数</p>
              </li>
              <li>
                <p className="num">{singerIntroduce.artist.albumSize}</p>
                <p className="text">专辑数</p>
              </li>
              <li>
                <p className="num">{singerIntroduce.artist.mvSize}</p>
                <p className="text">MV数</p>
              </li>
              {userInfo.profile && <li>
                <p className="num">{userInfo.profile.followeds}</p>
                <p className="text">粉丝</p>
              </li>}
            </ul>
          </div>}
          <div className="bottom-triangle"/>
        </div>
      </div>

      <div className="bottom flex-center">
        <Menu mode="horizontal"
              defaultSelectedKeys={["1"]}
              onClick={({key}) => {
                changeContent(key)
              }}>
          {
            navList.map((item, index) => {
              return (
                <Menu.Item key={item.id}>
                  {item.name}
                </Menu.Item>
              )
            })
          }
        </Menu>

        {currentIndex === 1 && <TDArtist artist={singerIntroduce.hotSongs}/>}
        {currentIndex === 2 && <TDAlbum album={album.hotAlbums}/>}
        {currentIndex === 3 && <div className="mv">
          {mv.length !== 0 ? mv.map(item => {
            return (
              <TDVideoList videoList={item} key={item.id}/>
            )
          }) : <Empty/>}
        </div>}
        {currentIndex === 4 && <ArtistDescWrapper>
          <h2>简介</h2>
          <p className="brief-desc">
            {singerIntroduce.artist.briefDesc}
          </p>
          <div className="introduction">
            {desc.map(item => {
              return (
                <div key={item.ti}>
                  <h4>{item.ti}</h4>
                  <p dangerouslySetInnerHTML={{__html: item.txt.replace(/(\r\n|\n|\r)/gm, "<br />")}}></p>
                </div>
              )
            })}
          </div>
        </ArtistDescWrapper>}
        {currentIndex === 5 && <div className="similar">
          {similar ? <TDSingerRCM recommendSinger={similar}/> : <Empty/>}
        </div>}
      </div>
    </SingerDetailWrapper>
  )
})
export default TDSingerDetail
