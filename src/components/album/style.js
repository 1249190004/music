import styled from "styled-components"

export const AlbumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
  a{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    //justify-content: center;
    flex: 0 0 16%;
    margin-top: 25px;
   }
    
    .tops{
      position: relative;
      
      &:hover::after {
        left: 15px;
      }
     
     &:after{
        content: '';
        position: absolute;
        z-index: -1;
        right: 3px;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        width: 100%;
        padding-top: 100%;
        background-color: #000;
        border-radius: 50%;
        transition: all 0.4s;
     }
      img{
        width: 185px;
        height: 185px;
      }
      span{
        position: absolute;
        right: 5px;
        top: 1px;
        height: 24px;
        padding: 0 9px;
        background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;
        background-size: 100% 24px;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      span i{
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 4px 0 4px 6px;
        border-color: transparent transparent transparent #fff;
        margin-right: 5px;
      }
    }
    .info{
      width: 185px;
      margin-top: 15px;
      h4{
        opacity: .9;
      }
      
      .artists,.time{
        font-size: 12px;
        color: #999;
      }
    }
`
