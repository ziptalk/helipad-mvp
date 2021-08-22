import styled from "styled-components";
import { ReactComponent as MoreInfoSvg } from "../../images/Homepage/moreInfo.svg";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../Locales/i18n';

enum CategoryItem {
  Purchase = "구매",
  Sale = "판매",
  SendMoney = "송금",
  Corporation = "법인 설립",
  Operation = "운용",
  Distribution = "분배 및 보고",
}
const ServiceGuidance = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const onClickCategory = (e: any) => {
    console.log("onClickCategory", e.target.id);
    setSelectedCategory(e.target.id);
  };
  const renderInfoByCategory = () => {
    switch (selectedCategory) {
      case CategoryItem.Purchase:
        return (
          <MoreWrapper margin={-44}>
            <MoreTitle>부동산 구매</MoreTitle>
            <MoreContent>
            {t('mouse_over_1')}
            </MoreContent>
          </MoreWrapper>
        );
      case CategoryItem.Sale:
        return (
          <MoreWrapper margin={-27}>
            <MoreTitle>부동산 판매</MoreTitle>
            <MoreContent>
            {t('mouse_over_2')}
            </MoreContent>
          </MoreWrapper>
        );

      case CategoryItem.SendMoney:
        return (
          <MoreWrapper margin={-10}>
            <MoreTitle>송금</MoreTitle>
            <MoreContent>
            {t('mouse_over_3')}
            </MoreContent>
          </MoreWrapper>
        );
      case CategoryItem.Corporation:
        return (
          <MoreWrapper margin={7}>
            <MoreTitle>부동산 법인 설립</MoreTitle>
            <MoreContent>
            {t('mouse_over_4')}
            </MoreContent>
          </MoreWrapper>
        );
      case CategoryItem.Operation:
        return (
          <MoreWrapper margin={24}>
            <MoreTitle>부동산 운용</MoreTitle>
            <MoreContent>{t('mouse_over_5')}</MoreContent>
          </MoreWrapper>
        );
      case CategoryItem.Distribution:
        return (
          <MoreWrapper margin={41}>
            <MoreTitle>수익 분배 및 보고</MoreTitle>
            <MoreContent>{t('mouse_over_6')}</MoreContent>
          </MoreWrapper>
        );
      default:
        return <UnvisibleWrapper></UnvisibleWrapper>;
    }
  };
  return (
    <Container>
      <ContentContainer>
        <TitleWrapper>
          <Title>서비스 안내</Title>
        </TitleWrapper>
        <Divider></Divider>
        <CategoryWrapper>
          <MouseOverGuideButton>{t('mouse_over_info')}</MouseOverGuideButton>
          <Category id={CategoryItem.Purchase} onMouseOver={onClickCategory}>
            부동산 구매
          </Category>
          <Category id={CategoryItem.Sale} onMouseOver={onClickCategory}>
            부동산 판매
          </Category>
          <Category id={CategoryItem.SendMoney} onMouseOver={onClickCategory}>
            송금
          </Category>
          <Category id={CategoryItem.Corporation} onMouseOver={onClickCategory}>
            부동산
            <br />
            법인 설립
          </Category>
          <Category id={CategoryItem.Operation} onMouseOver={onClickCategory}>
            부동산 운용
          </Category>
          <Category
            id={CategoryItem.Distribution}
            onMouseOver={onClickCategory}
          >
            수익 분배 <br />및 보고
          </Category>
        </CategoryWrapper>
        {renderInfoByCategory()}
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  background-color: #ffffff;
  height: 100vh;
  max-height: 900px;
`;
const ContentContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 1904px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 26px;
  width: 100%;
  text-align: center;
`;
const Title = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 86px;
  letter-spacing: 0px;
`;
const Divider = styled.div`
  border: 1px solid #000000;
  width: 80%;
  min-width: 1200px;
  margin-bottom: 47px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    min-width: 1000px;
  }
`;
const MouseOverGuideButton = styled.div`
  position: absolute;
  left: 5%;
  width: 88px;
  height: 34px;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;

  color: #000000;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookM} {
    display: none;
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    display: none;
  }
`;
const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 188px;
  height: 164px;
  border-radius: 10px;
  background: #cbcbcb;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: center;
`;

const MoreWrapper: any = styled.div`
  position: relative;
  margin-top: 25px;

  width: 100%;
  max-width: 1265px;
  height: 262px;
  max-height: 262px;
  background: #121217;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 50px;
  margin-bottom: 50px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #121217;
    border-top: 0;
    /* margin-left: -100px; */
    margin-left: ${(props: any) => `${props.margin}%`};
    margin-top: -16px;
  }
`;
const MoreTitle = styled.div`
  font-size: 24px;
  font-size: clamp(16px, 1.2vw, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: center;
  color: #b69142;
  min-height: 53px;
`;
const MoreContent = styled.div`
  font-size: 48px;
  font-size: clamp(32px, 2.5vw, 48px);
  font-style: normal;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ffffff;
  display: flex;
  align-items: center;
`;
const StyledMoreBlock = styled(MoreInfoSvg)`
  position: relative;
  z-index: 3;
`;
const UnvisibleWrapper = styled(MoreWrapper)`
  visibility: hidden;
`;
export default ServiceGuidance;
