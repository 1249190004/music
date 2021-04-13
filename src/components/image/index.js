import React, {memo, useEffect} from 'react';
import {getSizeImage, lazyLoad} from "../../utils/format-utils";
import loading from "../../assets/img/loading.gif";
import {LOADING_IMAGE_ERROR} from "../../common/contants";

const Image = memo(function (props) {
  const {src, size} = props
  useEffect(() => {
    lazyLoad(document.querySelectorAll("[data-src]"))
  })
  return (
    <img data-src={getSizeImage(src, size)}
         src={loading}
         alt=""
         onError={e => e.target.src = LOADING_IMAGE_ERROR}/>
  )
})

export default Image
