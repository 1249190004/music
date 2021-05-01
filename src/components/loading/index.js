import React, {memo} from 'react';

import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {LoadingWrapper} from "./style";

const TDLoading = memo(function () {
  const antIcon = <LoadingOutlined style={{fontSize: 40}} spin/>;

  return (
    <LoadingWrapper className="flex-center">
      <Spin indicator={antIcon}
            size="large" className="flex-center"/>
    </LoadingWrapper>
  )
})

export default TDLoading
