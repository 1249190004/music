import React, {memo} from 'react';

import empty from "@/assets/img/empty.png"

const Empty = memo(function () {
  return (
    <div className="flex-column" style={{"width": "100%"}}>
      <img src={empty} alt="" style={{"width": "300px"}}/>
      哎呀，这里什么都没有~
    </div>
  )
})
export default Empty
