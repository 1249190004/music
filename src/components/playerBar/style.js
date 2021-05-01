import styled from "styled-components"

export const PlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: ${props => (props.height ? 72 : 0) + "px"};
  background: #fff;
  overflow: hidden;
  transition: all .3s ease-in-out;
  right: 0;
  left: 0;
  padding: 0 10px 0 20px;
  justify-content: space-between;
  
  img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-right: 30px;
  }
  
  .info{
    margin-right: 15px;
    flex-shrink: 0;
    width: 120px;
    
    h2{
      font-size: 14px;
      color: #333;
      margin-bottom: 15px;
    }
    .singer{
      font-size: 12px;
      color: #999;
    }
  }
  
  .player-btn{
    i{
      color: #161e27;
      cursor: pointer;
    }
    .icon-pause,.icon-play{
      font-size: 60px;
      margin: 0 10px;
    }
    .icon-prev,.icon-next{
       font-size: 40px;
    }
  }
  
  .progress{  
     width: 650px;
     margin-left: 80px;
     .ant-slider{
        width: 460px;
        height: 3px;
        display: flex;
        align-items: center;
        margin: 0 20px;
        justify-content: center;
    
        .ant-slider-step,.ant-slider-rail{
            height: 3px;
            width: 460px;
            border-radius: 2px;
        }
     }
  }
  
  .ant-slider-track{
      background: #ff4b2b!important; 
      transition: all .1s;   
   }
   .ant-slider-handle{
      border: 2px solid #ff4b2b!important;
      width: 11px;
      height: 11px;
  }
  
  .volume-wrap{
      width: 180px;
      margin-left: 40px;
      margin-right: 80px;
    i{
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
      color: #161e27;
    }
    
    .ant-slider{
        width: 145px;
        height: 3px;
        display: flex;
        align-items: center;
     }
  }
  
  .tool{
    i{
      color: #161e27;
      font-size: 26px;
      margin: 0 15px;
      cursor: pointer;
    }
  }
  
`
