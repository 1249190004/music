import styled from "styled-components"

export const AlbumDetailWrapper = styled.div`
   max-width: 1380px;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   align-items: flex-start;
   
   .comment,.avatars,.recommend,.left{
      background: #ffffff;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
   }
   
   .left{
      flex: 0 0 72%;
      min-width: 950px;
      
      .top{
        display: flex;
      
        .avatar{
          position: relative;
          width: 200px;
          height: 200px;
          flex-shrink: 0;
          img{
            border-radius: 8px;
            z-index: 1;
            position: relative;
            width: 200px;
            height: 200px;
          }
          &::before{
            content: '';
            width: 95%;
            height: 95%;
            background: rgba(0,0,0,0.2);
            display: block;
            position: absolute;
            top: 15px;
            right: -6px;
            z-index: 0;
            border-radius: 8px;
          }
        }
        
        .info{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 35px;
          
          h1{
            font-size: 24px;
            font-weight: 700;
            line-height: 24px;
            padding-top: 10px;
          }
          .spread{
            justify-content: flex-start;
            color: #ff4b2b;
            cursor: pointer;
            i{
              display: flex;
              height: 16px;
              width: 16px;
              font-size: 16px;
              line-height: 16px;
            }
          }
          .user{
            display: flex;
            width: 330px;
            justify-content: flex-start;
            align-items: center;
            padding: 10px 0;
            img{
              border-radius: 50%;
              height: 30px;
              width: 30px;
            }
            a{
              padding: 0 25px;
            }
            p{
              font-size: 14px;
              color: #808080;
            }
          }
        }
      }
      
      .content{
        .tool-head{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 15px 0;
        }
        .tool-head .play-item,.tool-head .collection-item{
          background: #fa2800;
          color: #fff;
          padding: 5px 15px;
          border-radius: 50px;
          cursor: pointer;
          margin-left: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s;
        }
        
        .tool-head .collection-item{
          background: #f2f2f2;
          color: #333;
          border-radius: 50px;
          cursor: pointer;
        }
        
        .tool-head i{
          padding-right: 5px;
        }
      }
   }
   
   .right{
      flex: 0 0 25%;
      max-width: 25%;
      .avatars{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        img{
          width: 40px;
          height: 40px;
          border-radius: 5px;
          padding: 3px;
          cursor: pointer;
        }
      }
      h3{
          width: 100%;  
          border-left: 3px solid #fa2800;
          height: 20px;
          box-sizing: border-box;
          padding-left: 12px; 
          margin-left: 3px;
          margin-bottom: 8px;
        }
      .recommend{
        margin-bottom: 25px;
        width: 100%;
        a{
          display: flex;
          margin: 15px 0;
          img{
            width: 50px;
            height: 50px;
            border-radius: 5px;
          }
          p{
            padding-left: 10px;
            width: 90%;
          }
          p.name{
            font-weight: bold;
          }
        }
        div{
          width: 100%;
        }
        p.nickname{
          font-size: 12px;
          color: #a5a5c1!important;
          margin-top: 5px;
        }
      }
   }
`
