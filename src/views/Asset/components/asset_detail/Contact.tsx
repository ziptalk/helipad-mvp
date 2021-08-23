import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactToAgent from "../../../../domain/ContactToAgent";
import UpdateProcess from "../../../../domain/UpdateProcess";
import { BsChevronDown, BsArrowRight, BsChevronUp } from "react-icons/bs";
import useCollapse from "react-collapsed";
import { ImPhone } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { processStore } from "../../../../shared/Firebase";
import { userStore } from "../../../../shared/Firebase";
import { Infobip } from "infobip";
import Asset from "../../../../model/Asset";
import MypageList from "../../../../domain/MypageList";
import GetUserInfo from "../../../../domain/GetUserInfo";

// type BuildingInformationProps = {
//     buildingInformation: BuildingInformation;
// }

// import Expand from 'react-expand-animated';

type ContactFieldProps = {
  agent: string;
  assetId: string;
  buildingInformation: Asset;
};

const Contact: React.FC<ContactFieldProps> = ({
  agent,
  assetId,
  buildingInformation,
}) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState<string>();
  const history = useHistory();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [isAgent, setIsAgent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [kakaoId, setKakaoId] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  async function getUserInfo() {
    if (user) {
      let contacts = await userStore.doc(user.uid.toString()).get();
      console.log(contacts);
      if (!contacts) {
        console.log("No such document!");
      } else {
        let dataResult = contacts.data();
        if (dataResult) {
          if (dataResult.isAgent != undefined) {
            console.log(dataResult.isAgent);
            setIsAgent(dataResult.isAgent);
            setUserName(`${dataResult.firstName} ${dataResult.lastName}`);
            setEmail(dataResult.email);
          }
        }
        // setIsAgent(dataResult.isAgent);
        // let agentStatus = new Map(Object.entries(dataResult));
        console.log("Document data:", contacts.data());
      }
    }
  }
  // console.log(user);
  useEffect(() => {
    if (user) {
      // ContactUseCase.getMyContactHistory(user.uid).then(
      //     (value) => {
      //         console.log(user.uid)
      //         console.log(value)
      //     }
      // );
      getUserInfo();
    }
  }, []);

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

  const escrowProcessOnClick = () => {};

  const sendOnClick = async (type: string) => {
    var sendInfo = "";
    // var client = new Infobip('propwave', '*******')
    // var message = {from: "InfoSMS", to : "01077683659", text : "Is test SMS"};

    // client.SMS.send(message).then(res => console.log(res)).catch( err=> console.log(err));
    if (type == "PhoneNumber") {
      sendInfo = phoneNumber;
    } else if (type == "Email") {
      sendInfo = email;
    } else if (type == "KakaoID") {
      sendInfo = kakaoId;
    }

    if (user) {
      ContactUseCase.send(
        user.uid,
        buildingInformation.agent,
        sendInfo,
        buildingInformation.id,
        type
      ).then((value) => {
        console.log("success");
        console.log(phoneNumber);
        console.log(value);
      });
      // MypageList.addPotentialList()
      let list = {
        no: 0,
        name: userName,
        listing: buildingInformation.buildingInformation.thumbnail,
        requestedHelipad: new Date().toLocaleDateString(),
        initialContactDate: "",
        acceptedDate: "",
        inEscrow: false,
      };
      // MypageList.initUserMypageList(user.uid).then((result) =>
      //   console.log("init user mypage list")
      // );
      let userExistence = await MypageList.checkUserExistence(user.uid);
      console.log("userExistence", userExistence);
      if (userExistence) {
        MypageList.addPotentialList(list, user.uid, buildingInformation.id);
        MypageList.addFavoriteList(list, user.uid, assetId).then((result) =>
          console.log("add success")
        );
      } else {
        MypageList.initUserMypageList(user.uid).then((result) =>
          console.log("init user mypage list")
        );
        MypageList.addPotentialList(list, user.uid, buildingInformation.id);
        MypageList.addFavoriteList(list, user.uid, assetId).then((result) =>
          console.log("add success")
        );
      }

      alert("Successfully sent. We'll get back to you right away.");
    }
  };

  async function copyFirebaseOnClick() {
    let result = await (await processStore.doc("test_id_2").get()).data();
    let thisRef = await (await processStore.doc(assetId).get()).data();
    console.log(result);
    console.log(thisRef);
    if (result) {
      let idName = "test_id_1";
      await processStore.doc(idName).set(result);
      await processStore.doc(idName).update({
        assetId: idName,
      });
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
      {!isAgent ? (
        <Link to={`/process/adminprocess/${assetId}`}>
          <Send onClick={escrowProcessOnClick}>
            <div>Submit Offer</div>
            {/* <BsArrowRight
              style={{ marginLeft: "10px", width: "33px", height: "33px" }}
            /> */}
          </Send>
        </Link>
      ) : (
        <Link to={`/process/userprocess/${assetId}`}>
          <Send
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // paddingLeft: "100px",
            }}
            onClick={escrowProcessOnClick}
          >
            <div>Submit Offer</div>
            {/* <BsArrowRight
              style={{ marginLeft: "10px", width: "33px", height: "33px" }}
            /> */}
          </Send>
        </Link>
      )}

      <div style={{ width: "100%", border: "1px solid black" }}>
        <Send
          {...getToggleProps()}
          style={{
            textAlign: "left",
            backgroundColor: "white",
            paddingLeft: "20px",
            paddingRight: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0px",
          }}
        >
          <div>Contact Helipad for Next Steps</div>
          {isExpanded ? (
            <BsChevronUp style={{ width: "24px", height: "24px" }} />
          ) : (
            <BsChevronDown style={{ width: "24px", height: "24px" }} />
          )}
        </Send>
        <section {...getCollapseProps()}>
          <ContactBox>
            <div style={{ marginBottom: "25px" }}>
              How would you like a Helipad agent to reach out?
            </div>
            <ContactWayBox>
              <ContactTitle>
                <ImPhone
                  style={{ width: "20px", height: "20px", marginRight: "7px" }}
                />
                <div>Phone</div>
              </ContactTitle>
              <ContactForm
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder="You do not need to enter (-)"
              />
              <SendButton onClick={() => sendOnClick("PhoneNumber")}>
                SEND
              </SendButton>
            </ContactWayBox>
            <ContactWayBox>
              <ContactTitle>
                <GrMail
                  style={{ width: "20px", height: "20px", marginRight: "7px" }}
                />
                <div>Email</div>
              </ContactTitle>
              <ContactForm
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Please enter your email"
              />
              <SendButton onClick={() => sendOnClick("Email")}>SEND</SendButton>
            </ContactWayBox>
            <ContactWayBox>
              <ContactTitle>
                <RiKakaoTalkFill
                  style={{ width: "20px", height: "20px", marginRight: "7px" }}
                />
                <div>Kakao Talk ID</div>
              </ContactTitle>
              <ContactForm
                value={kakaoId}
                onChange={(e) => {
                  setKakaoId(e.target.value);
                }}
                placeholder="Enter your Kakao Talk ID"
              />
              <SendButton onClick={() => sendOnClick("KakaoID")}>
                SEND
              </SendButton>
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
  width: 100%;
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
  font-size: 16px;
  line-height: 26.55px;
  border-bottom: 1px solid #e9e9e9;
`;

const ContactContainer = styled.div`
  height: 400px;
`;

const Send = styled.button`
  text-align: center;
  // background: #4542e2;
  background: #b69142;
  // color: #ffffff;
  color: black;
  font-weight: 600;
  font-size: 16px;
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
`;

const ContactWayBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  margin: 5px 0 5px 0;
`;

const ContactTitle = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  color: #666666;
`;

const ContactForm = styled.input`
  width: 50%;
  border: 1px solid #a3a3a3;
  font-size: 15px;
  padding-left: 10px;
`;

const SendButton = styled.button`
  width: 15%;
  border: 2px solid black;
  background-color: white;
  font-size: 14px;
  font-weight: 900;
`;

export default Contact;
