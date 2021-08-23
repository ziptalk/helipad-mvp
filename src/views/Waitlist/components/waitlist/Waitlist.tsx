import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { userStore, firebase } from "../../../../shared/Firebase";
import { useHistory } from "react-router-dom";
import Group from "../../../../images/Group.png";
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../../../Locales/i18n';


const Waitlist = () => {
    const { user } = useContext(AuthContext);
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

  async function getUserInfo() {
    if (user) {
      let contacts = await userStore.doc(user.uid.toString()).get();
      console.log(contacts);
      if (!contacts) {
        console.log("No such document!");
      } else {
        let dataResult = contacts.data();
        console.log("Document data:", contacts.data());
      }
    }
  }
  
  useEffect(() => {
    if (user) {
      getUserInfo();
    }
  }, [user]);

  return (
    <Container>
      <img style={{paddingTop:"132px"}} src={Group}/>
      <MainText>{t('waitlist_1')}</MainText>
      <div style={{display:"flex", width:"100%", justifyContent:'center'}}>
        <MiddleLine/>
      </div>
      <ContextBox>
        <div style={{display:"flex", justifyContent:"center", marginBottom:"30px"}}>
          <div style={{width:"850px"}}>{t('waitlist_2')}</div>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <div style={{width:"870px"}}>{t('waitlist_3')}</div>
          </div>
      </ContextBox>
      <InputContainer>
        <InputBox placeholder="Email"/>
        <JoinButton>{t('waitlist_4')}</JoinButton>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  max-width: 1904px;
  text-align: center;
  // align-items: center;
`;

const MainText = styled.div`
  font-size: 48px;
  width: 100%;
  height: auto;
  text-align: center;
  color: #FFFFFF;
  font-weight: bold;
  margin-top: 63px;
  margin-bottom: 40px;
`

const MiddleLine = styled.div`
  width: 302px;
  height: 1px;
  background-color: white;
`

const ContextBox = styled.div`
  margin-top: 39px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: white;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 73px;
`

const InputBox = styled.input`
  height: 56px;
  width: 410px;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #EAEAEA;
`

const JoinButton = styled.button`
  width: 410px;
  height: 56px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #212121;
  border: 0;
  background-color: #B69142;
  margin-left: 15px
`

export default Waitlist;
