import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {getSizeImage} from "@/utils/format-utils";

import {Carousel} from "antd"
import TDSheetRCM from "../../components/sheet-rcm";
import TDSingRCM from "../../components/sing-rcm";
import TDSingerRCM from "../../components/singer-rcm";
import {
  getTopBannerAction,
  getRecommendSheetAction,
  getRecommendSingAction,
  getRecommendSingerAction
} from "./store/actionCreators";
import {
  BannersWrapper,
  TitleWrapper
} from "./style";

const Discover = memo(function () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
    dispatch(getRecommendSheetAction())
    dispatch(getRecommendSingAction())
    dispatch(getRecommendSingerAction())
  }, [dispatch])

  const {topBanners = [], recommendSheet = [], recommendSing = [], recommendSinger = []} = useSelector(state => ({
    topBanners: state.getIn(["discover", "topBanners"]),
    recommendSheet: state.getIn(["discover", "recommendSheet"]),
    recommendSing: state.getIn(["discover", "recommendSing"]),
    recommendSinger: state.getIn(["discover", "recommendSinger"])
  }), shallowEqual)

  return (
    <div>
      <Carousel autoplay>
        {
          [0, 1, 2].map(item => {
            return (
              <BannersWrapper key={item}>
                {
                  topBanners.slice(item * 3, (item + 1) * 3).map(iten => {
                    return <img src={getSizeImage(iten.imageUrl, 430)} alt="" key={iten.scm}/>
                  })
                }
              </BannersWrapper>
            )
          })
        }
      </Carousel>

      <TitleWrapper>推荐歌单</TitleWrapper>
      <TDSheetRCM recommendSheet={recommendSheet}/>

      <TitleWrapper>推荐新歌曲</TitleWrapper>
      <TDSingRCM recommendSing={recommendSing}/>

      <TitleWrapper>推荐歌手</TitleWrapper>
      <TDSingerRCM recommendSinger={recommendSinger}/>
    </div>
  )
})

export default Discover
