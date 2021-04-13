import styled from "styled-components";

export const HeaderWrapper = styled.div`
  box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
  position: fixed;
  top: 0;
  height: 70px;
  z-index: 999;  
  width: 100%;
  .ant-menu-horizontal{
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 70px;
    
    li:nth-child(2){
      background: url(${require("@/assets/img/music.png").default}) no-repeat center;
      a {
        &::after{
          width: 0;
        }
        margin: 0;
        color: transparent!important;
      }
    }
    
    .ant-menu-item-selected{
      border-bottom: none!important;
    }
    a{
      transition: all .05s;
    }
    li,a:hover{
      color: #fa2800!important;
      border: none!important;
    }
    
    a.active{
      margin-bottom: 5px;
      display: inline-block;
     
      &::after{
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        display: inline-block;
        background: #fa2800;
        position: absolute;
        bottom: 10px;
        right: 50%;
      }
    }
   
  }
  
  .ant-menu-horizontal > .ant-menu-item-selected a{
    color: #fa2800;
  }
  
  .search{
    flex: 1;
    text-align: right;
    padding: 0 70px;
    
    i,span{
      cursor: pointer;
      padding: 0 15px;
    }
    
    i{
      border-right: 1px solid #cccccc;
    }
    
    span{
      vertical-align: top;
      font-size: 15px;
    }
      
  }
  
`
