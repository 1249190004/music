import React, {memo, useEffect, useState} from 'react';

import {classifys, areaList, sortList} from "../../common/local-data";
import {getVideo} from "../../services/video";

import {Menu} from 'antd';
import TDLoadMore from "../../components/load-more";
import {
  VideoWrapper,
  VideoListWrapper
} from "./style";
import TDVideoList from "../../components/video-list";
import {debounce} from "../../utils/optimize-utils";
import {getClientHeight, getScrollHeight, getScrollTop} from "../../utils/load-more-utils";

const TDVideo = memo(function () {

  let [offset, changeOffset] = useState(0)
  let [type, changeType] = useState("全部")
  let [area, changeArea] = useState("全部")
  let [order, changeOrder] = useState("上升最快")

  const [videoList, changeVideoList] = useState([])
  useEffect(() => {
    getVideo().then(res => {
      changeVideoList(res.data)
    })
  }, [])

  function changeParam(key) {
    let item = key.slice(0, key.length - 1)
    let index = parseInt(key.slice(key.length - 1, key.length))
    let loadMore = false
    switch (index) {
      case 0:
        area = item
        changeArea(item)
        offset = 0
        break
      case 1:
        type = item
        changeType(item)
        offset = 0
        break
      case 2:
        order = item
        changeOrder(item)
        offset = 0
        break
      case 3:
        offset = parseInt(item)
        changeOffset((offset) => offset + 1)
        loadMore = true
        break
      default:
    }
    console.log(offset)

    getVideo(12, offset * 12, type, area, order).then(res => {
      if (loadMore) {
        changeVideoList(value => {
          return [...value, ...res.data]
        })
      } else {
        changeVideoList(res.data)
      }
    })
  }

  // //监听滚动事件，到底部加载更多
  const loadMore = debounce(function () {
    if (
      (getScrollTop() + getClientHeight() >=
        getScrollHeight() - 200)
    ) {
      changeParam(offset + 1 + "3")
    }
  }, 1500)

  useEffect(() => {
    window.addEventListener("scroll", loadMore)
    return () => {
      window.removeEventListener("scroll", loadMore)
    }
  }, [offset])


  return (
    <VideoWrapper>
      {
        [areaList, classifys, sortList].map((item, index) => {
          return (
            <Menu mode="horizontal"
                  defaultSelectedKeys={item[0].value + String(index)}
                  key={item}
                  onClick={({key}) => changeParam(key)}>
              {
                item.map(item => {
                  return (
                    <Menu.Item key={item.value + String(index)}>
                      {item.label}
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          )
        })
      }
      <VideoListWrapper>
        {
          videoList.map(item => {
            return (
              <TDVideoList videoList={item} key={item.id}/>
            )
          })
        }
      </VideoListWrapper>
      <TDLoadMore/>
    </VideoWrapper>
  )
})

export default TDVideo
