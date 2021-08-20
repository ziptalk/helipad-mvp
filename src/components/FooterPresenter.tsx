import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../images/Neighborhood/ic_footerHelipadLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const FooterPresenter = ({ dashboardPage }: any) => {
  return (
    <Container dashboardPage={dashboardPage}>
      <ContentContainer>
        <Category>
          <Item>회사소개</Item>
          <Item>채용정보</Item>
          <Item>이용약관</Item>
          <Item>개인정보 처리방침</Item>
          <Item>위치기반 서비스 이용약관</Item>
          <Item>중개사 사이트 바로가기</Item>
        </Category>
        <InfoBlock>
          <Info>상호:</Info>
          <Info>대표:</Info>
          <Info>사업자등록번호:</Info>
        </InfoBlock>
        <InfoBlock>
          <Info>주소:</Info>
        </InfoBlock>
        <InfoBlock>
          <Info>팩스:</Info>
          <Info>통신판매업 신고번호:</Info>
          <Info>서비스이용문의:</Info>
        </InfoBlock>
        <InfoBlock>
          <Info>이메일:</Info>
          <Info>서비스제휴문의:</Info>
        </InfoBlock>
        {/* <Category>
        <Item>About us</Item>
        <Item>Neighborhood</Item>
        <Item>Contact us</Item>
      </Category> */}
        <SocialCategory>
          <Social>
            <FontAwesomeIcon
              style={{ width: "10px", height: "20px" }}
              icon={faFacebookF}
            />
          </Social>
          <Social>
            <FontAwesomeIcon
              style={{ width: "22px", height: "15px" }}
              icon={faYoutube}
            />
          </Social>
          <Social>
            <FontAwesomeIcon
              style={{ width: "22px", height: "22px" }}
              icon={faInstagram}
            />
          </Social>
        </SocialCategory>
        <CopyRight>Copyright © 2021. Helipad. All rights reserved.</CopyRight>
      </ContentContainer>
    </Container>
  );
};

const Container: any = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;
  height: 430px;
  background: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  display: ${(props: any) => props.dashboardPage && "none"};
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 350px;
  }
`;
const ContentContainer = styled.div`
  max-width: 1280px;
  width: 80vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 22px;
  margin-bottom: 20px;
`;
const Item = styled.div``;
const InfoBlock = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 5px;
`;
const Info = styled.div`
  font-size: 18px;
`;
// const Logo = styled(LogoSvg)`
//   @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
//     width: 90px;
//     height: 80px;
//   }
// `;
// const Category = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 392px;
//   height: 24px;
// `;
// const Item = styled.div`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 24px;
//   letter-spacing: -0.20454545319080353px;
//   text-align: left;
//   @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
//     font-size: 13px;
//     line-height: 20px;
//   }
// `; // Link로 연결
const SocialCategory = styled.div`
  width: 134px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  margin: 26px 0px;
`;
const Social = styled.div`
  width: 10px;
  height: 20px;
`; // social로 연결 ? => 우선 svg로 대체
const CopyRight = styled.div`
  opacity: 0.5;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
  }
`;
export default FooterPresenter;
