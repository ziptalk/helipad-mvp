import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import {AssetDetailRoutes, AssetRoutes} from "./views/Asset";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login, Logout, SignUp} from "./views/Auth/components";
import MyPage from "./views/MyPage/components/mypage/MyPage";
import Process from "./views/MyPage/components/process/Process";
import ContactHistory from "./views/MyPage/components/mypage/ContactHistory";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Switch>
                <section className="container">
                    <HeaderContainer />
                    <div className="routingContainer">
                        <PrivateRoutes path="/asset" component={AssetRoutes} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/mypage" component={MyPage} />
                        <Route path="/process" component={Process} />
                        <Route path="/contact" component={ContactHistory} />
                        <Redirect to="/asset" from="/" />
                    </div>
                </section>
            </Switch>
        </Router>
    );
}

export default ApplicationRoutes;