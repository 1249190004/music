import styled from "styled-components"

export const LyricWrapper = styled.div`
  .lyrics-page{
    position: fixed;
    z-index: 9999;
    background: #ffffff;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 72px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
.dynamic-background {
  --contrast-dynamic-background: 75%;
  --brightness-dynamic-background: 150%;
  background-image: url(${props => props.picUrl + "?param=50y50"});
}

.dynamic-background {
  .top-right,
  .bottom-left {
    z-index: 0;
    width: 140vw;
    height: 140vw;
    position: absolute;
    filter: blur(50px) opacity(0.6) contrast(var(--contrast-dynamic-background))
      brightness(var(--brightness-dynamic-background));
    background-size: cover;
    background-image: url(${props => props.picUrl + "?param=50y50"});
    animation: rotate 150s linear infinite;
  }

  .top-right {
    right: 0;
    top: 0;
    mix-blend-mode: luminosity;
  }

  .bottom-left {
    left: 0;
    bottom: 0;
    animation-direction: reverse;
    animation-delay: 10s;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.info{
  margin-top: 25px;
  position: relative;
  .title{
    text-align: center;
  }
  .singer{
    color: #ff4b2b;
    font-size: 13px;
    text-align: center;
  }
}
.lyrics-panel{
  height: 600px;
  text-align: center;
  overflow: auto;
  position: relative;
  color: #cccccc;
  margin-top: 20px;
  padding-bottom: 200px;
 
  >div{
    height: 40px;
  }
}
.active{
  color: #161e27;
  font-weight: bold;
}
`
