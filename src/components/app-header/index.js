import React, {memo, useState} from 'react';
import {NavLink} from 'react-router-dom'

import {headerLinks} from "@/common/local-data";

import {Menu, Modal} from 'antd';
import {HeaderWrapper} from "./style";

const TDAppHeader = memo(function () {
  const currentHref = window.location.pathname === "/" ? "/discover" : window.location.pathname
  const [href, setCurrentHref] = useState(currentHref)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <i className="iconfont icon-search" onClick={showModal}></i>
          <span>登录</span>
        </div>
      </Menu>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </HeaderWrapper>
  )
})
export default TDAppHeader
