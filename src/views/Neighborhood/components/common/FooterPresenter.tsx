import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../../images/Neighborhood/ic_footerHelipadLogo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const FooterPresenter = () => {
  return (
    <Container>
      <Logo />
      <Category>
        <Item>About us</Item>
        <Item>Neighborhood</Item>
        <Item>Contact us</Item>
      </Category>
      <SocialCategory>
        <Social>
          <FontAwesomeIcon icon={faFacebookF} />
        </Social>
        <Social>
          <FontAwesomeIcon icon={faYoutube} />
        </Social>
        <Social>
          <FontAwesomeIcon icon={faInstagram} />
        </Social>
      </SocialCategory>
      <CopyRight>Copyright © 2021. Helipad. All rights reserved.</CopyRight>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 430px;
  background: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
const Logo = styled(LogoSvg)``;
const Category = styled.div`
  display: flex;
  justify-content: space-between;
  width: 392px;
  height: 24px;
`;
const Item = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.20454545319080353px;
  text-align: left;
`; // Link로 연결
const SocialCategory = styled.div`
  width: 134px;
  height: 22px;
  display: flex;
  justify-content: space-between;
`;
const Social = styled.div``; // social로 연결 ? => 우선 svg로 대체
const CopyRight = styled.div`
  opacity: 0.5;
`;
export default FooterPresenter;
