import styled from "styled-components";
import LoginContainer from "./login/LoginContainer";
import RegisterContainer from "./register/RegisterContainer";
import RegisterContainer2 from "./register/RegisterContainer2";

import { Link } from "react-router-dom";
import loginImage from "../../../images/loginImage.png";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../Locales/i18n';
import { useState, useEffect, useContext } from "react";

enum SelectedCategory {
  TITLE = "Login/Register",
  LOGIN = "Login",
  REGISTER = "Register",
}
const LoginAndRegisterPresenter = ({
  selectedCategory,
  setSelectedCategory,
}: any) => {
  const { t, i18n } = useTranslation();
  
  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  useEffect(()=>{
    function checkLanguage(){
      let currentLanguage = localStorage.getItem('language');
      console.log(currentLanguage)

      if(currentLanguage=="en" || currentLanguage=="ko"){
        handleChangeLanguage(currentLanguage)
      }
    }

    window.addEventListener('storage', checkLanguage)

    return () => {
      window.removeEventListener('storage', checkLanguage)
    }
  },[])

  console.log("selectedCategory", selectedCategory);

  const renderSelectedItem = () => {
    switch (selectedCategory) {
      case SelectedCategory.LOGIN:
        return (
          <Category>
            <Link to="/auth/login">
              <SelectedItem>{t('login_2')}</SelectedItem>
            </Link>
            <Link to="/auth/registerForm">
              <Item
                onClick={() => setSelectedCategory(SelectedCategory.REGISTER)}
              >
                {t('login_3')}
              </Item>
            </Link>
          </Category>
        );
        break;
      case SelectedCategory.REGISTER:
        return (
          <Category>
            <Link to="/auth/login">
              <Item onClick={() => setSelectedCategory(SelectedCategory.LOGIN)}>
              {t('login_2')}
              </Item>
            </Link>
            <Link to="/auth/registerForm">
              <SelectedItem>{t('login_3')}</SelectedItem>
            </Link>
          </Category>
        );
        break;
      default:
        throw new Error("Invalid item");
    }
  };
  return (
    <>
      {selectedCategory != SelectedCategory.REGISTER ? (
        <Container selectedCategory={selectedCategory}>
          <FormContainer>
            <HeaderContainer>
              <Title>{t('login_1')}</Title>
              {renderSelectedItem()}
            </HeaderContainer>
            {selectedCategory === SelectedCategory.LOGIN && <LoginContainer />}
            {selectedCategory === SelectedCategory.REGISTER && (
              <RegisterContainer />
            )}
          </FormContainer>
        </Container>
      ) : (
        <Container style={{ backgroundColor: "black" }}>
          <RegisterContainer2 />
        </Container>
      )}
    </>
  );
};
// height: ${(props: any) =>
// props.selectedCategory === SelectedCategory.REGISTER ? "170vh" : "100vh"};
const Container: any = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  max-height: 1200px;
  background-color: ${({ theme }) => theme.colors.beige};
  background-image: url(${loginImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  /* padding-bottom: 200px; */
`;
const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 5vh;
`;
const HeaderContainer = styled.div`
  width: 474px;
  height: 148px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 0px #dadada;
`;
const Title = styled.div`
  width: 410px;
  height: 40px;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  margin: 40px 32px 24px;
`;
const Category = styled.div`
  width: 410px;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
`;
const Item = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  padding-top: 15px;
  text-align: center;
  color: #a3a3a3;
  width: 83px;
  height: 100%;
`;
const SelectedItem = styled(Item)`
  color: #212121;
  border-bottom: 2px solid black;
`;
export default LoginAndRegisterPresenter;
