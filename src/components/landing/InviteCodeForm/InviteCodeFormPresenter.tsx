import styled from "styled-components";
enum Content {
  FIRSTTITLE = "Real Estate Investing,",
  SECONDTITLE = "Reimagined.",
  SUBTITLE = "You can only access it with a membership. Please enter an invitation code.",
  ENTER = "ENTER",
  ERRORMESSAGE = "Invalid invite code",
  PLACEHOLDER = "Invite code",
}
const InviteCodeFormPresenter = ({
  inviteCodeValidation,
  handleOnChange,
  checkInviteCode,
  checkInviteCodeWithEnterKey,
}: any) => {
  return (
    <Container>
      <SubContainer>
        <Title>
          {Content.FIRSTTITLE}
          <br />
          {Content.SECONDTITLE}
        </Title>
        <SubTitle>{Content.SUBTITLE}</SubTitle>
        {inviteCodeValidation === "invalid" && (
          <ErrorMessage>{Content.ERRORMESSAGE}</ErrorMessage>
        )}
        <InputBlock onChange={handleOnChange}>
          <Input onKeyDown={checkInviteCodeWithEnterKey}></Input>
          <SendButton onClick={checkInviteCode}>{Content.ENTER}</SendButton>
        </InputBlock>
      </SubContainer>
    </Container>
  );
};
export default InviteCodeFormPresenter;
const Container = styled.div`
  /* background-color: transparent; */
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  /* max-width: 1904px; */
  height: 90vh;
  position: absolute;
  top: 0px;
  z-index: 1;
`;
// 가운데 정렬을 위한 SubContainer => 이 페이지만 background가 black임
const SubContainer = styled.div`
  max-width: 1482px;
  width: 50%;
  height: 100%;
  color: white;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3vw;
  padding-bottom: 250px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookM} {
    width: 60%;
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 60%;
  }
`;

const Title = styled.div`
  /* font-family: Helvetica; */
  min-width: 800px;
  /* font-family: Roboto; */
  font-size: 76px;
  font-style: normal;
  font-weight: 400;
  line-height: 96px;
  letter-spacing: 0em;
  margin-bottom: 26px;
  text-align: left;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 60px;
    line-height: 70px;
  }
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  margin-bottom: 56px;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 16px;
    line-height: 19px;
  }
`;

const InputBlock = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);

  width: 422px;
  height: 62px;
  display: flex;
  align-items: center;
  margin-right: 21%;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 300px;
    height: 50px;
    /* line-height: 70px; */
  }
`;
const Input = styled.input.attrs({
  type: "password",
  placeholder: `${Content.PLACEHOLDER}`,
})`
  width: 304px;
  height: 40px;
  background-color: inherit;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  outline: none;
  margin-left: 15px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 180px;
    font-size: 14px;
  }
`;
const SendButton = styled.button`
  width: 118px;
  height: 40px;
  background: #b69142;
  margin-right: 10px;
  padding: 0;

  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border: none;
  color: #000000;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 14px;
    line-height: 16px;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fff2f4;
  border-color: rgba(227, 0, 0, 0.4);
  font-size: 20px;
  font-weight: 500;
  width: 422px;
  height: 35px;
  padding: 5px 0px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 5px;
  color: #e96e6e;
`;
