import styled from "styled-components";

import HeaderBackground from "../../../../images/Neighborhood/headerBackgroundImg.jpg";
import { ReactComponent as HomeSvg } from "../../../../images/Neighborhood/ic_houseIcon.svg";
import { ReactComponent as ScrollSvg } from "../../../../images/Neighborhood/ic_headerScrollIcon.svg";

const HeaderPresenter = () => {
  return (
    <Container>
      <LandingBlock imgPath={HeaderBackground}>
        <TitleBlock>
          <HomeIcon />
          <Title>Exploring the Neighborhood</Title>
          <SubTitle>
            Look around for a good place to start a special life
          </SubTitle>
        </TitleBlock>
      </LandingBlock>

      <Scroll />
      <MainHeaderBlock>
        <MainTitle>Neighborhood</MainTitle>
        <MainSubTitle>
          We are currently available in these Los Angeles
        </MainSubTitle>
      </MainHeaderBlock>
    </Container>
  );
};

const Container: any = styled.div`
  position: relative;
  width: 100%;
  height: 1200px;
  z-index: 1;
`;
const LandingBlock: any = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background: url(${(props: any) => props.imgPath});
  background-size: 100% 900px;
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 349px;
  left: 588px;
  z-index: 1;
  text-align: center;
  color: white;
`;
const HomeIcon = styled(HomeSvg)`
  margin-bottom: 26px;
`;

const Title = styled.div`
  font-family: Poppins;
  font-size: 52px;
  font-style: normal;
  font-weight: bold;
  line-height: 78px;
  letter-spacing: 0em;
`;
const SubTitle = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
`;
const Scroll = styled(ScrollSvg)`
  position: absolute;
  left: 935px;
  bottom: 350px;
`;
const MainHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  height: 286px;
  padding-top: 30px;
`;
const MainTitle = styled.div`
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: left;
  margin-left: 212px;
`;
const MainSubTitle = styled.div`
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 45px;
  padding-top: 17px;
`;
export default HeaderPresenter;
