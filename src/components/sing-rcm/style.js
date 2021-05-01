import styled from "styled-components"

export const SingRCMWrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const SingRCMItemWrapper = styled.div`
    flex: 0 0 49%;
    min-width: 49%;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #fff;
    justify-content: start;
    padding: 0 2%;
    border-radius: 5px;
    position: relative;
    align-items: center;
    box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
    
    >div:first-of-type{
      height: 44px;
      width: 28px;
      position: relative; 
      cursor: pointer;
      span{
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 44px; 
        text-align: center;
        font-weight: bold;
      }  
      span,i{
        position: absolute;
        top: 0;
      }  
      i{
        display: none;
        width: 28px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: 500;
      }
      &:hover{
        span{
          display: none;
        }
        i{
          display: inline-block;
        }
      }
    }
    
    .singer{
      font-size: 12px;
    }
    
    >div:last-of-type{
      display: flex;
      flex: 0 0 24%;
      width: 24%;
      flex-direction: column;    
      span:first-of-type{
        font-weight: bold;
      } 
    }
    
    img{
      width: 55px;
      margin: 0 30px;
    }
    
    > span:last-of-type{
      flex: 1;
      text-align: right;
      font-weight: bold;
    }
    
    h3{
      width: 210px;
      position: relative;
      padding-left: 25px;
    }
`
