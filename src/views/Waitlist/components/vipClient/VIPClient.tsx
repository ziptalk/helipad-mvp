import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import { userStore, firebase } from "../../../../shared/Firebase";
import { useHistory } from "react-router-dom";
import Group from "../../../../images/Group.png";

enum Content {
  FIRSTTITLE = "Real Estate Investing,",
  SECONDTITLE = "Reimagined.",
  SUBTITLE = "You can only access it with a membership. Please enter an invitation code.",
  ENTER = "ENTER",
  ERRORMESSAGE = "Invalid invite code",
  PLACEHOLDER = "Invite code",
}

const VIPClient = ({
  inviteCodeValidation,
  handleOnChange,
  checkInviteCode,
  checkInviteCodeWithEnterKey,
}: any) => {
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
      <MainText>Welcome VIP Client</MainText>
      <div style={{display:"flex", width:"100%", justifyContent:'center'}}>
        <MiddleLine/>
      </div>
      <ContextBox>
        <div>Helipad is a full service international real estate brokerage that helps</div>
        <div style={{marginBottom:"30px"}}>buyers from Asia buy US properties.</div>
        <div>We have only offered this service to referral-only high net worth private</div>
        <div>banking clients inthe past, and now are opening up our client base.</div>
      </ContextBox>
      {inviteCodeValidation === "invalid" && (
          <ErrorMessage>{Content.ERRORMESSAGE}</ErrorMessage>
        )}
      <InputContainer onChange={handleOnChange}>
        <InputBox onKeyDown={checkInviteCodeWithEnterKey} placeholder="Enter VIP Code"/>
        <JoinButton onClick={checkInviteCode}>Login</JoinButton>
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


export default VIPClient;
