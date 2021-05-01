import React, {memo, useState, useEffect, useRef} from 'react';
import {NavLink, useHistory} from 'react-router-dom'

import {headerLinks} from "@/common/local-data";
import {getSearchHot} from "../../services/search";

import {Menu, Modal, Input, message} from 'antd';
import {UserOutlined, SettingOutlined, PoweroffOutlined, GoldOutlined} from "@ant-design/icons"
import Image from "../image";
import {HeaderWrapper} from "./style";
import TDLogin from "../../views/login";

const TDAppHeader = memo(function () {
  const currentHref = window.location.pathname === "/" ? "/discover" : window.location.pathname
  const [href, setCurrentHref] = useState(currentHref)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchHot, changeSearchHot] = useState([])
  const [searchHistory, changeSearchHistory] = useState([])
  const [show, changeShow] = useState(false)
  const [loginInfo, changeLoginInfo] = useState(JSON.parse(window.localStorage.getItem("profile")))
  const history = useHistory()
  const searchRef = useRef()

  useEffect(() => {
    getSearchHot().then(res => {
      changeSearchHot(res.result ? res.result.hots : [])
    })
  }, [])

  useEffect(() => {
    window.addEventListener("click", isShow)
  }, [])

  const isShow = _ => changeShow(false)
  const showModal = () => {
    setIsModalVisible(true);
    changeSearchHistory(JSON.parse(sessionStorage.getItem("_search_")) || [])
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    searchRef.current.state.value = ""
    setIsModalVisible(false);
  };

  const login = (e, isShow) => {
    changeShow(isShow)
    e.stopPropagation()
  }

  const LoginInfo = info => {
    changeLoginInfo(info)
  }

  const quitLogin = _ => {
    changeLoginInfo("")
    window.localStorage.clear()
    message.success("退出登录")
  }

  function handleSearch(e) {
    history.push("/search?keyword=" + e.target.value)
    handleCancel()
  }

  function clearHistorySearch() {
    changeSearchHistory([])
    sessionStorage.clear()
  }

  function closeSelectedContent(e, index) {
    // 阻止默认点击事件，事件冒泡
    e.preventDefault()
    e.stopPropagation()
    let prevSearchContent = JSON.parse(sessionStorage.getItem("_search_")) || []
    prevSearchContent.splice(index, 1)
    changeSearchHistory(prevSearchContent)
    sessionStorage.setItem("_search_", JSON.stringify(prevSearchContent))
  }

  return (
    <HeaderWrapper>
      <Menu mode="horizontal"
            selectedKeys={href}
            onClick={e => setCurrentHref(e.key === "/" ? "/discover" : e.key)}>
        {
          headerLinks.map(item => {
            return (
              <Menu.Item key={item.link}>
                <NavLink to={item.link}>
                  {item.title}
                </NavLink>
              </Menu.Item>
            )
          })
        }
        <div className="search">
          <i className="iconfont icon-search" onClick={showModal}/>
          {!loginInfo && <div onClick={e => login(e, true)}>登录</div>}
          {loginInfo && <div className="loginInfo">
            <Image src={loginInfo.avatarUrl} size={50}/>
            <div className="tool">
              <div>
                <NavLink to={"/personal?userId=" + loginInfo.userId}><UserOutlined/>个人主页</NavLink>
                <NavLink to={"/"}><GoldOutlined/>我的等级</NavLink>
                <NavLink to={"/"}><SettingOutlined/>个人设置</NavLink>
                <NavLink to={"#"} onClick={quitLogin}><PoweroffOutlined/>退出登录</NavLink>
              </div>
            </div>
          </div>}
        </div>
      </Menu>

      {/*弹出登录框*/}
      {show && <TDLogin LoginInfo={LoginInfo} isShow={isShow}/>}

      {/*弹出搜索框*/}
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskStyle={{"backdropFilter": "blur(3px)"}}
        width={790}
        transitionName=""
        maskTransitionName="">
        <div className="modal-bg">
          <div className="modal-bg-item"/>
          <Input onPressEnter={e => handleSearch(e)}
                 placeholder="请输入搜索关键词并按回车键…"
                 bordered={false}
                 ref={searchRef}/>
        </div>
        {searchHistory.length > 0 &&
        <div>
          <div>
            <i className="iconfont icon-search-history"/>
            <span>历史搜索</span>
          </div>
          <h2 onClick={clearHistorySearch}>清空</h2>
        </div>}
        <div className="historySearch">
          {
            searchHistory.map((item, index) => {
              return (
                <NavLink to={"/search?keyword=" + item}
                         key={item}
                         onClick={handleCancel}>
                  {item}
                  <span className="close-dark" onClick={e => closeSelectedContent(e, index)}/>
                </NavLink>
              )
            })
          }
        </div>

        <div>
          <i className="iconfont icon-hot"/>
          <span>热门搜索</span>
        </div>
        <div className="hotSearch">
          {
            searchHot.map(item => {
              return (
                <NavLink to={"/search?keyword=" + item.first}
                         key={item.first}
                         onClick={handleCancel}>{item.first}</NavLink>
              )
            })
          }
        </div>
      </Modal>
    </HeaderWrapper>
  )
})
export default TDAppHeader
