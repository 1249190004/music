import React, {memo} from 'react';
import {Provider} from "react-redux"
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom';

import {BackTop} from 'antd';
import TDAppHeader from "@/components/app-header";
import TDAppFooter from "./components/app-footer";
import TDAppBackground from "./components/app-background";
import store from "./store";
import routers from "./router";
import {BACK_TOP} from "./common/contants";

const App = memo(function () {
  return (
    <Provider store={store}>
      <Router>
        <TDAppHeader/>
        {renderRoutes(routers)}
        <TDAppFooter/>
        <BackTop>
          <img src={BACK_TOP} alt=""/>
        </BackTop>
      </Router>
      <TDAppBackground/>
    </Provider>
)
})

export default App;
