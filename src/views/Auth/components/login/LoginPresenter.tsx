import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import checkButtonImg from "../../../../images/Potential/checkButtonImg.svg";
import { FcGoogle } from "react-icons/fc";
import kakao_login from "../../../../images/kakao_login.png";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../../Locales/i18n';

type Props = {
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickKakaoLogin: () => void;
  onClickLogin: () => void;
  onEnterLogin: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  loginResult: boolean;
  emailInput: React.RefObject<HTMLInputElement>;
};
const LoginPresenter = ({
  onChangeInputValue,
  onClickKakaoLogin,
  onClickLogin,
  onEnterLogin,
  loginResult,
  emailInput,
}: Props) => {
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

  return (
    <Container>
      <SocialContainer>
        <SocialText>{t('login_4')}</SocialText>
        <SocialIcon>
          <FcGoogle
            className="googleIcon"
            style={{ width: "17px", height: "18px" }}
          />
        </SocialIcon>
      </SocialContainer>
      {loginResult ? (
        <InputContainer>
          <Input
            loginResult={loginResult}
            name="email"
            onChange={onChangeInputValue}
            onKeyDown={onEnterLogin}
            ref={emailInput}
          ></Input>
          <Input
            loginResult={loginResult}
            name="password"
            password
            onChange={onChangeInputValue}
            onKeyDown={onEnterLogin}
          ></Input>
        </InputContainer>
      ) : (
        <InputContainer>
          <InvalidInput
            loginResult={loginResult}
            name="email"
            onChange={onChangeInputValue}
            onKeyDown={onEnterLogin}
            ref={emailInput}
          ></InvalidInput>
          <InvalidInput
            loginResult={loginResult}
            name="password"
            password
            onChange={onChangeInputValue}
            onKeyDown={onEnterLogin}
          ></InvalidInput>
        </InputContainer>
      )}
      <RememberContainer>
        <Remember id="remember"></Remember>
        <RememberLabel htmlFor="remember"></RememberLabel>
        <RememberText htmlFor="remember">{t('login_7')}</RememberText>
      </RememberContainer>
      <ButtonContainer>
        <LoginButton onClick={onClickLogin}>{t('login_8')}</LoginButton>
        <KakaoLoginButton
          imgPath={kakao_login}
          onClick={onClickKakaoLogin}
        ></KakaoLoginButton>
        <RegisterButton>
          <Link to="/auth/registerForm">{t('login_9')}</Link>
        </RegisterButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 80vw;
  height: 100%;
`;
const SocialContainer = styled.div`
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  width: 474px;
  height: 60px;
`;
const SocialText = styled.div``;
const SocialIcon = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  padding: 10px;
  border-radius: 50%;
  margin-right: 35px;
  cursor: pointer;
  .googleIcon {
  }
`;
const InputContainer = styled.div`
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Input: any = styled.input.attrs((props: any) => ({
  type: props.password ? "password" : "text",
}))`
  border: 1px solid #eaeaea;
  width: 410px;
  height: 56px;
  padding: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  &:focus {
    outline: 1px solid #9a9a9a;
  }
  /* background: ${(props: any) => props.loginResult === false && "red"}; */
  /* 유효성 검사가 완료되면  */
  /* outline: 1px solid #b69142 로 변경 */
`;
const InvalidInput = styled(Input)`
  background: rgba(241, 85, 36, 0.1);
  border: 1px solid #f15524;
  color: #a3a3a3;
`;
const RememberContainer = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 18px;
`;
const RememberLabel: any = styled.label`
  width: 24px;
  height: 24px;
  display: inline-block;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-right: 14px;
`;
const Remember = styled.input.attrs({
  type: "checkbox",
})`
  width: 24px;
  height: 24px;
  display: none;
  &:checked + ${RememberLabel} {
    background: url(${checkButtonImg});
  }
`;
const RememberButton = styled.input.attrs({
  type: "checkbox",
})``;
const RememberText = styled.label``;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 35px;
`;
const KakaoLoginButton: any = styled.button`
  background: url(${(props: any) => props.imgPath});
  background-repeat: no-repeat;
  background-size: contain;
  width: 410px;
  height: 56px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
  /* color: #212121; */
  border: none;
  cursor: pointer;
`;
const LoginButton: any = styled.button`
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
const RegisterButton = styled.div`
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
export default LoginPresenter;
