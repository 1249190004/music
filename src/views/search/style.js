import styled from "styled-components"

export const SearchWrapper = styled.div`
  width: 100%;
  margin-top: -30px;
   
  .banner{
    width: 100%;
    height: 250px;
    background: url(${require("@/assets/img/personal.jpg").default}) center fixed;
    background-size: cover;
    position: relative;
    .search{
       width: 100%;
       height: 100%;
       span{
          background: #f5f5f5;
      } 
      .ant-input-affix-wrapper{
          border: none;
          width: 47%;
      }
    }
    input{
      height: 45px;
      width: 100%;  
      flex: 1;
      border: none;
      margin-right: 24px;
      padding-left: 10px;
      background: #f5f5f5;
    }
    &::before{
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
    .content{
     max-width: 1380px;
     padding-right: 15px;
     padding-left: 15px;
     margin: 25px auto;
     
     .video{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
     }
    }
  .menu{
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    h1{
      font-size: 22px;
      font-weight: 600;
      line-height: 30px;
      margin-right: 30px;
      opacity: .9;
    }
    .ant-menu-item-selected::after{
      position: absolute;
      content: "";
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 6px;
      background: #fa2800;
      opacity: 0.5;
    }
  }
  
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #4a4a4a;
  opacity: .8;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #4a4a4a;
  opacity: .8;

}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #4a4a4a;
  opacity: .8;
}
`
