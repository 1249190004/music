import React, {memo} from 'react';

import {Result} from 'antd';

const Error = memo(function () {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  )
})

export default Error
