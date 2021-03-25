import * as React from "react";
import "./LoginForm.css";
import {Link} from "react-router-dom";

export default class LoginForm extends React.Component<any, any> {
    render() {
        return (
            <form className="form">
                <label>Email Address</label>
                <input className="emailInput" type="text" name="email" />
                <label>Password</label>
                <input className="passwordInput" type="password" name="password" />
                <input type="submit" value="Login" />
                <div className="loginRow">
                    Remember Me
                    <input type="checkbox" />
                </div>
                <div className="loginRow">
                    Forgot your password?
                    <Link to={{ pathname: "/sign-up" }}>Sign-up</Link>
                </div>
            </form>
        );
    }
}