import React, {memo} from 'react';

import {LoadMoreWrapper} from "./style";

const TDLoadMore = memo(function () {
  return (
    <LoadMoreWrapper>
      <div className="loading flex-column">
        <div className="loader"/>
        <span>~努力加载中~</span>
      </div>
    </LoadMoreWrapper>
  )
})

export default TDLoadMore
