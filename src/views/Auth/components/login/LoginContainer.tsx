import LoginPresenter from "./LoginPresenter";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import LoginUseCase, { ErrorCode } from "../../../../domain/LoginUseCase";
import SignUpUseCase from "../../../../domain/SignUpUseCase";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const { Kakao }: any = window;
const LoginContainer = () => {
  const history = useHistory();
  const { setUser, setHeaderMode } = useContext(AuthContext);
  const [kakaoLogin, setKakaoLogin] = useState(false);
  const [loginResult, setLoginResult] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  // useEffect(() => {
  //   Kakao.init("14e388b73f0f4f68a25b96d3c70a54f4");
  //   if (Kakao.Auth.getAccessToken()) {
  //     console.log("액세스 토큰이 존재합니다. 세션을 유지합니다.");
  //     setKakaoLogin(true);
  //   }
  // }, []);
  const emailInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setHeaderMode("black");
    loginResult === false && emailInput.current && emailInput.current.focus();
  }, [loginResult]);
  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    setUserInfo({ ...userInfo, [key]: value });
  };
  // const onClickKakaoLogin = () => {
  //   Kakao.Auth.login({
  //     success: function (authObj: any) {
  //       const accessToken = authObj.accessToken;
  //       SignUpUseCase.signUpWithKakao(accessToken);
  //     },
  //     fail: function (err: any) {
  //       console.log(err);
  //     },
  //   });
  // };
  const onClickKakaoLogin = () => {
    if (!Kakao) {
      Kakao.init("14e388b73f0f4f68a25b96d3c70a54f4");
    }

    Kakao.Auth.loginForm({
      success: function (authObj: any) {
        console.log(authObj);
        Kakao.Auth.setAccessToken(authObj.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res: any) {
            console.log("Kakao 사용자 정보", res);
          },
          fail: function (err: any) {
            console.log(err);
          },
        });
      },
      fail: function (err: any) {
        console.log(err);
      },
    });
  };

  // const onClickKakaoLogin = () => {
  //   if (!Kakao) {
  //     console.log("Kakao 인스턴스가 존재하지 않습니다.");
  //   }
  //   Kakao.Auth.login({
  //     success: function (authObj: any) {
  //       const accessToken = authObj.accessToken;
  //       // Kakao.API.request("");
  //       Kakao.API.request({
  //         url: "/v2/user/me",
  //         success: function (res: any) {
  //           console.log("Kakao 사용자 정보", res);
  //         },
  //         fail: function (err: any) {
  //           console.log(err);
  //         },
  //       });
  //     },
  //     fail: function (err: any) {
  //       console.log(err);
  //     },
  //   });
  // };
  const onClickLogin = () => {
    LoginUseCase.execute({
      email: userInfo.email,
      password: userInfo.password,
    })
      .then((result) => {
        onLoginSuccess({ user: result.user });
        setLoginResult(true);
        history.push("/dashboard");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch((error) => {
        onLoginFail({ errorCode: error.code });
        setLoginResult(false);
      });
  };
  const onEnterLogin = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickLogin();
    }
  };
  const onLoginSuccess = ({ user }: any) => {
    setUser(user);
  };
  const onLoginFail = ({ errorCode }: any) => {
    switch (errorCode) {
      case ErrorCode.WRONG_PASSWORD:
        alert("You should enter right pasword.");
        break;
      case ErrorCode.USER_NOT_FOUND:
        alert("Email address not found.");
        break;
      default:
        alert("Some error was occurred!");
        break;
    }
    emailInput.current && emailInput.current.focus();
    console.log(1);
  };
  return (
    <LoginPresenter
      onChangeInputValue={onChangeInputValue}
      onClickKakaoLogin={onClickKakaoLogin}
      onClickLogin={onClickLogin}
      onEnterLogin={onEnterLogin}
      loginResult={loginResult}
      emailInput={emailInput}
    />
  );
};
export default LoginContainer;
