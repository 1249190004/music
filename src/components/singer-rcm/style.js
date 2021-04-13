import styled from "styled-components"

export const SingerRCMWrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  div{
    flex: 0 0 10%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
    cursor: pointer;
    
    &:hover{
      img{
        transform: scale(1.05);
      }
    }
    img{
      transition: all .15s;
      border-radius: 50%;
      box-shadow: 0 0 5px;
      width: 108px;
    }
    h3,span{
      width: 100%;
      text-align: center;
    }
    h3{
      margin-top: 10px;
    }
    span{
      font-size: 12px;
      color: #fa2800;
    }
  }
`

