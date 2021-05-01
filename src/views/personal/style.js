import styled from "styled-components"

export const PersonalWrapper = styled.div`
  margin-top: -30px; 
  
  .main{
    display: flex;
    align-items: flex-start;
  }  
  .banner{
    width: 100%;
    height: 350px;
    background: url(${require("@/assets/img/personal.jpg").default}) center fixed;
    background-size: cover;
    position: relative;
    &::before{
      content: "";
      width: 100%;
      height: 100%;
      //background: #8A2387;
      background: linear-gradient(to left, #F27121, #E94057, #8A2387);
      opacity: 0.3;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  
  .main{
    max-width: 1380px;
    margin: 0 auto;
    
    .left{
      width: 350px;
      //max-height: 500px;
      position: relative;
      top: -60px;
      margin-right: 20px;
      background: #fff;
      border-radius: 5px;
      padding-bottom: 30px;
      box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
      .layer{
        height: 140px;
        background-image: url("http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg");
        width: 100%;
        position: relative;
        border-radius: 5px 5px 0 0;
        background-size: cover;
        
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          background: #8A2387;
          background: linear-gradient(to left, #F27121, #E94057, #8A2387);
          opacity: 0.3;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      
      .card{
        margin-top: -20px;
        padding: 0 15px 0 30px;
        width: 100%;
        justify-content: space-between;
        img{
          width: 64px;
          height: 64px;
          max-width: 64px;
          border-radius: 3px;
          z-index: 8;
        }
        img,h2{
          flex: 0 0 50%;
        }
        h2,button{
          margin-top: 20px;
        }
        button{
          background: #fa2800;
          cursor: pointer;
          border: 1px solid #fa2800;
          padding: 2px 15px;
          font-size: 12px;
          color: #fff;
          border-radius: 30px;
          font-weight: 400;
        }
      }
      .profile{
        padding: 0 40px;
        margin-top: 10px;
        .tag{
          position: relative;
          font-size: 13px;
          padding-left: 15px;
          height: 24px;
          line-height: 24px;
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          
          &::before{
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #fa2800;
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -3px;
          }
        }
      }
      
      .follow{
        display: flex;
        margin: 15px 30px 0;
        padding-top: 15px;
        li{
          width: 33%;
          text-align: center;
          font-size: 14px;
          color: #958ebb;
          display: flex;
          flex-direction: column;
          span{
            font-size: 13px;
          }
        }
      }
      
      .foot{
        width: 100%;
        padding: 0 30px;
        margin-top: 30px;
        a{
          display: block;
          width: 50%;
          text-align: center;
          margin: 0 3% 10px 3%;
          padding: 10px 0;
          background: #ff416c;
          background: linear-gradient(to right, #ff4b2b, #ff416c);
          color: #fff;
          border-radius: 5px;
          font-size: 14px;
        }
      }
    }
    
    .center{
      width: 640px;
      background: #fff;
      position: relative;
      margin-top: 40px;
      margin-right: 20px;
      border-radius: 5px;
      padding: 15px;
      box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
      .top{
        display: flex;
        justify-content: space-between;
        
        .order{
          border-left: 3px solid #fa2800;
          height: 20px;
          padding-left: 1rem;
          margin-bottom: 15px;
          font-weight: bold;
          
          span{
            font-weight: 100;
            color: #666;
            font-size: 12px;
            margin-left: 5px;
          }
        }
      }
      
      .ant-menu{
      
      .ant-menu-item-selected{
        color: #ff4b2b;
      }
        li{
          font-weight: 100;
          color: #666;
          font-size: 12px;
          width: 50px;
          margin: 0 5px;
          position: relative;
          
          &:nth-child(2)::after{
            content: "";
            width: 1px;
            height: 13px;
            background: #999;
            position: absolute;
            top: 50%;
            margin-top: -7px;
            margin-left: 5px;
            display: inline-block;
          }
        }
      }
    }
    
    .right{
      width: 350px;
      margin-top: 40px;
      .my-module,.collect-module{
        padding: 15px;
        width: 100%;
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #FFFFFF;
        box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
        h3{
          border-left: 3px solid #fa2800;
          height: 20px;
          padding-left: 1rem;
          margin-bottom: 15px;
          font-weight: bold;
        }
      }
      .sheetRcm{
        display: flex;
        justify-content: space-between;
      }
    }
  }
`
