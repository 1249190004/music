import styled from "styled-components"

export const VideoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 325px;
  flex: 0 0 25%;
  align-items: center;
  .video-content{
    position: relative;
    width: 325px;
    height: 183px;
    overflow: hidden;
    img{
      width: 325px;
      height: 183px;
    }
    >div:first-of-type{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: 60px!important;
      opacity: 0;
      transform: scale(1.5);
      background: rgba(0,0,0,0.3) url(${require("@/assets/img/play.svg").default}) no-repeat center;
      transition: all ease-out .35s;
      cursor: pointer;
    }
    
    &:hover div:first-of-type{
      opacity: 1;
      transform: scale(1);
    }
    >div:last-of-type{
      width: 100%;
      height: 35px;
      background: rgba(0,0,0,0.6);
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      color: #ffffff;
    }
    >div,>span{
      position: absolute;
    }
    >span:last-of-type{
      right: 8px;
      top: 3px;
      height: 24px;
      padding: 9px;
      background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;
      background-size: 100% 24px;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      i{
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px 0 4px 6px;
        border-color: transparent transparent transparent #fff;
        margin-right: 5px;
      }
    }
  }
  h3{
     font-size: 14px;
     font-weight: 500;
     margin-top: 8px;
     justify-content: flex-start;
     width: 325px;
     padding-left: 9px;
     i{
      margin-left: -4px;
     }
  }
  p{
    font-size: 10px;
    width: 325px;
    color: #a5a5c1;
    padding-left: 9px;
  }
  
  margin-bottom: 20px;
`
