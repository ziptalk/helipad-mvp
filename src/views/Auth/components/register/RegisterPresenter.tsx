import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

const RegisterPresenter = () => {
  return (
    <Container>
      <InputContainer>
        <NameContainer>
          <Name placeholder="Last name" style={{ marginRight: "20px" }}></Name>
          <Name placeholder="First name"></Name>
        </NameContainer>
        <KakaoTitle>
          <RiKakaoTalkFill style={{ fontSize: "20px", marginRight: "10px" }} />
          <div>Kakao Talk ID</div>
        </KakaoTitle>
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
            What types of properties are you interested <br /> in? (check all
            that apply)
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
          <QuestionSubTitle>2. Commercial</QuestionSubTitle>
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
              <Question>Child's U.S. Education</Question>
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
        <RegisterButton>Registeration</RegisterButton>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </Container>
  );
};
const Container = styled.div``;
const InputContainer = styled.div`
  margin: 0 auto;
  width: 410px;
  // height: 468px;
  padding-top: 32px;
`;
const NameContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 22px;
`;
const Name = styled.input.attrs({ type: "text" })`
  width: 195px;
  height: 56px;
  border: solid 1px #eaeaea;
  padding-left: 10px;
  font-size: 16px;
  color: #a3a3a3;
  font-weight: 400;
`;
const KakaoTitle = styled.div`
  font-size: 16px;
  align-items: center;
  height: 30px;
  display: flex;
`;
const KakaoContent = styled.input.attrs({
  type: "text",
  placeholder: "KaKao Talk ID",
})`
  width: 410px;
  height: 56px;
  border: solid 1px #eaeaea;
  padding-left: 10px;
  margin: 10px 0 10px 0;
  font-size: 16px;
  color: #a3a3a3;
  font-weight: 400;
`;
const Email = styled.input.attrs({
  type: "email",
  placeholder: "Brian@gmail.com",
})`
  width: 410px;
  height: 56px;
  border: solid 1px #eaeaea;
  margin: 10px 0 10px 0;
  padding-left: 10px;
  font-size: 16px;
  color: #a3a3a3;
  font-weight: 400;
  background-color: #fafafa;
`;
const Password = styled.input.attrs({
  type: "password",
  placeholder: "********",
})`
  width: 410px;
  height: 56px;
  border: solid 1px #eaeaea;
  margin: 10px 0 10px 0;
  padding-left: 10px;
  font-size: 16px;
  color: #a3a3a3;
  font-weight: 400;
  background-color: #fafafa;
`;
const PasswordConfirm = styled.input.attrs({
  type: "password",
  placeholder: "Password confirmation",
})`
  width: 410px;
  height: 56px;
  border: solid 1px #eaeaea;
  margin: 10px 0 20px 0;
  padding-left: 10px;
  font-size: 16px;
  color: #a3a3a3;
  font-weight: 400;
`;
const BankerOrAgentContainer = styled.div`
  width: 410px;
  height: 56px;
  display: flex;
  align-items: center;
  background: #edfdff;
`;
const BankerOrAgentCheckButton = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #eaeaea;
`;
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
  margin-top: 35px;
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
  width: 44px;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  // vertical-align: top;
  text-align: center;
  padding-top: 10px;
`;
const QuestionContentContainer = styled.div`
  padding: 10px;
  padding-left: 44px;
`;
const QuestionSubTitle = styled.div`
  font-size: 14px;
  font-style: bold;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 6px;
`;
const QuestionList = styled.div`
  margin-bottom: 14px;
  padding-left: 20px;
`;
const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
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
})`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #EAEAEA;
  background-color: ${(props) => (props.checked ? "#B69142" : "papayawhip")}
  // background-color: #B69142;
  color: white;
`;
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
