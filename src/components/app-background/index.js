import React, {memo} from 'react';
import {BackgroundWrapper} from "./style"

const TDAppBackground = memo(function () {
  return (
    <BackgroundWrapper>
      <div className="fly bg-fly-circle1"></div>
      <div className="fly bg-fly-circle2"></div>
      <div className="fly bg-fly-circle3"></div>
      <div className="fly bg-fly-circle4"></div>
    </BackgroundWrapper>
  )
})

export default TDAppBackground
