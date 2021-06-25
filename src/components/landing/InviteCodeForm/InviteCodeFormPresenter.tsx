import styled from "styled-components";
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
          Real Estate Investing,
          <br />
          Reimagined.
        </Title>
        <SubTitle>
          You can only access it with a membership. Please enter an invitation
          code.
        </SubTitle>
        {!inviteCodeValidation && (
          <ErrorMessage>Invalid invite code</ErrorMessage>
        )}
        <InputBlock onChange={handleOnChange}>
          <Input onKeyDown={checkInviteCodeWithEnterKey}></Input>
          <SendButton onClick={checkInviteCode}>SEND CODE</SendButton>
        </InputBlock>
      </SubContainer>
    </Container>
  );
};
export default InviteCodeFormPresenter;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
// 가운데 정렬을 위한 SubContainer => 이 페이지만 background가 black임
const SubContainer = styled.div`
  padding-top: 150px;
  width: 55%;
  color: white;
  margin: auto;
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
  border: 2px solid #4c4c4c;
  width: 422px;
  height: 62px;
  display: flex;
  align-items: center;
`;
const Input = styled.input.attrs({
  type: "password",
  placeholder: "Invite code",
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
