import LoginAndRegisterPresenter from "./LoginAndRegisterPresenter";
import { useState } from "react";
import styled from "styled-components";
enum SelectedCategory {
  LOGIN = "Login",
  REGISTER = "Register",
}
const LoginAndRegisterContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    SelectedCategory.LOGIN
  );
  return (
    <Container>
      <LoginAndRegisterPresenter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
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
