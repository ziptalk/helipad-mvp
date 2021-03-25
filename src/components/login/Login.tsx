import * as React from "react";
import ReactFacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from "react-facebook-login";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default class Login extends React.Component<any, any> {
    render() {
        let onClickedLogin = (event: React.MouseEvent<HTMLDivElement>) => {
           console.log(event);
        };

        let onLoginSuccess = (userInfo: ReactFacebookLoginInfo) => {
            console.log(userInfo);
        }

        let onLoginFailed = (response: ReactFacebookFailureResponse) => {
            console.log("login failed: ", response);
        }

        let onClickedSignUp = () => {
            console.log("onClickedSignUp");
        }

        return (
            <div className="wrapper">
                <div className="row">
                    <div className="title">
                        Hellipad!!
                    </div>
                </div>
                <div className="row">
                    <LoginForm />
                </div>
                <div className="row">
                    <ReactFacebookLogin
                        appId="484464982933400"
                        autoLoad={true}
                        fields="name,email,picture"
                        textButton="facebook login"
                        onClick={onClickedLogin}
                        callback={onLoginSuccess}
                        onFailure={onLoginFailed} />
                </div>
            </div>
        );
    }
}