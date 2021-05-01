import styled from "styled-components"

export const ArtistWrapper = styled.div`
   display: flex;
   align-items: center;
   height: 50px;
   cursor: pointer;
   padding-right: 30px;
   background: #ffffff;
   .play-icon {
      //display: none;
      height: 16px;
      min-width: 18px;
      overflow: hidden;
      .line {
        width: 2px;
        height: 100%;
        margin-left: 2px;
        background-color: #ff410f;
        animation: play .9s linear infinite alternate;
      }
      .line:nth-child(1){
        animation-delay: -1.2s;
      }
      .line:nth-child(3){
        animation-delay: -1.5s;
      }
      .line:nth-child(4){
        animation-delay: -.9s;
      }
      .line:nth-child(5){
        animation-delay: -.6s;
      }
   }
   &.active{
    color: #ff4b2b;!important;
   }
   
   &:hover >div:first-of-type{
     span{
       display: none;
     }
     i{
       display: inline-block;
       font-size: 28px;
      }
    }
   &:nth-child(odd){
     background: #f7f7f7;
   }
   
   &:first-of-type{
     background: #fafafa!important;
     color: #999999;
     cursor: auto;
   }
   
   &:hover{
     background: #e8e9ed;
   }
   
   >div:first-of-type,.number{
     flex: 0 0 9%; 
     text-align: center;
   }
   
   >div:first-of-type{
     i{
       display: none;
     }
   }
   
   .song{
      flex: 0 0 40%;
      max-width: 40%;
      display: flex;
      align-items: center;
      img{
        border-radius: 5px;
        height: 35px;
        width: 35px;
        margin-right: 12px;
      }
      span{
        display: inline-block;
        max-width: calc(100% - 47px);
      }
   }
   
   .singer{
      flex: 0 0 25%;
      padding-right: 45px;
   }
   
   .album{
     flex: 0 0 20%;
     padding-right: 45px;
   }
   @keyframes play {
    0% {
     transform: translateY(0)
    }

    to {
    transform: translateY(85%)
    }
  }
`
