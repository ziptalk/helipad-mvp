import styled from "styled-components";
const RegisterPresenter = () => {
  return (
    <Container>
      <InputContainer>
        <NameContainer>
          <Name placeholder="Last name"></Name>
          <Name placeholder="First name"></Name>
        </NameContainer>
        <KakaoTitle>@ Kakao Talk ID</KakaoTitle>
        <KakaoContent></KakaoContent>
        <Email></Email>
        <Password></Password>
        <PasswordConfirm></PasswordConfirm>
        <BankerOrAgentContainer>
          <BankerOrAgentCheckButton></BankerOrAgentCheckButton>
          <BankerOrAgentContent>
            I'm private banker or real estate agent
          </BankerOrAgentContent>
        </BankerOrAgentContainer>
      </InputContainer>
      <QuestionContainer>
        <QuestionTitleContainer>
          <QuestionIcon>Q</QuestionIcon>
          <QuestionTitle>
            What types of properties are you interested in? <br />
            (check all that apply)
          </QuestionTitle>
        </QuestionTitleContainer>
        <QuestionContentContainer>
          <QuestionSubTitle>1. Residential</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              <Question>Single Family Home</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Townhouse / Condo</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>2.Commercial</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              <Question>Multifamily units</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Retail</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Industrial</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Land</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>3. How did you discover Helipad?</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              <Question>Search engine (Google, Naver, etc.)</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>

            <QuestionItem>
              <Question>Recommended by friend or colleague</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Social media</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Blog or publication</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
        </QuestionContentContainer>
        <QuestionTitleContainer>
          <QuestionIcon>Q</QuestionIcon>
          <QuestionTitle>
            Why are you interested in a home in the U.S.? <br />
            (check all that apply)
          </QuestionTitle>
        </QuestionTitleContainer>

        <QuestionContentContainer>
          <QuestionList>
            <QuestionItem>
              <Question>Investment</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Rental Income Opportunity</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Second Home</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Relocating to U.S.</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>Child’s U.S. Education</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
        </QuestionContentContainer>
        <QuestionTitleContainer>
          <QuestionIcon>Q</QuestionIcon>
          <QuestionTitle>
            What is your ideal price point? <br />
            (check all that apply)
          </QuestionTitle>
        </QuestionTitleContainer>

        <QuestionContentContainer>
          <QuestionList>
            <QuestionItem>
              <Question>Under $500K</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>US $500K - $1mm</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>US $1mm-$2.5m</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>$2.5m-$5.0m</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>$5.0m-10m</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
        </QuestionContentContainer>
        <QuestionTitleContainer>
          <QuestionIcon>Q</QuestionIcon>
          <QuestionTitle>
            What is your preferred area? <br />
            (check all that apply)
          </QuestionTitle>
        </QuestionTitleContainer>

        <QuestionContentContainer>
          <QuestionList>
            <QuestionItem>
              <Question>CA – Los Angeles</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>CA – Orange County</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>CA – San Diego</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>CA – San Francisco</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>NV – Las Vegas</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>New York</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question>New Jersey</Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
            <QuestionItem>
              <Question></Question>
              <QuestionCheckButton></QuestionCheckButton>
            </QuestionItem>
          </QuestionList>
        </QuestionContentContainer>
      </QuestionContainer>
      <ButtonContainer>
        <RegisterButton>Register</RegisterButton>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 80vw;
`;
const InputContainer = styled.div`
  margin: 0 auto;
  width: 410px;
  height: 468px;
`;
const NameContainer = styled.div`
  display: flex;
`;
const Name = styled.input.attrs({ type: "text" })`
  width: 195px;
  height: 56px;
`;

const KakaoTitle = styled.div``;
const KakaoContent = styled.input.attrs({
  type: "text",
  placeholder: "KaKao Talk ID",
})`
  width: 410px;
  height: 56px;
`;
const Email = styled.input.attrs({
  type: "email",
  placeholder: "Brian@gmail.com",
})`
  width: 410px;
  height: 56px;
`;
const Password = styled.input.attrs({
  type: "password",
  placeholder: "********",
})`
  width: 410px;
  height: 56px;
`;
const PasswordConfirm = styled.input.attrs({
  type: "password",
  placeholder: "Password confirmation",
})`
  width: 410px;
  height: 56px;
`;
const BankerOrAgentContainer = styled.div`
  width: 410px;
  height: 56px;
  display: flex;
  align-items: center;
  background: #edfdff;
`;
const BankerOrAgentCheckButton = styled.input.attrs({ type: "checkbox" })``;
const BankerOrAgentContent = styled.div``;
const QuestionContainer = styled.div`
  width: 411px;
  margin: 0 auto;
`;
const QuestionTitleContainer = styled.div`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px dotted #eaeaea;
  display: flex;
  align-items: center;
  height: 76px;
`;
const QuestionTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
const QuestionIcon = styled.div`
  width: 16px;
  height: 24px;
`;
const QuestionContentContainer = styled.div``;

const QuestionSubTitle = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
const QuestionList = styled.div``;
const QuestionItem = styled.div`
  display: flex;
  justify-content: space-betwen;
`;
const Question = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
const QuestionCheckButton = styled.input.attrs({
  type: "checkbox",
})``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 35px;
`;
const RegisterButton = styled.button`
  background: #b69142;
  width: 410px;
  height: 56px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
  color: #212121;
  border: none;
  cursor: pointer;
`;
const LoginButton = styled.div`
  height: 56px;
  padding: 22.5px 15px 15px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
  color: #b69142;
  cursor: pointer;
`;

export default RegisterPresenter;
