import React, {memo, useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom'

import {
  getSearchAll,
  getSearchSing
} from "../../services/search";
import {revertUTF8} from "../../utils/format-utils";

import {Menu, Input} from "antd"
import TDArtist from "../../components/artist";
import TDSingerRCM from "../../components/singer-rcm";
import TDAlbum from "../../components/album";
import TDVideoList from "../../components/video-list";
import TDSheetRCM from "../../components/sheet-rcm";
import TDLoading from "../../components/loading";
import {search} from "../../common/local-data";
import {SearchWrapper} from "./style";

const TDSearch = memo(function () {
  const [keyword, changeKeyword] = useState(window.location.search.split("=")[1])
  const [sing, changeSing] = useState([])
  const [singer, changeSinger] = useState([])
  const [album, changeAlbum] = useState([])
  const [video, changeVideo] = useState([])
  const [sheet, changeSheet] = useState([])
  const [currentIndex, changeCurrentIndex] = useState(1)
  const history = useHistory()
  const inputRef = useRef()

  useEffect(() => {
    const getSearchInfo = async _ => {
      const sing = await getSearchAll(revertUTF8(keyword))
      if (sing) {
        let ids = sing.result.songs.reduce((a, b) => {
          return a + "," + b.id
        }, "")
        getSearchSing(ids.substring(1, ids.length)).then(res => {
          changeSing(res.songs)
        })
      }
    }
    getSearchInfo().catch(err => new Error(err))

    return () => {
      changeSinger([])
      changeAlbum([])
      changeVideo([])
      changeSheet([])
    }
  }, [keyword])

  //点击menu进行页面内容切换
  const handleClick = async key => {
    changeCurrentIndex(parseInt(key))
    switch (parseInt(key)) {
      case 100:
        const singer = await getSearchAll(revertUTF8(keyword), key)
        changeSinger(singer.result ? singer.result.artists : [])
        break
      case 10:
        const album = await getSearchAll(revertUTF8(keyword), key)
        changeAlbum(album.result ? album.result.albums : [])
        break
      case 1014:
        const video = await getSearchAll(revertUTF8(keyword), key)
        changeVideo(video.result ? video.result.videos : [])
        break
      case 1000:
        const sheet = await getSearchAll(revertUTF8(keyword), key)
        changeSheet(sheet.result ? sheet.result.playlists : [])
        break
      default:
    }
  }

  //初始化当前搜索页面搜索框值
  if (inputRef.current) {
    inputRef.current.state.value = revertUTF8(keyword)
  }

  //判断当前关键字和搜索关键字是否相等，如不等则重新渲染页面
  if (window.location.search.split("=")[1] !== keyword) {
    changeKeyword(window.location.search.split("=")[1])
    changeCurrentIndex(1)
  }

  //将搜索关键字存储到session，利用new Set去除重复历史纪录
  let prevSearchContent = JSON.parse(sessionStorage.getItem("_search_")) || []
  prevSearchContent.push(revertUTF8(keyword))
  prevSearchContent = Array.from(new Set(prevSearchContent))
  sessionStorage.setItem("_search_", JSON.stringify(prevSearchContent))

  //按下搜索按钮进行关键字搜索
  const onSearch = e => {
    history.push("/search?keyword=" + e.target.value)
  };

  return (
    <SearchWrapper>
      <div className="banner">
        <div className="search flex-center">
          <Input
            placeholder="搜索音乐/MV/歌单/歌手"
            suffix={
              <i className="iconfont icon-search"/>
            }
            onPressEnter={e => onSearch(e)}
            defaultValue={revertUTF8(keyword)}
            ref={inputRef}
          />
        </div>
      </div>
      <div className="content">
        <div className="menu">
          <h1>搜索结果</h1>
          <Menu onClick={({key}) => handleClick(key)}
                defaultSelectedKeys={["1"]}
                mode="horizontal"
                selectedKeys={[String(currentIndex)]}>
            {
              search.map(item => {
                return (
                  <Menu.Item key={item.type}>
                    {item.name}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </div>
        {currentIndex === 1 && <TDArtist artist={sing}/>}
        {currentIndex === 100 && <TDSingerRCM recommendSinger={singer}/>}
        {currentIndex === 10 && <TDAlbum album={album}/>}
        {currentIndex === 1014 &&
        <div className="video">
          {
            video.length > 0 ? video.map(item => {
              return (
                <TDVideoList videoList={item} key={item.vid}/>
              )
            }) : <TDLoading/>
          }
        </div>
        }
        {currentIndex === 1000 && <TDSheetRCM recommendSheet={sheet}/>}

      </div>
    </SearchWrapper>
  )
})

export default TDSearch

