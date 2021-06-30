import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps, StaticContext } from "react-router";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
  const { authenticated } = useContext(AuthContext);
  let currentUrl = "";
  useEffect(() => {
    currentUrl = window.location.href.split("3000")[1];
    console.log("currentUrl:", window.location.pathname);
  }, [currentUrl]);

  // user, global은 dropdown으로 구현 예정
  // authenticated에 따라서 black header와 white header로 나누기
  // 로그인이 된 경우 authenticated 는 true, 아니면 false
  return <HeaderPresenter authenticated={authenticated} />;
};

export default HeaderContainer;
