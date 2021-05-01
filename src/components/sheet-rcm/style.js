import styled from "styled-components"

export const SheetRCMWrapper = styled.div`
    
  > div{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    justify-content: flex-start;
  }
  a{
    color: #cccccc;
    flex: 0 0 12.5%;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2{
      display: inline-block;
      width: 132px;
      font-size: 14px;
      margin-top: 10px;
    }
    
    &:hover{
    
      .singerItem::before,.singerItem::after{
        background: rgba(250,40,0,0.1);
      }
      
      .singerItem::after{
        left: 10px;
      }
    }
  }
  img{
    border-radius: 4px;
    height: 132px;
    z-index: 2;
    position: relative;
  }
`

export const SheetRCMItemWrapper = styled.div`
  position: relative;
  width: 132px;
  background-color: #d9d9d9;
  border: 0.5px solid #c4c4c4;
  border-radius: 5px;
  z-index: 2;
  
  span{
    position: absolute;
    z-index: 99;
    right: 8px;
    top: 1px;
    height: 24px;
    width: auto;
    padding: 5px;
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
    &::before,&::after{
      content: "";
      width: 132px;
      height: 132px;
      display: inline-block;
      background-color: #d9d9d9;
      position: absolute;
      top: 0;
      transition: all 0.4s;
    }
    &::before{
      border: 0.5px solid #d6d6d6;
      left: 5px;
      transform: scale(0.85);
      transform-origin: 100% 50%;
      z-index: 1;
      border-radius: 2px;
    }
    
    &::after{
      left: 8px;
      border: 0.5px solid #c4c4c4;
      transform: scale(0.73);
      transform-origin: 100% 50%;
      z-index: -2;
      border-radius: 2px;
      opacity: 0.5;
      box-sizing: border-box;
    }
`
