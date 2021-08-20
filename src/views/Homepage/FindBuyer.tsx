import styled from "styled-components";
import findBuyer from "../../images/Homepage/findBuyer.jpg";
import { ReactComponent as ArrowSvg } from "../../images/Homepage/FindBuyer/navArrow.svg";
const FindBuyer = () => {
  return (
    <Container>
      <ContentContainer>
        <TitleWrapper>
          <Category>부동산 판매</Category>
          <Title>Find the Right Buyer</Title>
          <SubTitle>
            Let Helipad market your property in the best way possible and stand
            out among the crowd.
          </SubTitle>
        </TitleWrapper>
        <ContentWrapper>
          <NavigationBlock>
            <Nav>
              Looking
              <StyledArrow />
            </Nav>
            <Nav>
              Location
              <StyledArrow />
            </Nav>
            <Nav>
              Property
              <StyledArrow />
            </Nav>
          </NavigationBlock>
          <ContentBlock imgPath={findBuyer}></ContentBlock>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;

  background-color: #ffffff;
  height: 100vh;
  max-height: 1100px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.5fr 1.2fr;
  max-width: 1904px;
  width: 80vw;
  height: 100%;

  align-items: center;
  justify-items: center;
  gap: 50px;
`;
const TitleWrapper = styled.div`
  max-width: 269px;
  justify-self: end;
`;
const Category = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
  color: #b69142;
`;
const Title = styled.div`
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 87px;
  letter-spacing: 0px;
  text-align: left;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
`;
const ContentWrapper = styled.div``;
const NavigationBlock = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, auto));
  justify-items: center;

  /* align-content: center; */
  min-height: clamp(45px, 4.9vw, 94px);

  background: #ffffff;
  box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  border-bottom-left-radius: 25px;
  margin-bottom: 25px;
  margin-left: 120px;
  border-top: none;
`;

const Nav = styled.div`
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.42717939615249634px;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 16% 0;
  border-right: 1px solid #e4e4e4; ;
`;

const StyledArrow = styled(ArrowSvg)`
  margin-left: 10px;
`;
const ContentBlock: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;
`;

export default FindBuyer;
