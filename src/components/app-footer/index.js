import React, {memo} from 'react';

import {FooterWrapper} from "./style";

const TDAppFooter = memo(function () {
  return (
    <FooterWrapper>
      <p>music</p>
      <div>
        <a href="/">
          <span>
            <i className="iconfont icon-symbol"></i>
          </span>
        </a>
        <a href="https://github.com/marketplace">
          <span>
            <i className="iconfont icon-github"></i>
          </span>
        </a>
      </div>
      <div>
        Copyright © 2012-2021 <a href="/">music 演示站</a>. Designed by every.
      </div>
    </FooterWrapper>
  )
})
export default TDAppFooter
