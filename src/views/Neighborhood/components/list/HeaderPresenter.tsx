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
        <Scroll />
      </LandingBlock>
    </Container>
  );
};

const Container: any = styled.div`
  position: relative;
  width: 100vw;
`;
const LandingBlock: any = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: url(${(props: any) => props.imgPath});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const TitleBlock = styled.div`
  position: relative;
  /* top: 349px; */
  /* left: 588px; */
  z-index: 1;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HomeIcon = styled(HomeSvg)`
  margin-bottom: 26px;
`;

const Title = styled.div`
  font-size: 52px;
  font-style: normal;
  font-weight: bold;
  line-height: 78px;
  letter-spacing: 0em;
`;
const SubTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
`;
const Scroll = styled(ScrollSvg)`
  position: relative;
  top: 283px;
  /* left: 935px; */
  /* bottom: 100px; */
`;
const MainHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  height: 286px;
  padding-top: 30px;
`;
const MainTitle = styled.div`
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
  letter-spacing: -2px;
  text-align: left;
  margin-left: 212px;
`;
const MainSubTitle = styled.div`
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
