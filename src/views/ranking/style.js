import styled from "styled-components"

export const RankingWrapper = styled.h2`
    width: 100%;
    position: relative;
    font-size: 16px;
    letter-spacing: 1px;
    max-width: 1380px;
    margin: 15px auto;
    //top: 40px;
    padding-left: 25px;
    
    &::before{
      content: "";
      position: absolute;
      top: 45%;
      left: 10px;
      width: 3px;
      height: 20px;
      background: #fa2800;
      transform: translate(0%, -50%);
    }
`
