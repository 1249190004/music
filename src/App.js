import React, {memo, Suspense} from 'react';
import {Provider} from "react-redux"
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom';

import {BackTop, Skeleton} from 'antd';
import TDAppHeader from "@/components/app-header";
import TDAppFooter from "./components/app-footer";
import TDAppBackground from "./components/app-background";
import store from "./store";
import routers from "./router";
import {BACK_TOP} from "./common/contants";
import ScrollToTop from "./components/scrollToTop"
import TDPlayMusicUrl from "./components/playerBar";

const App = memo(function () {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <TDPlayMusicUrl>
            <TDAppHeader/>
            <Suspense fallback={<Skeleton active/>}>
              {renderRoutes(routers)}
            </Suspense>
            <BackTop>
              <img src={BACK_TOP} alt=""/>
            </BackTop>
          </TDPlayMusicUrl>
          <TDAppFooter/>
        </ScrollToTop>
      </Router>
      <TDAppBackground/>
    </Provider>
  )
})

export default App;
