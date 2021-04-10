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
      <LoginForm>
        <label>Email Address</label>
        <Email type="text" name="email" />
        <label>Password</label>
        <Password type="password" name="password" />
        <Submit type="submit" value="LOGIN" />
        <Row>
          Remember Me
          <input className="rememberMeBox" type="checkbox" />
        </Row>
        <Row>
          Forgot your password?
          <Link to={{ pathname: '/sign-up' }}>Sign-up</Link>
        </Row>
        <FacebookLoginContainer>
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
        </FacebookLoginContainer>
      </LoginForm>
    );
  }
}

const Form = styled.form`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Email = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  height: 45px;
`

const Password = styled.input`
  matgin-top: 50px;
  margin-bottom: 10px;
  height: 45px;
`;

const Remember = styled.input`
  width: 20px;
  height: 20px;
`;

const Submit = styled.input`
  height: 45px;
  background-color: #4542e2;
  color: #ffffff;
  font-size: 20px;
`;

const FacebookLoginContainer = styled.div`
  margin-top: 25px;
`;

const FacebookIcon = styled.div`
  background: url(../../images/ic_facebook.svg);
`;

const rememberTitle = styled.div`
  color: #999999;
`;
