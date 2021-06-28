import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundSvg from "../../../images/Neighborhood/ic_contactBackground.svg";
import { ReactComponent as AdminEmailSvg } from "../../../images/Neighborhood/ic_adminEmailIcon.svg";
import { ReactComponent as AdminPhoneSvg } from "../../../images/Neighborhood/ic_adminPhoneIcon.svg";
import { ReactComponent as PointerSvg } from "../../../images/Neighborhood/ic_contactPointer.svg";
const NeighborhoodContactPresenter = () => {
  return (
    <Container>
      <Content>
        <TitleBlock>
          <Title>Contact Us</Title>
          <SubTitle>
            We would like to discuss the project, so please send us an email or
            leave your contact information.
          </SubTitle>
        </TitleBlock>
        <AdminInfoBlock>
          <InfoBlock>
            <AdminPhoneSvg />
            <Info>++00-000-0000-0000</Info>
          </InfoBlock>
          <InfoBlock>
            <AdminEmailSvg />
            <Info>brian@helipadrealty.com</Info>
          </InfoBlock>
        </AdminInfoBlock>

        <ContactButton to="">
          Get in touch
          <Pointer />
        </ContactButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 139px;
  width: 1920px;
  height: 740px;

  background-image: url(${BackgroundSvg});
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  margin-top: 133px;
  margin-left: 212px;
  width: 883px;
  height: 508px;
`;
const TitleBlock = styled.div`
  width: 885px;
  height: 216px;
  margin-bottom: 70px;
`;
const Title = styled.div`
  height: 195px;
  font-family: Poppins;
  font-size: 130px;
  font-style: normal;
  font-weight: 500;
  line-height: 195px;
  letter-spacing: -5px;
  text-align: left;
`;
const SubTitle = styled.div`
  height: 27px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const AdminInfoBlock = styled.div`
  width: 355px;
  height: 92px;
  margin-bottom: 70px;
`;
const InfoBlock = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  border-bottom: 1px solid white;
  margin-left: 16px;
`;
const ContactButton = styled(Link)`
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #b69142;
  color: black;
  margin-right: 10px;
`;

const Pointer = styled(PointerSvg)`
  margin-left: 10px;
`;
export default NeighborhoodContactPresenter;
