import styled from "styled-components";
import { Link } from "react-router-dom";
import iphoneImg from "../../images/Homepage/iphone-image.jpg";
const FindProperty = () => {
  return (
    <Container>
      <ContentContainer>
        <PhoneImage imgPath={iphoneImg} />
        <ContentBlock>
          <TitleWrapper>
            <Category>부동산구매</Category>
            <Title>Find the Right Property</Title>
            <SubTitle>
              Search through our handpicked listings on the site or talk to one
              of our many experienced agents that will help you find the perfect
              place for your vacation home, income property, new home, or place
              for your family.
            </SubTitle>
          </TitleWrapper>
          <ButtonWrapper>
            <StyledLink to="">가입하기</StyledLink>
          </ButtonWrapper>
        </ContentBlock>
      </ContentContainer>
    </Container>
  );
};
export default FindProperty;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 840px;

  background-color: #c4c4c4;
`;
const ContentContainer = styled.div`
  position: relative;
  background-color: #c4c4c4;
  margin: 0 auto;
  max-width: 1904px;
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  /* minmax(0.7fr, 627px) minmax(1fr, 896px); */
  grid-template-areas: "first second";
  margin-bottom: 250px;
`;
const ContentBlock = styled.div`
  grid-area: second;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  margin-bottom: 80px;
  width: 90%;
`;
const Category = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
  color: #ac7602;
`;
const Title = styled.div`
  font-size: 72px;
  font-size: clamp(48px, 3.7vw, 72px);
  font-style: normal;
  font-weight: 600;
  line-height: 87px;
  letter-spacing: 0px;
  text-align: left;
`;
const SubTitle = styled.div`
  font-size: 24px;
  font-size: (16px, 1.2vw, 24px);
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 20px;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 68px;
  text-align: right;
`;
const Button = styled.div``;
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
  margin-right: 230px;
  color: #ffffff;
`;

const PhoneImage: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  position: absolute;
  /* left: 10%; */
  top: -2%;
  border-radius: 11%;
  /* width: auto;
  height: auto; */
  grid-area: first;
  justify-self: center;
`;
