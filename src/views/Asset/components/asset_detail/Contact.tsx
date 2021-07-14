import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactToAgent from "../../../../domain/ContactToAgent";
import UpdateProcess from "../../../../domain/UpdateProcess";
import { BsChevronDown, BsArrowRight, BsChevronUp } from "react-icons/bs";
import useCollapse from 'react-collapsed';
import { ImPhone } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { processStore } from '../../../../shared/Firebase';
import { userStore } from '../../../../shared/Firebase';

// import Expand from 'react-expand-animated';

type ContactFieldProps = {
  agent: string;
  assetId: string;
};

const Contact: React.FC<ContactFieldProps> = ({ agent, assetId }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState<string>();
  const history = useHistory();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [isAgent, setIsAgent] = useState(false);

  async function getUserInfo(){
    if(user){
      let contacts = await userStore.doc(user.uid.toString()).get();
      console.log(contacts)
      if (!contacts) {
        console.log('No such document!');
      } else {
        let dataResult = contacts.data();
        if(dataResult){
          if(dataResult.isAgent != undefined){
            console.log(dataResult.isAgent);
            setIsAgent(dataResult.isAgent)
          }
        }
        // setIsAgent(dataResult.isAgent);
        // let agentStatus = new Map(Object.entries(dataResult));
        console.log('Document data:', contacts.data());
      }
    }
  }
  // console.log(user);
  useEffect(() => {
    if(user){
      // ContactUseCase.getMyContactHistory(user.uid).then(
      //     (value) => {
      //         console.log(user.uid)
      //         console.log(value)
      //     }
      // );
      getUserInfo()
      
      
    }
  }, [])

  const onTextChange = (e: any) => {
    setContent(e.target.value);
  };

  const updateProcess = async (
    userId: string,
    assetId: string,
    step: string
  ) => {
    await UpdateProcess.updateProcess(userId, assetId, step);
  };

  const contactToAgent = async () => {
    if (!user) throw new Error();
    const userEmail = user.email as string;
    await ContactToAgent.contactToAgent(userEmail, assetId);
    const updateResult = await updateProcess(userEmail, assetId, "0");
    console.log("updateResult :", updateResult);
    history.push({ pathname: "/asset/process", state: { assetId, userEmail } });
  };

  const escrowProcessOnClick = () => {
    
  }

  async function copyFirebaseOnClick(){
    let result = await (await processStore.doc('test_id_2').get()).data();
    let thisRef = await (await processStore.doc(assetId).get()).data();
    console.log(result);
    console.log(thisRef)
    if(result){
      let idName = 'test_id_1'
      await processStore.doc(idName).set(result)
      await processStore.doc(idName).update({
        'assetId': idName
      })
      // for(var i=3; i<=26; i++){
      //   let idName = 'test_id_' + i.toString()
      //   // result.assetId = idName
      // await processStore.doc(idName).set(result)
      //   await processStore.doc(idName).update({
      //     'assetId': idName
      //   })
      // }
    }
  }

  return (
    <>
    {/* <button onClick={copyFirebaseOnClick}>파베 복사</button> */}
    {isAgent ? 
      <Link to={`/process/adminprocess/${assetId}`} >
        <Send style={{display:"flex", alignItems:"center", paddingLeft:"100px"}} onClick={escrowProcessOnClick}>
          <div>
            Proceed to Escrow Process 
          </div>
          <BsArrowRight style={{marginLeft:"10px", width:"33px", height:"33px"}}/>
        </Send>
      </Link>
    : 
      <Link to={`/process/userprocess/${assetId}`} >
        <Send style={{display:"flex", alignItems:"center", paddingLeft:"100px"}} onClick={escrowProcessOnClick}>
          <div>
            Proceed to Escrow Process 
          </div>
          <BsArrowRight style={{marginLeft:"10px", width:"33px", height:"33px"}}/>
        </Send>
      </Link>
    }
      
      <div style={{width:"100%", border:"1px solid black"}}>
        <Send {...getToggleProps()} style={{textAlign:"left", backgroundColor:'white', paddingLeft:"20px", paddingRight:"20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:"0px"}}>
          <div>
            Contact Helipad for Next Steps
          </div>
          {isExpanded ? 
            <BsChevronUp style={{width:"24px", height:"24px"}}/>
          :
            <BsChevronDown style={{width:"24px", height:"24px"}}/>
          }
        </Send>
        <section {...getCollapseProps()}>
          <ContactBox>
            <div style={{marginBottom:"25px"}}>How would you like a Helipad agent to reach out?</div>
            <ContactWayBox>
              <ContactTitle>
                <ImPhone style={{width:"20px", height:"20px", marginRight:"7px"}}/>
                <div>Phone</div>
              </ContactTitle>
              <ContactForm placeholder="You do not need to enter (-)"/>
              <SendButton>SEND</SendButton>
            </ContactWayBox>
            <ContactWayBox>
              <ContactTitle>
                <GrMail style={{width:"20px", height:"20px", marginRight:"7px"}}/>
                <div>Email</div>
              </ContactTitle>
              <ContactForm placeholder="Please enter your email"/>
              <SendButton>SEND</SendButton>
            </ContactWayBox>
            <ContactWayBox>
              <ContactTitle>
                <RiKakaoTalkFill style={{width:"20px", height:"20px", marginRight:"7px"}}/>
                <div>Kakao Talk ID</div>
              </ContactTitle>
              <ContactForm placeholder="Enter your Kakao Talk ID"/>
              <SendButton>SEND</SendButton>
            </ContactWayBox>
          </ContactBox>
        </section>
      </div>
      

    </>
    // <Container>
    //   <Content>
    //     <Title>Contact HELIPAD</Title>
    //   </Content>
    //   <TextArea rows={20} onChange={onTextChange} />
    //   <Send onClick={contactToAgent}>Contact helipad for more information</Send>
    // </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 467px;
  height: 550px;
  border: 1px solid black;
  position: relative;
`;

const Content = styled.div`
  margin: 20px 20px 0;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 400px;
  margin: 20px;
`;

const Title = styled.div`
  padding-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26.55px;
  border-bottom: 1px solid #e9e9e9;
  
`;

const ContactContainer = styled.div`
  height: 400px;
`;

const Send = styled.button`
  text-align: center;
  // background: #4542e2;
  background: #B69142;
  // color: #ffffff;
  color: black;
  font-weight: 600;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  border: 0;
`;

const ContactBox = styled.div`
  padding: 20px;
  padding-top: 0px;
`

const ContactWayBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  margin: 5px 0 5px 0;
`

const ContactTitle = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  color: #666666;
`

const ContactForm = styled.input`
  width: 50%;
  border: 1px solid #A3A3A3;
  font-size: 15px;
  padding-left: 10px;
`

const SendButton = styled.button`
  width: 15%;
  border: 2px solid black;
  background-color: white;
  font-size: 14px;
  font-weight: 900;
`

export default Contact;
