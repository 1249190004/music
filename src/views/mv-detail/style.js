import styled from "styled-components"

export const MvDetailWrapper = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  
  .video-brief,.recommend,.left{
      background: #ffffff;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
   }
   
  .left{
     flex: 0 0 74%;
     max-width: 980px;
     .video{
      width: 950px;
      height: 535px;
     }
     video{
      height: 100%;
      width: 100%;
      object-fit: fill
     }
     .desc {
      .tag a{
        font-size: 12px;
        color: #fa2800;
        margin-right: 10px;
      }
      .time-count{
        font-size: 12px;
        color: #999;
        margin: 8px 0;
      }
      .time-count span{
        margin-right: 30px;
      }
      .info{
        display: flex;
      }
      .info span{
        border-radius: 15px;
        padding: 0 15px;
        background: #f2f2f2;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #161e27;
        cursor: pointer;
        font-size: 14px;
        height: 28px;
      }
     }
     .comments{
       margin: 25px 0;
      .title{
        width: 100%;
        height: 50px;
        border-radius: 3px;
        padding: 0 3px;
        border-bottom: 1px solid #f1f1f1;
        i{
          color: #666;
          font-size: 18px;
          display: flex;
          height: 18px;
          line-height: 18px;
          margin-right: 10px;
        }
      }
      h2{
        margin: 15px 0;
        font-size: 16px;
      }
     }
  }
  
  .right{
     flex: 0 0 26%;
     h2{
       border-left: 3px solid #fa2800;
       height: 20px;
       padding-left: 1rem;
       margin-bottom: 15px;
       font-size: 14px;
     }
     .recommend{
        margin-top: 15px;
     }
  }
`
