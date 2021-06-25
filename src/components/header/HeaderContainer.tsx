import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
  const { authenticated } = useContext(AuthContext);
  // user, global은 dropdown으로 구현 예정
  return <HeaderPresenter authenticated={authenticated} />;
};

export default HeaderContainer;
