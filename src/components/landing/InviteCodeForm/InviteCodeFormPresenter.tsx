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
        {!inviteCodeValidation && (
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
  width: 100%;
  height: 100vh;
  background-color: transparent;
`;
// 가운데 정렬을 위한 SubContainer => 이 페이지만 background가 black임
const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 250px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    padding-left: 150px;
  }
`;

const Title = styled.div`
  /* font-family: Helvetica; */
  /* font-family: Roboto; */
  font-family: Poppins, sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 96px;
  letter-spacing: 0em;

  margin-bottom: 26px;
  text-align: left;
`;
const SubTitle = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  margin-bottom: 56px;
  text-align: left;
`;

const InputBlock = styled.div`
  border: 2px solid white;
  width: 422px;
  height: 62px;
  display: flex;
  align-items: center;
`;
const Input = styled.input.attrs({
  type: "password",
  placeholder: `${Content.PLACEHOLDER}`,
})`
  width: 304px;
  height: 40px;
  background-color: inherit;
  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  outline: none;
  margin-left: 15px;
  ::placeholder {
    color: white;
  }
`;
const SendButton = styled.button`
  width: 118px;
  height: 40px;
  background: #b69142;
  margin-right: 10px;
  padding: 0;

  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border: none;
  color: #000000;
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
