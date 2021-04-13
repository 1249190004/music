import React, {memo} from 'react';
import {Provider} from "react-redux"
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom';

import TDAppHeader from "@/components/app-header";
import TDAppFooter from "./components/app-footer";
import TDAppBackground from "./components/app-background";
import store from "./store";
import routers from "./router";

const App = memo(function () {
  return (
    <Provider store={store}>
      <Router>
        <TDAppHeader/>
        {renderRoutes(routers)}
        <TDAppFooter/>
      </Router>
      <TDAppBackground/>
    </Provider>
  )
})

export default App;
