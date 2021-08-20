import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { InputField, InputType } from "./InputField";
import CheckField from "./CheckField";
import { Link } from "react-router-dom";
const RegisterPresenter = ({
  setLastName,
  setFirstName,
  setKakaoId,
  setEmail,
  setPassword,
  setPasswordConfirm,
  setIsAgent,
  onSuccess,
  onError,
  handleInterestProperty,
  discoverPathOther,
  handleDiscoverPathOther,
  handleInterestHome,
  handleIdealPrice,
  preferredAreaOther,
  handlePreferredArea,
  handlePreferredAreaOther,
  onTrySignUp,
}: any) => {
  return (
    <Container>
      <InputContainer>
        <NameContainer>
          <InputField
            type={InputType.TEXT}
            title="last name"
            onChange={(name: string) => setLastName(name)}
          />
          <InputField
            type={InputType.TEXT}
            title="first name"
            onChange={(name: string) => setFirstName(name)}
          />
          {/* <Name placeholder="Last name" style={{ marginRight: "20px" }}>
          </Name>
          <Name placeholder="First name">
          </Name> */}
        </NameContainer>
        <KakaoTitle>
          <RiKakaoTalkFill style={{ fontSize: "20px", marginRight: "10px" }} />
          <div>Kakao Talk ID</div>
        </KakaoTitle>
        <InputField
          type={InputType.TEXT}
          title="kakao ID"
          onChange={(kakaoId: string) => setKakaoId(kakaoId)}
        />
        <InputField
          type={InputType.EMAIL}
          title="email"
          onChange={(email: string) => setEmail(email)}
        />
        <InputField
          type={InputType.PASSWORD}
          title="password"
          onChange={(password: string) => {
            setPassword(password);
          }}
        />
        <InputField
          type={InputType.PASSWORD}
          title="password confirmation"
          onChange={(password: string) => setPasswordConfirm(password)}
        />

        <BankerOrAgentContainer>
          <BankerOrAgentCheckButton
            onChange={(e) => {
              setIsAgent(e.target.checked);
            }}
          ></BankerOrAgentCheckButton>
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
              {/* <Question>Single Family Home</Question> */}
              <CheckField
                name="property_residential"
                value="Single Family Home"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Townhouse / Condo</Question> */}
              <CheckField
                name="property_residential"
                value="Townhouse / Condo"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>2. Commercial</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              {/* <Question>Multifamily units</Question> */}
              <CheckField
                name="property_commercial"
                value="Multifamily units"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Retail</Question> */}
              <CheckField
                name="property_commercial"
                value="Retail
          "
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Industrial</Question> */}
              <CheckField
                name="property_commercial"
                value="Industrial"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Land</Question> */}
              <CheckField
                name="property_commercial"
                value="Land"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>3. How did you discover Helipad?</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              {/* <Question>Search engine (Google, Naver, etc.)</Question> */}
              <CheckField
                name="discoverPath"
                value="Search engine (Google, Naver, etc.)"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Recommended by friend or colleague</Question> */}
              <CheckField
                name="discoverPath"
                value="Recommended by friend or colleague"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Social media</Question> */}
              <CheckField
                name="discoverPath"
                value="Social media"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Blog or publication</Question> */}
              <CheckField
                name="discoverPath"
                value="Blog or publication"
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <OtherBlock>
              <OtherTitle>Other</OtherTitle>
              <OtherInput
                value={discoverPathOther}
                onChange={(e) => handleDiscoverPathOther(e.target.value)}
              ></OtherInput>
            </OtherBlock>
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
              {/* <Question>Investment</Question> */}
              <CheckField
                name="interestHome"
                value="Investment"
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Rental Income Opportunity</Question> */}
              <CheckField
                name="interestHome"
                value="Rental Income Opportunity"
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Second Home</Question> */}
              <CheckField
                name="interestHome"
                value="Second Home"
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Relocating to U.S.</Question> */}
              <CheckField
                name="interestHome"
                value="Relocating to U.S."
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Child's U.S. Education</Question> */}
              <CheckField
                name="interestHome"
                value="Child’s U.S. Education"
                onChange={handleInterestHome}
              />
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
              {/* <Question>Under $500K</Question> */}
              <CheckField
                name="idealPrice"
                value="Under $500K"
                onChange={handleIdealPrice}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>US $500K - $1mm</Question> */}
              <CheckField
                name="idealPrice"
                value="US $500K - $1mm"
                onChange={handleIdealPrice}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>US $1mm-$2.5m</Question> */}
              <CheckField
                name="idealPrice"
                value="US $1mm-$2.5m"
                onChange={handleIdealPrice}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>$2.5m-$5.0m</Question> */}
              <CheckField
                name="idealPrice"
                value="$2.5m-$5.0m"
                onChange={handleIdealPrice}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>$5.0m-10m</Question> */}
              <CheckField
                name="idealPrice"
                value="$5.0m-10m"
                onChange={handleIdealPrice}
              />
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
              {/* <Question>CA – Los Angeles</Question> */}
              <CheckField
                name="preferredArea"
                value="CA – Los Angeles
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – Orange County</Question> */}
              <CheckField
                name="preferredArea"
                value="CA – Orange County
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – San Diego</Question> */}
              <CheckField
                name="preferredArea"
                value="CA – San Diego
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – San Francisco</Question> */}
              <CheckField
                name="preferredArea"
                value="CA – San Francisco
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>NV – Las Vegas</Question> */}
              <CheckField
                name="preferredArea"
                value="NV – Las Vegas
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>New York</Question> */}
              <CheckField
                name="preferredArea"
                value="New York
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>New Jersey</Question> */}
              <CheckField
                name="preferredArea"
                value="New Jersey
          "
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <OtherBlock>
              <OtherTitle>Others (fill in)</OtherTitle>
              <OtherInput
                type="text"
                value={preferredAreaOther}
                onChange={(e) => handlePreferredAreaOther(e.target.value)}
              ></OtherInput>
            </OtherBlock>
          </QuestionList>
        </QuestionContentContainer>
      </QuestionContainer>
      <ButtonContainer>
        <RegisterButton onClick={onTrySignUp}>Registration</RegisterButton>
        <Link to="/auth/login">
          <LoginButton>Login</LoginButton>
        </Link>
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

  #lastName {
  }
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
  margin-bottom: 10px;
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
  margin: 0px 20px;
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
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 6px;
`;
const QuestionList = styled.div`
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
  border: 1px solid #eaeaea;
  background-color: ${(props) => (props.checked ? "#B69142" : "papayawhip")};
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

const OtherBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;
const OtherTitle = styled.div`
  font-size: 17px;

  height: 32px;
`;
const OtherInput = styled.input.attrs({
  type: "text",
})`
  height: 32px;
  width: 200px;
`;
export default RegisterPresenter;
