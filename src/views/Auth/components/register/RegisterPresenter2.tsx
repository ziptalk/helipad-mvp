import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { InputField, InputType } from "./InputField";
import CheckField from "./CheckField";
import { Link } from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import Group from "../../../../images/Group2.png";
import { StepButton } from "@material-ui/core";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import Congratulation from "../../../../images/Congratulation.png";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../../Locales/i18n';

interface HandleInf {
  handle : {
    id: any;
    value: any;
    percent: any;
  };
  getHandleProps : any;
}

interface TrackInf {
  source : any;
  target: any;
  getTrackProps: any;
}

export function Handle(handle: HandleInf) {
  return (
    <div
      style={{
        left: `${handle.handle.percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 30,
        zIndex: 2,
        width: 20,
        height: 20,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        color: '#333',
      }}
      {...handle.getHandleProps(handle.handle.id)}
    >
      <div style={{ fontFamily: 'Poppins', fontSize: 12, marginTop: -35, backgroundColor:"#6C63FF", color:"#FFFFFF", width:"50px", padding:"2px", marginLeft:"-15px", borderRadius:"5px" }}>
        ${1000000 > handle.handle.value && handle.handle.value >= 1000 ? 
        <>{(handle.handle.value/1000).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}K</> 
        : <>{handle.handle.value >= 1000000 ? 
        <>{(handle.handle.value/1000000).toFixed(1).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}M</>:
        <>{handle.handle.value.toString()}</>}
        </>}
      </div>
    </div>
  )
}

// function Track(track: TrackInf) {
//   return (
//     <div
//       style={{
//         position: 'absolute',
//         height: 10,
//         zIndex: 1,
//         marginTop: 35,
//         backgroundColor: '#546C91',
//         borderRadius: 5,
//         cursor: 'pointer',
//         left: `${track.source.percent}%`,
//         width: `${target.percent - source.percent}%`,
//       }}
//       {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
//     />
//   )
// }


const RegisterPresenter2 = ({
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
  const [pageState, setPageState] = useState(-1);
  const [password2, setPassword2] = useState('');
  const [passwordConfirm2, setPasswordConfirm2] = useState('');
    const { t, i18n } = useTranslation();
  
  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  useEffect(()=>{
    function checkLanguage(){
      let currentLanguage = localStorage.getItem('language');
      console.log(currentLanguage)

      if(currentLanguage=="en" || currentLanguage=="ko"){
        handleChangeLanguage(currentLanguage)
      }
    }

    window.addEventListener('storage', checkLanguage)

    return () => {
      window.removeEventListener('storage', checkLanguage)
    }
  },[])

  const nextOnClick = () => {
    let tmpState = pageState;
    setPageState(tmpState+1);
  }

  const nextOnClick2 = () => {
    if(password2!=passwordConfirm2){
      alert("Password != PasswordConfirmation");
    }else{
      let tmpState = pageState;
      setPageState(tmpState+1);
    }
  }

  const backOnClick = () => {
    let tmpState = pageState;
    setPageState(tmpState-1);
  }

  return (<>
    <NewContainer>
      {pageState==0 ? 
      <img style={{objectFit:"none", marginBottom:"30px"}} src={Group}/>:<>
      {pageState>2?
      <img style={{width:"83px", marginBottom:"30px"}} src={Group}/>:<></>}
      </>}
      {pageState<3&&pageState!=-1?<>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <MainText>{t('register_1')}</MainText>
      </div>
      {/* <MainText>account...</MainText> */}
      </>
      :<></>}
        {pageState == 0 ? <>
          <WhiteBox>
            <StepMark>Step {pageState+1} of 3</StepMark>
          <QuestionTitleContainer>
          <QuestionTitle>
          {t('register_2')}
          </QuestionTitle>
          <QuestionLittleTitle>
          {t('register_3')}
          </QuestionLittleTitle>
        </QuestionTitleContainer>
        <QuestionContentContainer>
          <QuestionList>
            <QuestionItem>
              {/* <Question>Investment</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_4')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Rental Income Opportunity</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_5')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Second Home</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_6')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Relocating to U.S.</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_7')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Child's U.S. Education</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_8')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Child's U.S. Education</Question> */}
              <CheckField
                name="interestHome"
                value={t('register_9')}
                onChange={handleInterestHome}
              />
            </QuestionItem>
          </QuestionList>
        </QuestionContentContainer>
        {/* <NextButton onClick={nextOnClick}>Next -</NextButton> */}
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <NextButton style={{backgroundColor:"#B7B7B7", width:"160px", marginRight:"10px"}} onClick={backOnClick}>Back</NextButton>
          <NextButton style={{width:"160px"}} onClick={nextOnClick}>{t('register_10')}</NextButton>
        </div>
        </WhiteBox></>:<>
        {pageState==1?<>
        <WhiteBox>
        <StepMark>Step {pageState+1} of 3</StepMark>
          <QuestionTitleContainer>
          <QuestionTitle>
          {t('register_12')}
          </QuestionTitle>
        </QuestionTitleContainer>
        <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"-50px"}}>
        <QuestionContentContainer style={{display:"block", width:"450px"}}>
          <QuestionSubTitle>{t('register_13')}</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              {/* <Question>Single Family Home</Question> */}
              <CheckField
                name="property_residential"
                value={t('register_14')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Townhouse / Condo</Question> */}
              <CheckField
                name="property_residential"
                value={t('register_15')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>{t('register_16')}</QuestionSubTitle>
          <QuestionList>
            <QuestionItem>
              {/* <Question>Multifamily units</Question> */}
              <CheckField
                name="property_commercial"
                value={t('register_17')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Retail</Question> */}
              <CheckField
                name="property_commercial"
                value={t('register_18')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Industrial</Question> */}
              <CheckField
                name="property_commercial"
                value={t('register_19')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>Land</Question> */}
              <CheckField
                name="property_commercial"
                value={t('register_20')}
                onChange={handleInterestProperty}
              />
            </QuestionItem>
          </QuestionList>
          <QuestionSubTitle>{t('register_21')}</QuestionSubTitle>
          <Slider
            rootStyle={sliderStyle}
            domain={[0, 20000000]} // [min, max]
            values={[5000000, 15000000]} // slider values
          >
            <Rail>
              {({ getRailProps }) => (
                <div style={railStyle} {...getRailProps()} /> // render your clickable rail!
              )}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            {/* <Tracks right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks> */}
            {/* <Ticks count={10}>
              {({ ticks }) => (
                // render your (optional) ticks!
                // count prop = auto generate approximately 10 uniformly spaced, human-readable ticks
              )}
            </Ticks> */}
          </Slider>
        </QuestionContentContainer>
        </div>
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <NextButton style={{backgroundColor:"#B7B7B7", width:"160px", marginRight:"10px"}} onClick={backOnClick}>{t('register_22')}</NextButton>
          <NextButton style={{width:"160px"}} onClick={nextOnClick}>{t('register_23')}</NextButton>
        </div>
        </WhiteBox>
        </>:<>{pageState==2?<>
        <WhiteBox>
        <StepMark>Step {pageState+1} of 3</StepMark>
          <QuestionTitleContainer>
          <QuestionTitle>
          {t('register_32')}
          </QuestionTitle>
          <QuestionLittleTitle>
          {t('register_33')}
          </QuestionLittleTitle>
        </QuestionTitleContainer>
        <QuestionContentContainer>
          <QuestionList>
            <QuestionItem>
              {/* <Question>CA – Los Angeles</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_34')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – Orange County</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_35')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – San Diego</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_36')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>CA – San Francisco</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_37')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>NV – Las Vegas</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_38')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>New York</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_39')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <QuestionItem>
              {/* <Question>New Jersey</Question> */}
              <CheckField
                name="preferredArea"
                value={t('register_40')}
                onChange={handlePreferredArea}
              />
            </QuestionItem>
            <OtherBlock>
              <OtherTitle>{t('register_41')}</OtherTitle>
              <OtherInput
                type="text"
                value={preferredAreaOther}
                onChange={(e) => handlePreferredAreaOther(e.target.value)}
              ></OtherInput>
            </OtherBlock>
          </QuestionList>
        </QuestionContentContainer>
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <NextButton style={{backgroundColor:"#B7B7B7", width:"160px", marginRight:"10px"}} onClick={backOnClick}>{t('register_42')}</NextButton>
          <NextButton style={{width:"160px"}} onClick={nextOnClick}>{t('register_43')}</NextButton>
        </div>
        </WhiteBox>
        </>:<>{pageState==-1?<>
        <WhiteBox>
          <QuestionTitle>Register</QuestionTitle>
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
            setPassword2(password);
          }}
        />
        <InputField
          type={InputType.PASSWORD}
          title="password confirmation"
          onChange={(password: string) => {  
            setPasswordConfirm(password)
            setPasswordConfirm2(password)
          }}
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
      <ButtonContainer style={{marginTop:"20px"}}>
        <RegisterButton onClick={nextOnClick2}>Sign Up</RegisterButton>
        <div style={{width:"410px", alignItems:"left", textAlign:"left"}}>
        <RegisterButton style={{width:"170px", backgroundColor:"#FEE500", marginTop:"20px", fontWeight:400}}>
          <RiKakaoTalkFill style={{ fontSize: "23px", marginRight: "5px" }} />
          카카오 로그인</RegisterButton>
        </div>
        {/* <Link to="/auth/login">
          <LoginButton>Login</LoginButton>
        </Link> */}
      </ButtonContainer>
    </Container>
    </WhiteBox>
        </>:<> 
        <div style={{fontSize:"65px", fontWeight:"bold"}}>{t('register_44')}</div>
        <img src={Congratulation}/>
        <div style={{width:"100%"}}>
          {/* <Link to="/asset/assetList"> */}
            <NextButton onClick={onTrySignUp}>{t('register_45')}</NextButton>
          {/* </Link> */}
        </div></>}
        </>}</>}
        </>}
      <StepContainer>
        {pageState == 0 ? <StepButton2 style={{backgroundColor:"#170505"}}/> : <StepButton2 onClick={()=>{setPageState(0)}}/>}
        {pageState == 1 ? <StepButton2 style={{backgroundColor:"#170505"}}/> : <StepButton2 onClick={()=>{setPageState(1)}}/>}
        {pageState == 2 ? <StepButton2 style={{backgroundColor:"#170505"}}/> : <StepButton2 onClick={()=>{setPageState(2)}}/>}
      </StepContainer>
    </NewContainer>
    </>
  );
};

const NewContainer = styled.div`
  // height: 932px;
  width: 972px;
  border-radius: 30px;
  background-color: #F2F2F2;
  margin-top: 36px;
  padding: 44px;
  // display: flex;
  text-align:center;
  padding-bottom: 25px;
`

const MainText = styled.div`
  font-size: 36px;
  color: #000000;
  font-weight: bold;
  width: 550px;
`

const WhiteBox = styled.div`
  margin-top: 40px;
  padding-top: 125px;
  padding-bottom: 46px;
  background-color: white;
  position: relative;
`

const NextButton = styled.button`
  border: 0;
  background-color: #FBBB00;
  color: white;
  width: 248px;
  height: 42px;
  border-radius: 25px;
  text-align: center;
  margin-top: 60px
`
const StepButton2 = styled.button`
  width: 17px;
  height: 17px;
  border-radius: 10px;
  background-color: #C4C4C4;
  margin: 8px; 
  border: 0;
`

const StepMark = styled.div`
  border: 0;
  background-color: #000000;
  color: white;
  width: 248px;
  height: 42px;
  border-radius: 25px;
  text-align: center;
  margin-top: 60px;
  position: absolute;
  top: 0;
  margin-top: -25px;
  padding-top: 8px;
  margin-left: 320px;
`
const StepContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  // justify-content: space-around;
`

const QuestionBox = styled.div`

`

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
  // width: 411px;
  width: 100%;
  margin: 0 auto;
`;
const QuestionTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  height: 76px;
`;
const QuestionTitle = styled.div`
  font-size: 24px;
  font-style: bold;
  font-weight: bold;
  // line-height: 24px;
  letter-spacing: 0px;
`;

const QuestionLittleTitle = styled.div`
  font-size: 18px;
  padding-top: 10px;
`
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
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  padding-left: 44px;
  display: flex;
  justify-content: center;
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
  width: 411px;
  padding-left: 20px;
  text-align: center;
  margin-bottom: 20px;
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
  font-size: 14px;
  padding-top: 5px;
  height: 32px;
`;
const OtherInput = styled.input.attrs({
  type: "text",
})`
  height: 32px;
  width: 200px;
`;

const sliderStyle = {  // Give the slider some width
  position: 'relative',
  width: '100%',
  height: 80,
  border: 0,
  marginTop: '40px',
  marginLeft:"0px"
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 20,
  marginTop: 30,
  borderRadius: 5,
  backgroundColor: '#E2E0FF',
}

export default RegisterPresenter2;
