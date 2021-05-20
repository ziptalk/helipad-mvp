import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import LoginUseCase, { ErrorCode } from "../../../../domain/LoginUseCase";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickedLogin = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    LoginUseCase.execute(email, password)
      .then((result) => {
        console.log("result: ", result);
        onLoginSuccess(result);
      })
      .catch((error) => onLoginFailed(error.code));
  };

  const onLoginSuccess = (userInfo: any) => {
    authContext.setUser(userInfo.user);
    console.log("onLoginSuccess: ", userInfo);
    history.push({ pathname: "/asset/neighborhood" });
  };

  const onLoginFailed = (response: any) => {
    console.log("onLoginFailed: ", response);
    switch (response) {
      case ErrorCode.WRONG_PASSWORD:
        alert("You should enter right password.");
        break;
      case ErrorCode.USER_NOT_FOUND:
        alert("Email address not found.");
        break;
      default:
        alert("Some error was occurred!");
        break;
    }
  };

  return (
    <Form>
      <label>Email Address</label>
      <Email
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <label>Password</label>
      <Password
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Submit type="submit" value="LOGIN" onClick={onClickedLogin} />
      <Row>
        Remember Me
        <input className="rememberMeBox" type="checkbox" />
      </Row>
      <Row>
        Forgot your password?
        <Link to="/auth/signup"> Sign-up </Link>
      </Row>
      <FacebookLoginContainer>
        {/*<ReactFacebookLogin*/}
        {/*    cssClass="facebookLoginButton"*/}
        {/*    appId="484464982933400"*/}
        {/*    autoLoad={true}*/}
        {/*    fields="name,email,picture"*/}
        {/*    textButton="Login with facebook"*/}
        {/*    onClick={() => {}}*/}
        {/*    callback={() => {}}*/}
        {/*    // onFailure={onLoginFailed}*/}
        {/*    icon={<FaceBook style={{ marginRight: '10px' }} />}*/}
        {/*/>*/}
      </FacebookLoginContainer>
    </Form>
  );
};

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
`;

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
  cursor: pointer;
`;

const FacebookLoginContainer = styled.div`
  margin-top: 25px;
`;

const FacebookIcon = styled.div`
  background: url(../../../../images/ic_facebook.svg);
`;

const rememberTitle = styled.div`
  color: #999999;
`;

export default LoginForm;
