import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { userStore, firebase } from "../../../../shared/Firebase";
import { useHistory } from "react-router-dom";
import Group from "../../../../images/Group.png";


const Waitlist = () => {
    const { user } = useContext(AuthContext);

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
      <MainText>Join the Waitlist</MainText>
      <div style={{display:"flex", width:"100%", justifyContent:'center'}}>
        <MiddleLine/>
      </div>
      <ContextBox>
        <div>Helipad is a full service international real estate brokerage that helps</div>
        <div style={{marginBottom:"30px"}}>buyers from Asia buy US properties.</div>
        <div>We have only offered this service to referral-only high net worth private</div>
        <div>banking clients inthe past, and now are opening up our client base.</div>
      </ContextBox>
      <InputContainer>
        <InputBox placeholder="Email"/>
        <JoinButton>Join the Waitlist</JoinButton>
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
