import LoginAndRegisterPresenter from "./LoginAndRegisterPresenter";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams, useLocation, Redirect } from "react-router-dom";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
enum SelectedCategory {
  LOGIN = "Login",
  REGISTER = "Register",
}

const LoginAndRegisterContainer = ({ match }: any) => {
  const { pathname } = useLocation();
  const { inviteCodeValidation } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    switch (pathname) {
      case "/auth/login":
        setSelectedCategory(SelectedCategory.LOGIN);
        break;
      case "/auth/registerForm":
        setSelectedCategory(SelectedCategory.REGISTER);
        break;
    }
  }, [pathname]);
  const [selectedCategory, setSelectedCategory] = useState(
    SelectedCategory.LOGIN
  );

  if (inviteCodeValidation !== "valid") {
  }
  return (
    <Container>
      {inviteCodeValidation !== "valid" ? (
        <>
          {alert("please enter invite code")}
          <Redirect to="/" />
        </>
      ) : (
        <LoginAndRegisterPresenter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default LoginAndRegisterContainer;
