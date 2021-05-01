import styled from "styled-components"

export const RankingCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  >div{
    display: flex;
    padding: 10px 0;
    img{
      width: 45px;
      height: 45px;
      min-width: 45px;
      border-radius: 50%;
      margin-top: 8px;
    }
    .info{
      width: calc(100% - 55px);
      >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      i{
          font-size: 24px;
          font-weight: 100;
          margin-left: 20px;
          cursor: pointer;
          transition: all 0.4s;
      }
      .tool span{
        font-size: 12px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        margin-top: 2px;
        color: #666;
        font-weight: 200;
        position: relative;
          
        &::after{
            content: "";
            width: 1px;
            height: 13px;
            background: #4a4a4a;
            opacity: 0.7;
            position: absolute;
            top: 6px;
            right: -12px;
        }
      }
    }
    .content{
      font-size: 12px;
      color: #666;
      line-height: 1.6;
      padding: 5px 10px;
      background: #f5f5f5;
      margin-top: 5px;
      border-radius: 3px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      
      >div{
        width: 100%;
      }
      
      .replied{
        margin-top: 10px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        color: #666;
        display: flex;
        flex-wrap: wrap;
      }
      
      span{
        color: #fa2800
      }
    }
    a{
      font-weight: bold;
      opacity: .8;
      font-size: 15px;
      margin-right: 5px;
      margin-bottom: 10px;
      color: #000000!important;
    }
    >div{
      margin-left: 8px;
    }
    .time{
      font-size: 12px;
      color: #a5a5c1;
      font-weight: 200;
    }
  }
`
