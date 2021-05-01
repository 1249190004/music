import styled from "styled-components"

export const LoginWrapper = styled.div`
  position: absolute;
  z-index: 999;
  left: 70%;
  top: 80%;
  width: 350px;
  height: 455px;
  background-size: cover;
  background: linear-gradient(to left, #F27121, #E94057, #8A2387);

  .menu{
    display: flex;
    color: #ffffff;
    margin-top: 42px;
    margin-left: 37px;
    margin-bottom: 80px;
    cursor:pointer;
    div{
      margin-right: 25px;
    }
  }
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    position: relative;
    padding-bottom: 20px;
    
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #ffffff;
      opacity: .8;
    }
     
    .ant-form-item-control-input-content{
      display: flex;
      justify-content: center;
    }
    .ant-form-item-control-input-content,input,span{
      border-radius: 25px;
      border: none;
    }
    .ant-input-affix-wrapper{
      width: 80%;
      background: rgba(0,0,0,.2)!important;
    }
    .ant-checkbox-wrapper{
      width: 80%;
    }
    .ant-input-prefix{
      color: #ffffff;
    }
    input{
      color: #ffffff;
      background: rgba(0,0,0,0)!important;
    }
    .ant-form-item-explain{
      color: #ffffff;
    }
    Button{
      width: 80%;
      border-radius: 25px;
      height: 27px;
      line-height: 27px;
      span{
        font-size: 11px;
        font-weight: bold;
      }
    }
  }
  &::after{
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    background: #cccccc;
 }
 a{
  text-align: center;
  width: 100%;
  display: inline-block;
  color: #cccccc;
  font-size: 12px;
  margin-top: 20px;
  &:hover{
    color: #ffffff;
  }
 }
`
