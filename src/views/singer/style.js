import styled from "styled-components"

export const SingerWrapped = styled.div`
  .ant-menu-horizontal{
    border: none;
    max-width: 1380px;
    margin: 0 auto;
    
    li{
      height: 28px;
      text-align: center;
      line-height: 28px;
      font-size: 13px;
      color: #333;
      border-radius: 14px;
      width: 56px;
      margin-right: 14px!important;
      
      &.ant-menu-item-selected{
        background: #fa2800;
        font-weight: 700;
        color: #fff!important;
      }
      &:nth-child(2){
        width: 56px!important;
        border-radius: 14px!important;
      }
    }
  }
  .ant-menu-horizontal.ens:not(.ant-menu-dark) {
      padding-left: 21px;
      
      > .ant-menu-item{
        margin-left: 0;
        width: 28px;
        border-radius: 50%;
        
        &:nth-child(4){
          margin-left: 30px!important;
        }
      }
      margin-bottom: 30px;
  }
`
