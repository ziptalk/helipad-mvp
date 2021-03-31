import * as React from "react";
import ReactFacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from "react-facebook-login";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default class Login extends React.Component<any, any> {
    render() {
        return (
            <div className="loginWrapper">
                <div className="loginRow">
                    <div className="loginTitle">
                        LOGIN
                    </div>
                </div>
                <div className="loginDivider" />
                <div className="loginRow">
                    <LoginForm />
                </div>
            </div>
        );
    }
}