import React from 'react'

import {Redirect} from 'react-router-dom'

import Discover from "@/views/discover";
import TDRanking from "@/views/ranking";
import TDSheet from "@/views/sheet";

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
  }
]


export default routers
