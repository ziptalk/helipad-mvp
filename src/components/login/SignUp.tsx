import React from "react";
import "./SignUp.css";
import InputField from "./InputField";

export default class SingUp extends React.Component<any, any> {
    render() {
        return (
            <div className="signUpWrapper">
                <div className="signUpRow">
                    <div className="signUpTitle">
                        Sign up
                    </div>
                    <div className="signUpDivider" />
                    <div className="signUpName">
                        <InputField title="last name"/>
                        <InputField title="first name"/>
                    </div>
                    <InputField title="email" />
                    <InputField title="password" />
                    <InputField title="password confirmation" />
                    <div className="signUpAgent">
                        <div className="agentText">
                            I'm a private banker of real estate agent
                        </div>
                        <input className="agentCheckBox" type="checkbox" />
                    </div>
                    <button className="signUpButton" type="submit">SIGN UP</button>
                </div>
            </div>
        );
    }
}