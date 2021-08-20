import styled from "styled-components";
import linear from "../../images/Homepage/linear.png";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../Locales/i18n';

const GetStarted = () => {
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

  return (
    <Container>
      <ContentContainer>
        <Content>
          <TitleWrapper>
            <Title>{t('main_15')}</Title>
            <SubTitle>{t('main_16')}</SubTitle>
          </TitleWrapper>
          <ButtonWrapper>
            <StyledLink to="">
              <Button>{t('main_17')}</Button>
            </StyledLink>
          </ButtonWrapper>
        </Content>
      </ContentContainer>
    </Container>
  );
};
export default GetStarted;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 600px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  width: 80vw;
  max-width: 1904px;
  margin: 0 auto;
  background: black;
  min-height: 371px;
  display: flex;
  align-items: center;
`;
const Content: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const TitleWrapper = styled.div`
  margin-left: 100px;
`;
const Title = styled.div`
  color: #ffffff;
  font-size: 49px;
`;
const SubTitle = styled.div`
  color: #ffffff;
  font-size: 32px;
`;
const ButtonWrapper = styled.div`
  margin-right: 120px;
`;
const Button = styled.button`
  width: 212px;
  height: 68px;
  background: #ff4243;
  color: white;
  font-size: 25px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 0;
`;
const StyledLink = styled(Link)``;
