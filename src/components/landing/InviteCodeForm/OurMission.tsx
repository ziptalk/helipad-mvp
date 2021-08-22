import styled from "styled-components";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import WorldMapImage from "../../../images/InviteCodeForm/worldMap.jpg";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../Locales/i18n';
import React, { useContext, useEffect, useState } from "react";

const OurMission = () => {
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
      <Category>
        <Line />
        OUR MISSION
      </Category>

      <Title>{t('mission_1')}</Title>
      <ContentBlock>
        <SubTitle>{t('mission_2')}</SubTitle>

        <Content>
        {t('mission_3')}
        </Content>
        <Content>
        {t('mission_4')}
        </Content>
      </ContentBlock>
      <ImageContainer imgPath={WorldMapImage}></ImageContainer>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 100px;
  width: 80vw;
  max-width: 1904px;
`;
const Line = styled(LineSvg)``;
const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  font-size: 0.9vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: 4px;
  color: #b69142;
  ${Line} {
    margin-right: 24px;
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 23px;
  }
`;
const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0px;
  margin-bottom: 27px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 19px;
    line-height: 30px;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  margin-bottom: 15px;
`;
const ContentBlock = styled.div``;
const Content = styled.li`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    line-height: 17px;
  }
`;
const ImageContainer: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;
export default OurMission;
