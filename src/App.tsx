import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './views/Auth/components/login/Login';
import AssetList from './views/Asset/components/asset_list/AssetList';
import AssetDetail from './views/Asset/components/asset_detail/AssetDetail';
import SignUp from './views/Auth/components/login/SignUp';
import Landing from './components/landing/Landing';
import MyPage from './views/MyPage/components/mypage/MyPage';
import Process from './views/MyPage/components/process/Process';

import { Header } from './components/header/Header';
import { HeaderContainer } from './components/header/HeaderContainer';
import './App.css';
import Footer from './components/Footer';
import ApplicationRoutes from "./ApplicationRoutes";

function App() {
  // return (
  //   <Router>
  //     <Switch>
  //       <section className="container">
  //         <meta
  //           name="viewport"
  //           content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
  //         />
  //         <HeaderContainer />
  //         <div className="routingContainer">
  //           <Route exact path={'/login'} component={Login} />
  //           <Route exact path={'/sign-up'} component={SignUp} />
  //           <Route exact path={'/asset-list'} component={AssetList} />
  //           <Route exact path={'/asset-detail/:assetId'} component={AssetDetail} />
  //           <Route exact path={'/landing'} component={Landing} />
  //           <Route exact path={'/mypage'} component={MyPage} />
  //           <Route exact path={'/process'} component={Process} />
  //         </div>
  //         <Footer />
  //       </section>
  //     </Switch>
  //   </Router>
  // );
  return (
      <ApplicationRoutes />
  )
}

export default App;
