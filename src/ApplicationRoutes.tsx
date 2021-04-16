import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthRoutes } from "./views/Auth";
import PrivateRoutes from "./PrivateRoutes";
import {AssetDetailRoutes, AssetRoutes} from "./views/Asset";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {AuthProvider} from "./AuthProvider";
import {Login, SignUp} from "./views/Auth/components";
import AssetDetail from "./views/Asset/components/asset_detail/AssetDetail";
import MyPage from "./views/MyPage/components/mypage/MyPage";
import AssetList from "./views/Asset/components/asset_list/AssetList";
import Process from "./views/MyPage/components/process/Process";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Switch>
                <section className="container">
                    <HeaderContainer />
                    <div className="routingContainer">
                        {/*<PrivateRoutes exact path="/asset-detail/:assetId" component={AssetDetail} />*/}
                        <PrivateRoutes path="/asset" component={AssetRoutes} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/mypage" component={MyPage} />
                        <Route path="/process" component={Process} />
                        <Redirect to="/asset" from="/" />
                    </div>
                </section>
            </Switch>
        </Router>
    );
}

export default ApplicationRoutes;