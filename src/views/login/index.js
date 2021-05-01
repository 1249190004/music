import React, {memo} from 'react';

import MD5 from 'js-md5'
import {getPhonePasswordLogin} from "../../services/login";

import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {LoginWrapper} from "./style";

const TDLogin = memo(function (props) {
  const {LoginInfo, isShow} = props
  const cancelEvent = e => {
    e.stopPropagation()
  }

  const onFinish = async values => {
    const info = await getPhonePasswordLogin(values.username, MD5(values.password))
    if (info.code === 200) {
      window.localStorage.setItem('cookie', info.cookie)
      window.localStorage.setItem('token', info.token)
      window.localStorage.setItem('profile', JSON.stringify(info.profile))
      message.success('登陆成功');
      isShow()
      LoginInfo(info.profile)
    } else {
      message.error('登陆失败');
    }
  };
  return (
    <LoginWrapper onClick={e => cancelEvent(e)}>
      <div className="menu">
        <div>SIGN IN</div>
        <div>SIGN UP</div>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Please input your Username!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon"/>}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Keep me Signed in</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"
                  className="login-form-button flex-center">
            SIGN IN
          </Button>
        </Form.Item>
      </Form>

      <a className="login-form-forgot" href="#/">
        Forgot password?
      </a>
    </LoginWrapper>
  )
})

export default TDLogin
