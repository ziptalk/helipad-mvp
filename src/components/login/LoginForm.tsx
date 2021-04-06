import * as React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import ReactFacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login';
import styled from 'styled-components';

import { ReactComponent as FaceBook } from '../../images/ic_facebook.svg';
export default class LoginForm extends React.Component<any, any> {
  render() {
    let onClickedLogin = (event: React.MouseEvent<HTMLDivElement>) => {
      console.log(event);
    };

    let onLoginSuccess = (userInfo: ReactFacebookLoginInfo) => {
      console.log(userInfo);
    };

    let onLoginFailed = (response: ReactFacebookFailureResponse) => {
      console.log('login failed: ', response);
    };

    let onClickedSignUp = () => {
      console.log('onClickedSignUp');
    };

    return (
      <form className="loginForm">
        <label>Email Address</label>
        <input className="emailInput" type="text" name="email" />
        <label>Password</label>
        <input className="passwordInput" type="password" name="password" />
        <input className="submitButton" type="submit" value="LOGIN" />
        <div className="loginRow rememberMeTitle">
          Remember Me
          <input className="rememberMeBox" type="checkbox" />
        </div>
        <div className="loginRow">
          Forgot your password?
          <Link to={{ pathname: '/sign-up' }}>Sign-up</Link>
        </div>
        <div className="facebookLoginContainer">
          <ReactFacebookLogin
            cssClass="facebookLoginButton"
            appId="484464982933400"
            autoLoad={true}
            fields="name,email,picture"
            textButton="Login with facebook"
            onClick={onClickedLogin}
            callback={onLoginSuccess}
            onFailure={onLoginFailed}
            icon={<FaceBook style={{ marginRight: '10px' }} />}
          />
        </div>
      </form>
    );
  }
}

const Div = styled.div``;
