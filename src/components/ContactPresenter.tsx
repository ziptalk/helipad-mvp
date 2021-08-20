import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundJpg from "../images/Neighborhood/List/contactUs.jpg";
import { ReactComponent as AdminEmailSvg } from "../images/Neighborhood/ic_adminEmailIcon.svg";
import { ReactComponent as AdminPhoneSvg } from "../images/Neighborhood/ic_adminPhoneIcon.svg";
import { ReactComponent as PointerSvg } from "../images/Neighborhood/ic_contactPointer.svg";
const ContactPresenter = () => {
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
  position: relative;
  margin-top: 139px;
  width: 100vw;
  height: 740px;

  background-image: url(${BackgroundJpg});
  background-size: cover;
  color: white;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 500px;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1904px;
  margin: 0 auto;
  padding-top: 133px;
  padding-left: 212px;
`;
const TitleBlock = styled.div`
  margin-bottom: 70px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin-bottom: 40px;
  }
`;
const Title = styled.div`
  font-size: 130px;
  font-style: normal;
  font-weight: 500;
  line-height: 195px;
  letter-spacing: -5px;
  text-align: left;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 70px;
    line-height: 100px;
  }
`;
const SubTitle = styled.div`
  height: 27px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 15px;
  }
`;
const AdminInfoBlock = styled.div`
  width: 355px;

  margin-bottom: 70px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    margin-bottom: 50px;
  }
`;
const InfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  border-bottom: 1px solid white;
  margin-left: 16px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 15px;
  }
`;
const AdminEmail = styled(AdminEmailSvg)`
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 13px;
    height: 13px;
    font-size: 13px;
    line-height: 15px;
  }
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
export default ContactPresenter;
