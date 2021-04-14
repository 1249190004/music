import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {Menu, Pagination} from 'antd';
import {DownOutlined} from "@ant-design/icons"
import TDSheetRCM from "../../components/sheet-rcm";

import {
  getHotSheetAction,
  getCatListAction,
  getSheetListAction
} from "./store/actionCreators";
import {SheetWrapper} from "./styles";

const TDSheet = memo(function () {
  const {SubMenu} = Menu
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotSheetAction())
    dispatch(getCatListAction())
    dispatch(getSheetListAction())
  }, [dispatch])

  const {hotBanners = [], catList = {}, sheetList = []} = useSelector(state => ({
    hotBanners: state.getIn(["sheet", "hotBanners"]),
    catList: state.getIn(["sheet", "catList"]),
    sheetList: state.getIn(["sheet", "sheetList"])
  }), shallowEqual)

  let [title, changeTitle] = useState("全部")
  let [currentIndex, changeIndex] = useState("hot")
  let [offset, changeOffset] = useState(0)

  function changeParam(item, type) {
    switch (type) {
      case 1:
        title = item
        offset = 0
        changeOffset(0)
        changeTitle(item)
        break
      case 2:
        currentIndex = item
        offset = 0
        changeOffset(0)
        changeIndex(item)
        break
      case 3:
        offset = item
        changeOffset(item)
        break
      default:
    }
    dispatch(getSheetListAction(currentIndex, title, 40, 40 * offset))
  }

  return (
    <SheetWrapper>
      <Menu mode="horizontal"
            triggerSubMenuAction="click"
            onClick={item => changeParam(item.key, 1)}>
        <SubMenu key="sub4" title={title}
                 icon={<DownOutlined/>}>
          {
            (catList.categories ? Array.from({...catList.categories, length: 5}) : []).map((item, index) => {
              return (
                <Menu.ItemGroup title={item} key={item}>
                  {
                    catList.sub.map(item => {
                      return item.category === index && <Menu.Item key={item.name}>{item.name}</Menu.Item>
                    })
                  }
                </Menu.ItemGroup>
              )
            })
          }
        </SubMenu>
        <span>热门标签：</span>
        {
          hotBanners.map(item => {
            return (
              <Menu.Item key={item.playlistTag.name}>
                {item.playlistTag.name}
              </Menu.Item>
            )
          })
        }
        <SubMenu key="hot" title="热门"
                 className={"control-type " + (currentIndex === "hot" ? "ant-menu-submenu-active" : "")}
                 popupClassName="subMenu"
                 onTitleClick={_ => changeParam("hot", 2)}/>
        <SubMenu key="new" title="最新"
                 className={"control-type " + (currentIndex === "new" ? "ant-menu-submenu-active" : "")}
                 popupClassName="subMenu"
                 onTitleClick={_ => changeParam("new", 2)}/>
      </Menu>
      <TDSheetRCM recommendSheet={sheetList.total ? sheetList.playlists : []}/>
      {sheetList.total && <Pagination current={offset + 1}
                              total={sheetList.total}
                              showSizeChanger={false}
                              pageSize={40}
                              showTotal={total => `共 ${total} 条`}
                              onChange={page => changeParam(page - 1, 3)}/>}
    </SheetWrapper>
  )
})

export default TDSheet
