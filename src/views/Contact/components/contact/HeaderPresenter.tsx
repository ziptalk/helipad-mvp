import styled from "styled-components";
import ContactImg from "../../../../images/contactUs.png";
import HeaderBackground from "../../../../images/Neighborhood/headerBackgroundImg.jpg";

const HeaderPresenter = () => {
  return (
    <Container>
      <LandingBlock imgPath={ContactImg}>
        {/* <LandingBlock imgPath={HeaderBackground}> */}
        <TitleBlock>
          <Title>Say Hello.</Title>
          <SubTitle>Tell us how we can guide you.</SubTitle>
        </TitleBlock>
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
  height: 700px;
  background: url(${(props: any) => props.imgPath});
  background-size: cover;
  background-repeat: no-repeat;
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
// const HomeIcon = styled(HomeSvg)`
//   margin-bottom: 26px;
// `;

const Title = styled.div`
  font-size: 34px;
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
// const Scroll = styled(ScrollSvg)`
//   position: relative;
//   top: 283px;
//   /* left: 935px; */
//   /* bottom: 100px; */
// `;
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
