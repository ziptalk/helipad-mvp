import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as FinaSvg } from "../../images/Homepage/fina.svg";
import Fina from "../../images/Homepage/fina.png";
import Ellipse from "../../images/Homepage/Ellipse.jpg";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../Locales/i18n';

const Establishment = () => {
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
        <TitleWrapper>
          <Category>부동산 법인 설립</Category>
          <Title>
            {t('main_5')}
          </Title>
          <SubTitle>
          {t('main_6')}
          </SubTitle>
        </TitleWrapper>
        <ContentWrapper>
          {/* <StyledImg /> */}
          <ImageBlock imgPath={Fina}></ImageBlock>
          {/* <ImageBgBlock imgPath={Ellipse}></ImageBgBlock> */}
          <ContentBlock>
            <Item>
              <ItemTitle>{t('main_7')}</ItemTitle>
              <ItemSubTitle>
              {t('main_8')}
              </ItemSubTitle>
              <More>{t('main_9')}</More>
            </Item>
            <Item>
              <ItemTitle>{t('main_10')}</ItemTitle>
            </Item>
            <Item>
              <ItemTitle>{t('main_11')}</ItemTitle>
            </Item>
          </ContentBlock>
        </ContentWrapper>
        <ButtonWrapper>
          <StyledLink to="">가입하기</StyledLink>
        </ButtonWrapper>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 1050px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 60vw;
  max-width: 1904px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 1142px; */

  /* background: blue; */
`;

const TitleWrapper = styled.div`
  text-align: left;
  width: 78%;
  margin-bottom: 50px;
`;
const Category = styled.div`
  font-size: clamp(19px, 1.4vw, 28px);
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  margin-bottom: 15px;
  color: #b69142;
`;
const Title = styled.div`
  font-size: 48px;
  font-size: clamp(32px, 2.5vw, 48px);
  font-style: normal;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.03em;
  margin-bottom: 15px;
  color: #ffffff;
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-size: clamp(13px, 1vw, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.03em;

  color: #ffffffcc;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-height: 540px;
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
`;

const ContentBlock = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  padding-left: 50px;
  width: 100%;
  border-left: 1px solid #eaeaea;
`;
const ItemTitle = styled.div`
  font-size: clamp(16px, 1.2vw, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ffffff;
  margin-bottom: 17px;
`;
const ItemSubTitle = styled.div`
  font-size: 16px;
  font-size: clamp(10px, 0.8vw, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffffcc;
  margin-bottom: 17px;
`;
const More = styled.div`
  font-size: clamp(10px, 0.8vw, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 68px;
  text-align: right;
  margin-top: 50px;
`;
const StyledLink = styled(Link)`
  width: 217px;
  height: 68px;
  background: #ac7602;
  border-radius: 50px;

  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: left;

  padding: 16px 64px;
  margin-right: 50px;
  color: #ffffff;
`;
const StyledImg = styled(FinaSvg)`
  width: 531px;
  height: 531px;
`;
const ImageBgBlock: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))``;
const ImageBlock: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  flex: 1.2;
  width: 100%;
  height: auto;
  max-width: 531px;
  max-height: 531px;
`;
export default Establishment;
