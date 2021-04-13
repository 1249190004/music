import React from 'react'

import {Redirect} from 'react-router-dom'

import Discover from "@/views/discover";

const routers = [
  {
    path: "/",
    exact: true,
    render: () => (<Redirect to={"/discover"}/>)
  },
  {
    path: "/discover",
    component: Discover,
    routers: []
  }
]


export default routers
