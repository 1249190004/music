import React, {memo, useEffect, useState} from 'react';
import {useDispatch, shallowEqual, useSelector} from "react-redux"

import {
  getSingerListAction
} from "./store/actionCreators";
import {country, classify, ens} from "../../common/local-data";
import {getScrollHeight, getClientHeight, getScrollTop} from "../../utils/load-more-utils";
import {debounce} from "../../utils/optimize-utils";

import {Menu} from 'antd';
import TDLoadMore from "../../components/load-more";
import {SingerWrapped} from "./style"
import TDSingerRCM from "../../components/singer-rcm";

const TDSinger = memo(function () {
  let [offset, changeOffset] = useState(0)
  let [type, changeType] = useState(-1)
  let [area, changeArea] = useState(-1)
  let [initial, changeInitial] = useState(-1)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerListAction())
  }, [dispatch])


  useEffect(() => {
    window.addEventListener("scroll", loadMore)
    return () => {
      window.removeEventListener("scroll", loadMore)
    }
  }, [offset])
  const {singerList = []} = useSelector(state => ({
    singerList: state.getIn(["singer", "singerList"])
  }), shallowEqual)

  function changeParam(key) {
    let loadMore = false
    let item = key.slice(0, key.length - 1)
    switch (parseInt(key.slice(key.length - 1, key.length))) {
      case 0:
        area = item
        offset = 0
        changeArea(item)
        changeOffset(0)
        break
      case 1:
        type = item
        offset = 0
        changeType(item)
        changeOffset(0)
        break
      case 2:
        initial = item
        offset = 0
        changeInitial(item)
        changeOffset(0)
        break
      case 3:
        offset = parseInt(item)
        loadMore = true
        changeOffset((offset) => offset + 1)
        break
      default:
    }
    dispatch(getSingerListAction(40, offset * 40, type, area, initial, loadMore))
  }

  const loadMore = debounce(function () {
    if (
      (getScrollTop() + getClientHeight() >=
        getScrollHeight() - 250)
    ) {
      changeParam(offset + 1 + "3")
    }
  }, 2000)

  return (
    <SingerWrapped>
      {
        [country, classify, ens()].map((item, index) => {
          return (
            <Menu mode="horizontal"
                  defaultSelectedKeys={["-1" + index]}
                  className={index === 2 ? "ens" : ""}
                  key={index}
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
      <TDSingerRCM recommendSinger={singerList}/>
      <TDLoadMore/>
    </SingerWrapped>
  )
})

export default TDSinger
