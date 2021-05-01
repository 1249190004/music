import styled from "styled-components"

export const VideoWrapper = styled.div`
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
`

export const VideoListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1380px;
  margin: 35px auto;
`
