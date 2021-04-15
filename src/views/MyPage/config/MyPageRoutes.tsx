import React from "react";
import { Route, Switch } from "react-router-dom";
import MyPage from "../components/mypage/MyPage";
import Process from "../components/process/Process";

export const MyPageRoutes = () => {
    return (
        <Switch>
            <Route exact path={'/my-page'} component={MyPage} />
            <Route exact path={'/process'} component={Process} />
        </Switch>
    );
}