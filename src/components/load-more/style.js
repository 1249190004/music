import styled from "styled-components"

export const LoadMoreWrapper = styled.div`
  .loading {
    span {
      margin-top: -30px;
      font-size: 12px;
      margin-bottom: 25px;
    }
  }
  .loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 3em;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    background: #fa2800;
  }
  .loader,
  .loader:before,
  .loader:after {
    animation: loader 1s infinite ease-in-out;
  }
  .loader:before,
  .loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes loader {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`
