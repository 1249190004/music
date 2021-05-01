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
    
  .ant-menu .ant-menu-item:nth-child(24){
    margin-right: 280px!important;
  }
`
