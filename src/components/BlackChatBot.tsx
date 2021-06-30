import styled from "styled-components";
import { ReactComponent as ChatBotSvg } from "../images/GlobalImg/ic_blackChatBot.svg";
const BlackChatBot = () => {
  return (
    <Container>
      <ChatBotSvg />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 54px;
  height: 54px;
  right: 29px;
  bottom: 90px;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

export default BlackChatBot;
