import styled from "styled-components"

export const SheetWrapper = styled.div`
  width: 1380px;
  margin: 0 auto;
  .ant-menu{
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 5px 0 5px 5px;
      background-color: #ffffff;
      box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
      
      li{
        border: none!important;
        &:hover{
          color: #ff4b2b!important;
        }
      }
      
      .ant-menu-submenu{
        margin-left: 0;
        
      }
      li:nth-child(2) .ant-menu-submenu-title{
        font-size: 16px;
        //width: 85px;
        height: 90%;
        background: #fa2800;
        border-radius: 5px 0px 5px 5px;
        color: #fff;
       
        span{
          vertical-align: top;
        }
      }
      .ant-menu-submenu-title{
          padding:0 15px;
      }
  }
  
  .ant-pagination{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    
    li,button{
      background-color: #f4f4f5;
      color: #606266;
      border-radius: 2px;
      border: none;
      font-size: 13px;
      &:hover a{
        color: #ff4b2b;
      }
    }
    
    li.ant-pagination-total-text{
      background: #ffffff;
    }
    .ant-pagination-item-active,
    .ant-pagination-item-active a{
      background-color: #fa2800;
      color: #ffffff!important;
    }
  }  
  
`
