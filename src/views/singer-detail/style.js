import styled from "styled-components"

export const SingerDetailWrapper = styled.div`
  margin-top: -30px;
  .top{
    height: 580px;
    width: 100%;
    background: url(${require("@/assets/img/top-bg.jpg").default}) center no-repeat;
    background-size: cover;
    position: relative;
    .top-mask{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      
      .bottom-triangle{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 137px;
        background: url(${require("@/assets/img/arrow-lr.png").default}) center;
        z-index: 1;
      }
      
      .singer-introduce{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      
      .avatar{
        &:hover{
          box-shadow: 0 5px 20px 0 rgb(255 255 255 / 80%);
        }
        position: relative;
        overflow: hidden;
        &,img{
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #fff;
        }
        img{
           border: 3px solid rgba(255,255,255,0.6);
        }
        .level{
          width: 100%;
          height: 25px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.8);
          text-align: center;
          line-height: 25px;         
        }
      }
      
      .name{
        margin-top: 20px;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        line-height: 24px;
        i{
          margin-left: 5px;
        }
      }
      
      .follow{
        margin: 24px 0 30px;
        padding: 0;
        height: 36px;
        width: 96px;
        font-size: 12px;
        line-height: 36px;
        color: #fff;
        cursor: pointer;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.6);
        transition: all 0.15s ease-in-out;
        
        &:hover{
          background: rgba(255,255,255,0.1);
          border: 1px solid #fff;
        }
      }
      
      .desc{
        width: 740px;
        height: 48px;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        line-height: 24px;
        font-weight: bold;
        text-align: center;
      }
      ul{
      margin-top: 25px;
        li{
          color: #ffffff;
          margin: 0 50px;
          text-align: center;
          .num{
            margin-bottom: 8px;
            font-size: 24px;
            line-height: 24px;
            color: #fff;
          }
          .text{
            font-size: 14px;
            line-height: 14px;
            color: rgba(255,255,255,0.6);
          }
        }
      }
    }
  }
  .bottom{
    margin: 15px auto 25px;
    flex-direction: column;
    width: 1380px;
    li{
      font-weight: bold;
    }
  }
  .mv{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 45px 0;
  }
  .similar{
    margin-top: 25px;
  }
`

export const ArtistDescWrapper = styled.div`
  h2{
    text-align: center;
    position: relative;
    margin: 35px 0;
    
    &:after{
      content: '';
      width: 40px;
      height: 2px;
      background: #fa2800;
      position: absolute;
      left: 50%;
      bottom: -10px;
      margin-left: -20px;
    }
  }
  
  p{
    line-height: 1.7;
  }
  h4{
    margin: 15px 0 10px;
  }
  
`
