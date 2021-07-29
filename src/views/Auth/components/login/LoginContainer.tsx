import LoginPresenter from "./LoginPresenter";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import LoginUseCase, { ErrorCode } from "../../../../domain/LoginUseCase";
import { Link, useHistory } from "react-router-dom";
const LoginContainer = () => {
  const history = useHistory();
  const { setUser, setHeaderMode } = useContext(AuthContext);
  const [loginResult, setLoginResult] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
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
  const onClickLogin = () => {
    LoginUseCase.execute({
      email: userInfo.email,
      password: userInfo.password,
    })
      .then((result) => {
        onLoginSuccess({ user: result.user });
        setLoginResult(true);
        history.push("/asset/neighborhood");
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
      onClickLogin={onClickLogin}
      onEnterLogin={onEnterLogin}
      loginResult={loginResult}
      emailInput={emailInput}
    />
  );
};
export default LoginContainer;