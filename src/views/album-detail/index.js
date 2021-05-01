import React, {memo, useEffect, useState} from 'react';
import {useDispatch} from "react-redux"
import {NavLink} from "react-router-dom"

import {Popconfirm} from 'antd';

import {
  getAlbum,
  getRelateAlbum,
  getRelatedComment
} from "../../services/album";
import Image from "../../components/image";
import {formatDate} from "../../utils/format-utils";
import TDArtist from "../../components/artist";
import TDComment from "../../components/comment";
import {AlbumDetailWrapper} from "./style";
import {getPlayListAction} from "../../components/playerBar/store/actionCreators";

const TDAlbumDetail = memo(function () {
  const dispatch = useDispatch()
  const [albumInfo, changeAlbumInfo] = useState([])
  const [albumRelate, changeAlbumRelate] = useState({})
  const [albumComment, changeAlbumComment] = useState([])
  const [path, changeLocalPath] = useState(window.location.pathname.split("/")[2])

  useEffect(() => {
    const album = async () => {
      const relate = await getRelateAlbum(path)
      changeAlbumRelate(relate)

      if (relate) {
        const info = await getAlbum(relate.album.artists[0].id)
        changeAlbumInfo(info.hotAlbums)
      }

      const comment = await getRelatedComment(path)
      changeAlbumComment(comment.hotComments)
    }

    album().catch(err => new Error(err))
  }, [path])

  const changePath = (path) => {
    changeLocalPath(path)
  }

  const playAll = _ => {
    console.log(albumRelate.songs)
    dispatch(getPlayListAction(albumRelate.songs))
  }

  let coverPicUrl = ""
  let albumName = ""
  let artistPicUrl = ""
  let artistHref = ""
  let artistName = ""
  let publishTime = ""
  let company = ""
  let description = ""

  if (albumRelate.album) {
    coverPicUrl = albumRelate.album.picUrl
    albumName = albumRelate.album.name
    artistPicUrl = albumRelate.album.artist.picUrl
    artistHref = albumRelate.album.artist.id
    artistName = albumRelate.album.artist.name
    publishTime = formatDate(albumRelate.album.publishTime, "yyyy-MM-dd")
    company = albumRelate.album.company
    description = albumRelate.album.description
  }

  return (
    <AlbumDetailWrapper>
      <div className="left">
        <div className="top">
          <div className="avatar">
            <Image src={coverPicUrl} size={200}/>
          </div>
          <div className="info">
            <h1>{albumName}</h1>
            <div className="user">
              <Image src={artistPicUrl} size={30}/>
              <NavLink
                to={`/${artistHref}`}>
                {artistName}
              </NavLink>
              <p>{`${publishTime}创建`}</p>
            </div>
            {company && <div>{`发行公司：${company}`}</div>}
            <div className="desc text-wrap">
              {description}
            </div>
            <Popconfirm
              title={description}
            >
              <span className="spread flex-center">全部<i className="iconfont icon-spread"/></span>
            </Popconfirm>
          </div>
        </div>
        <div className="content">
          <div className="tool-head">
            <div className="play-item" onClick={playAll}>
              <i className="iconfont icon-outlined_play"/>
              播放全部
            </div>
            <div className="collection-item">
              <i className="iconfont icon-collection"/>
              收藏
            </div>
          </div>
          <div className="artist--body">
            <TDArtist artist={albumRelate.songs}/>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="recommend">
          <h3>热门专辑</h3>
          {
            albumInfo.map(item => {
              return (
                <NavLink key={item.name}
                         to={"/album-detail/" + item.id}
                         onClick={_ => changePath(item.id)}>
                  <Image src={item.picUrl} size={50}/>
                  <div>
                    <p className="name text-nowrap" title={item.name}>{item.name}</p>
                    <p className="nickname text-nowrap">{"By." + item.artist.name}</p>
                  </div>
                </NavLink>
              )
            })
          }
        </div>

        <div className="comment">
          <h3>精彩评论</h3>
          <TDComment comment={albumComment}/>
        </div>
      </div>
    </AlbumDetailWrapper>
  )
})

export default TDAlbumDetail
