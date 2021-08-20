import { ReactComponent as CallSvg } from "../../../images/InviteCodeForm/ic_call.svg";
import { ReactComponent as EmailSvg } from "../../../images/InviteCodeForm/ic_email.svg";
import { ReactComponent as SmileSvg } from "../../../images/InviteCodeForm/ic_smile.svg";
import { ReactComponent as InstagramSvg } from "../../../images/InviteCodeForm/ic_instagram.svg";
import { ReactComponent as TwitterSvg } from "../../../images/InviteCodeForm/ic_twitter.svg";
import styled from "styled-components";
const InviteCodeFormEtcPresenter = () => {
  return (
    <Container>
      <Contact>
        <Call />
        <Email />
      </Contact>
      <CopyRight>Copyright 2021 Helipad.</CopyRight>
      <SocialBlock>
        <FollowUs>Follow us</FollowUs>
        <Instagram />
        <Twitter />
      </SocialBlock>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1904px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
`;
const Call = styled(CallSvg)`
  margin-right: 20px;
`;
const Email = styled(EmailSvg)``;
const Smile = styled(SmileSvg)`
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
const ChatBotButton = styled.button`
  cursor: pointer;
  background-color: inherit;
  border: none;
  position: absolute;
  right: 44px;
  bottom: 138px;
  z-index: 1;
`;

const Contact = styled.div`
  position: absolute;
  right: 59.5px;
  bottom: 41px;
  z-index: 1;
`;

const CopyRight = styled.div`
  color: white;
  position: absolute;
  left: 60px;
  bottom: 41px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  z-index: 1;
`;

const SocialBlock = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  width: 148px;
  height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: absolute;
  left: 60px;
  top: 42vh;
  transform: rotate(90deg);
  z-index: 1;
`;
const FollowUs = styled.div``;
const Twitter = styled(TwitterSvg)``;
const Instagram = styled(InstagramSvg)``;

export default InviteCodeFormEtcPresenter;
