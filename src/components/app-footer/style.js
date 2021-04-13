import styled from "styled-components"

export const FooterWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: #161e27;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  
  p{
    width: 100%;
    position: relative;
    font-size: 12px;
    letter-spacing: 1px;
    color: #ffffff;
    max-width: 1380px;
    margin: 25px auto;
    padding: 20px 10px;
    //top: 40px;
    
    &::before{
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 3px;
      height: 15px;
      border-radius: 5px;
      background: #fa2800;
      transform: translate(0%, -50%);
    }
    
     &::after{
      content: "music";
      position: absolute;
      color: #ababab;
      top: 100%;
      left: 3px;
      width: 3px;
      height: 15px;
      border-radius: 5px;
      transform: translate(0%, -50%);
    }
  }
  
  div:first-of-type{
    width: 100%;
    display: flex;
    max-width: 1380px;
    margin: 10px auto;
    
    span{
    width: 34px;
    height: 34px;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    background-color: #232a31;
    border-color: #232a31;
    color: #6d7685;
    display: flex;
    font-weight: 400;
    margin-right: 8px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      &:hover{
        background: #11181f;
        i::before{
          color: #fff;
        }
      }
    }
  }
  
  div:last-of-type{
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-left: 80px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    color: #6d7685;
    font-size: 12px;
    border-top: 1px solid #232a31;
      a{
         color: #6d7685;
         &:hover{
          color: #ffffff;
         }
      }
  }
`
