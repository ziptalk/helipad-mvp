import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import {AssetDetailRoutes, AssetRoutes} from "./views/Asset";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login, Logout, SignUp} from "./views/Auth/components";
import MyPage from "./views/MyPage/components/mypage/MyPage";
import Process from "./views/MyPage/components/process/Process";
import ContactHistory from "./views/MyPage/components/mypage/ContactHistory";
import Neighborhood from "./views/Neighborhood/components/Neighborhood";
import NeighborhoodDetail from "./views/Neighborhood/components/NeighborhoodDetail";
import { InviteCodeForm } from './components/landing/InviteCodeForm';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Switch>
                <section className="container">
                    <HeaderContainer />
                    <div className="routingContainer">
                        <PrivateRoutes path="/asset" component={AssetRoutes} />
                        <Route path="/inviteCodeForm" component={InviteCodeForm} />
                        <Route path="/login" component={Login} />
                        <PrivateRoutes path="/logout" component={Logout} />
                        <Route path="/signup" component={SignUp} />
                        <PrivateRoutes path="/mypage" component={MyPage} />
                        <PrivateRoutes path="/process" component={Process} />
                        <PrivateRoutes path="/contact" component={ContactHistory} />
                        <PrivateRoutes path="/neighborhood" component={Neighborhood} />
                        <PrivateRoutes path="/neighborhoodInfo/:id" component={NeighborhoodDetail} />
                        {/*<Redirect to="/asset" from="/" />*/}
                        <Redirect to="/neighborhood" from="/" />
                    </div>
                </section>
            </Switch>
        </Router>
    );
}

export default ApplicationRoutes;
