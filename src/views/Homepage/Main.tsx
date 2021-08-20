import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../../images/Homepage/arrow.svg";
const Main = () => {
  return (
    <Container>
      <ContentContainer>
        <TitleWrapper>
          <TitleBlock>
            <Title>미국 부동산 투자가</Title>
            <Title>쉬워진다.</Title>
            <Divider></Divider>
            <SubTitle>다음 미국 부동산을 찾고, 구매하고, 관리할 수 있</SubTitle>
            <SubTitle>도록 도와드리겠습니다.</SubTitle>
          </TitleBlock>
        </TitleWrapper>
        <ButtonWrapper>
          <StyledLink to="">JOIN THE WAITLIST</StyledLink>
          <StyledLink to="">VIP 코드 입력</StyledLink>
        </ButtonWrapper>
        <ArrowWrapper>
          <StyledArrow></StyledArrow>
        </ArrowWrapper>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  /* position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 1096px;
  background-color: black; */
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1904px;
  width: 100%;
  height: 100vh;

  /* background-color: black; */
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  margin-top: 100px;
  /* background-color: yellow; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "first second";
  margin-bottom: 250px;
`;
const TitleBlock = styled.div`
  grid-area: second;
`;
const Title = styled.div`
  font-size: clamp(48px, 3.5vw, 72px);
  font-style: normal;
  font-weight: 500;
  line-height: 100px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;
const Divider = styled.div`
  border: 4px solid #ffffff;
  width: 33%;
  margin-top: 15px;
  margin-bottom: 37px;
`;
const SubTitle = styled.div`
  font-size: clamp(24px, 1.8vw, 36px);
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 47px;
  margin-bottom: 100px;
`;
const StyledLink = styled(Link)`
  width: 335px;
  height: 68px;
  left: 983px;
  top: 853px;
  padding: 19px 60px;
  background: #ac7602;
  border-radius: 50px;

  color: #ffffff;
  font-size: clamp(16px, 1.2vw, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: center;
`;
const ArrowWrapper = styled.div``;
const StyledArrow = styled(ArrowSvg)``;
export default Main;
