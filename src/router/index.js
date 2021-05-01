import React from 'react'
import {Redirect} from 'react-router-dom'

const Discover = React.lazy(_ => import("@/views/discover"))
const TDRanking = React.lazy(_ => import( "@/views/ranking"))
const TDSheet = React.lazy(_ => import( "@/views/sheet"))
const TDSinger = React.lazy(_ => import( "@/views/singer"))
const TDVideo = React.lazy(_ => import( "@/views/video"))
const TDRankingDetail = React.lazy(_ => import( "@/views/ranking-detail"))
const TDSingerDetail = React.lazy(_ => import( "@/views/singer-detail"))
const TDAlbumDetail = React.lazy(_ => import( "@/views/album-detail"))
const TDMvDetail = React.lazy(_ => import( "@/views/mv-detail"))
const Error = React.lazy(_ => import( "@/components/error"))
const TDSearch = React.lazy(_ => import( "@/views/search"))
const TDPersonal = React.lazy(_ => import( "@/views/personal"))

const routers = [
  {
    path: "/",
    exact: true,
    render: () => (<Redirect to={"/discover"}/>)
  },
  {
    path: "/discover",
    component: Discover,
  },
  {
    path: "/ranking",
    component: TDRanking,
  },
  {
    path: "/sheet",
    component: TDSheet,
  },
  {
    path: "/singer",
    component: TDSinger,
  },
  {
    path: "/video",
    component: TDVideo,
  },
  {
    path: "/ranking-detail/:id",
    component: TDRankingDetail,
  },
  {
    path: "/singer-detail/:id",
    component: TDSingerDetail,
  },
  {
    path: "/album-detail/:id",
    component: TDAlbumDetail,
  },
  {
    path: "/mv-detail/:id",
    component: TDMvDetail
  },
  {
    path: "/search",
    component: TDSearch
  },
  {
    path: "/personal",
    component: TDPersonal
  },
  {
    path: "*",
    component: Error
  }
]


export default routers
