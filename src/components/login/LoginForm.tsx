import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactFacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo,} from 'react-facebook-login';
import styled from 'styled-components';
import { ReactComponent as FaceBook } from '../../images/ic_facebook.svg';
import LoginUseCase, {ErrorCode} from "../../domain/LoginUseCase";
import {useState} from "react";

// export default class LoginForm extends React.Component<any, any> {
//   render() {
//     let onClickedLogin = (event: React.MouseEvent<HTMLDivElement>) => {
//       event.preventDefault();
//       console.log(event);
//       LoginUseCase.execute(email, password).then((result) => {
//
//       }).catch((error) => onLoginFailed(error));
//     };
//
//     let onLoginSuccess = (userInfo: ReactFacebookLoginInfo) => {
//       console.log(userInfo);
//     };
//
//     let onLoginFailed = (response: ReactFacebookFailureResponse) => {
//       console.log('login failed: ', response);
//     };
//
//     let onClickedSignUp = () => {
//       console.log('onClickedSignUp');
//     };
//
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//
//     return (
//       <Form>
//         <label>Email Address</label>
//         <Email type="text" name="email" value={email} onChange={(email) => setEmail(email)} />
//         <label>Password</label>
//         <Password type="password" name="password" value={password} onChange={(password) => setPassword(password)} />
//         <Submit value="LOGIN" onClick={onClickedLogin} />
//         <Row>
//           Remember Me
//           <input className="rememberMeBox" type="checkbox" />
//         </Row>
//         <Row>
//           Forgot your password?
//           <Link to={{ pathname: '/sign-up' }}>Sign-up</Link>
//         </Row>
//         <FacebookLoginContainer>
//           <ReactFacebookLogin
//             cssClass="facebookLoginButton"
//             appId="484464982933400"
//             autoLoad={true}
//             fields="name,email,picture"
//             textButton="Login with facebook"
//             onClick={onClickedLogin}
//             callback={onLoginSuccess}
//             onFailure={onLoginFailed}
//             icon={<FaceBook style={{ marginRight: '10px' }} />}
//           />
//         </FacebookLoginContainer>
//       </Form>
//     );
//   }
// }

const LoginForm = () => {
    let onClickedLogin = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        LoginUseCase.execute(email, password).then((result) => {
            console.log("result: ", result);
        }).catch((error) => onLoginFailed(error.code));
    };

    let onLoginSuccess = (userInfo: ReactFacebookLoginInfo) => {
        console.log(userInfo);
    };

    let onLoginFailed = (response: string) => {
        console.log('login failed: ', response);
        switch (response) {
            case ErrorCode.WRONG_PASSWORD:
                alert("Wrong password!");
                break;
            case ErrorCode.USER_NOT_FOUND:
                alert("Wrong Email!");
                break;
            default:
                break;
        }
    };

    let onClickedSignUp = () => {
        console.log('onClickedSignUp');
    };

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Form>
            <label>Email Address</label>
            <Email type="text" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <label>Password</label>
            <Password type="password" name="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            <Submit value="LOGIN" onClick={onClickedLogin} />
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
                    // onFailure={onLoginFailed}
                    icon={<FaceBook style={{ marginRight: '10px' }} />}
                />
            </FacebookLoginContainer>
        </Form>
    );
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  text-align: center;
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

export default LoginForm;