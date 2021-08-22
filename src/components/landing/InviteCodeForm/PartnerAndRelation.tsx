import styled from "styled-components";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import OurPartners from "../../../images/InviteCodeForm/ourPartners.jpg";
import OurRelationships from "../../../images/InviteCodeForm/ourRelationships.jpg";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../Locales/i18n';

const PartnerAndRelation = () => {
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
      <Section>
        <TextContainer>
          <Text>
            <Category>
              <Line />
              {t('partner_1')}
            </Category>
            <Title>
            {t('partner_2')}
            </Title>

            <Content>
            {t('partner_3')}
            </Content>
          </Text>
        </TextContainer>
        <ImageContainer imgPath={OurPartners}></ImageContainer>
      </Section>
      <Section>
        <ImageContainer imgPath={OurRelationships}></ImageContainer>
        <TextContainer>
          <Text>
            <Category>
              <Line />
              {t('relationship_1')}
            </Category>
            <Title>
            {t('relationship_2')}
            </Title>
            <Content>
            {t('relationship_3')}
            </Content>
          </Text>
        </TextContainer>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  margin: 50px 0px 100px 0px;
  width: 100vw;
  max-width: 1904px;
`;
const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Line = styled(LineSvg)``;
const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
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
const TextContainer = styled.div`
  flex: 1;
  position: relative;
`;
const Text = styled.div`
  width: 55%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -40% 0 0 -27.5%;
`;
const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;

  margin-bottom: 27px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 19px;
    line-height: 30px;
  }
`;
const Content = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
    line-height: 17px;
  }
`;
const ImageContainer: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  flex: 1;
  width: 100%;
  height: auto;
`;
export default PartnerAndRelation;
