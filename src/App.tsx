import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './components/login/Login';
import AssetList from './components/asset_list/AssetList';
import AssetDetail from './components/asset_detail/AssetDetail';
import SignUp from './components/login/SignUp';
import Landing from './components/landing/Landing';
import Mypage from './components/mypage/Mypage';
import Process from './components/process/Process';

import { Header } from './components/header/Header';
import { HeaderContainer } from './components/header/HeaderContainer';
import './App.css';
import Footer from './components/Footer';

function App() {
  // const [loginToggle, SetLoginToggle] = useState(false);
  //
  // const toggle = () => {
  //   SetLoginToggle(!loginToggle);
  // };
  return (
    <Router>
      <Switch>
        <section className="container">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          {/*<HeaderContainer loginToggle={loginToggle} toggle={toggle} />*/}
          <HeaderContainer />
          <div className="routingContainer">
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/sign-up'} component={SignUp} />
            <Route exact path={'/asset-list'} component={AssetList} />
            {/*{loginToggle ? (*/}
            {/*  <Redirect to="/asset-list" />*/}
            {/*) : (*/}
            {/*  <Redirect to="/login" />*/}
            {/*)}*/}
            <Route exact path={'/asset-detail'} component={AssetDetail} />
            <Route exact path={'/landing'} component={Landing} />
            <Route exact path={'/mypage'} component={Mypage} />
            <Route exact path={'/process'} component={Process} />
          </div>
          <Footer />
        </section>
      </Switch>
    </Router>
  );
}

export default App;
