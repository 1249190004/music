import styled from "styled-components";

export const HeaderWrapper = styled.div`
  box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
  position: fixed;
  top: 0;
  height: 70px;
  z-index: 999;  
  width: 100%;
  .ant-menu-horizontal{
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 70px;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: hsla(0,0%,100%,.68);
    
    li:nth-child(2){
      background: url(${require("@/assets/img/music.png").default}) no-repeat center;
      a {
        &::after{
          width: 0;
        }
        margin: 0;
        color: transparent!important;
      }
    }
    
    .ant-menu-item-selected{
      border-bottom: none!important;
    }
    a{
      transition: all .05s;
    }
    li,a:hover{
      color: #fa2800!important;
      border: none!important;
    }
    
    a.active{
      margin-bottom: 5px;
      display: inline-block;
     
      &::after{
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        display: inline-block;
        background: #fa2800;
        position: absolute;
        bottom: 10px;
        right: 50%;
      }
    }
  }
  
  .ant-menu-horizontal > .ant-menu-item-selected a{
    color: #fa2800;
  }
  
  .search{
    flex: 1;
    text-align: right;
    padding: 0 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .loginInfo{
      position: relative;
      
      &:hover .tool{
        height: 180px;
      }
      .tool{
        z-index: 999999;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: #ffffff;
        border-radius: 5px;
        height: 0;
        transition: all .25s;
        overflow: hidden;
        box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
      }
      
      div {
        width: 115px;
        display: flex;
        padding: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a{
          font-size: 14px;
          margin: 0;
          width: 100px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          svg{
            margin-right: 5px;
          }
          
          &::after{
            content: "";
            width: 0;
          }
        }
      }
    }
    
    img{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: auto;
    }
    
    i,div{
      cursor: pointer;
      padding: 0 15px;
    }
    
    i{
      border-right: 1px solid #cccccc;
      display: flex;
      align-items: center;
      height: 22px;
    }
    
    div{
      vertical-align: top;
      font-size: 15px;
    }
      
  }
  .ant-modal{
    height: 360px!important;
  }
  
`
