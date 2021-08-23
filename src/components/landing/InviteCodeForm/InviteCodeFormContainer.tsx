import { useState, useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Styled from "styled-components";
import { CheckInviteCode } from "../../../domain/CheckInviteCode";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import styled from "styled-components";
import InviteCodeFormPresenter from "./InviteCodeFormPresenter";
import InviteCodeFormEtcPresenter from "./InviteCodeFormEtcPresenter";

import HelipadIs from "./HelipadIs";
import OurMission from "./OurMission";
import OurArea from "./OurArea";
import PartnerAndRelation from "./PartnerAndRelation";
import ContactPresenter from "../../ContactPresenter";
const InviteCodeFormContainer = ({ isLandingPage, setIsLandingPage }: any) => {
  const [inviteCode, setInviteCode] = useState("");
  const history = useHistory();
  const {
    authenticated,
    loadingAuthState,
    inviteCodeValidation,
    setInviteCodeValidation,
    setHeaderMode,
  } = useContext(AuthContext);

  useEffect(() => {
    setHeaderMode("inviteCodeForm");
    setIsLandingPage(true);

    return () => {
      setIsLandingPage(false);
    };
  });
  if (loadingAuthState) {
    return <></>;
  }
  // if (authenticated) {
  //   return <Redirect to="/auth/login"></Redirect>;
  // }

  const handleOnChange = (event: any) => {
    const inviteCode = event.target.value;

    setInviteCode(inviteCode);
  };

  const checkInviteCodeWithEnterKey = async (event: any) => {
    if (event.key === "Enter") {
      await checkInviteCode();
    }
  };
  const checkInviteCode = async () => {
    let firebaseResult = await CheckInviteCode.checkInviteCode(inviteCode);

    if (firebaseResult) {
      setInviteCodeValidation("valid");
      history.push("/auth/registerForm");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      setInviteCodeValidation("invalid");
    }
  };
  return (
    <Container>
      {/* <VideoPlayerPresenter /> */}
      {/* <InviteCodeFormPresenter
        inviteCodeValidation={inviteCodeValidation}
        handleOnChange={handleOnChange}
        checkInviteCode={checkInviteCode}
        checkInviteCodeWithEnterKey={checkInviteCodeWithEnterKey}
      /> */}

      {/* <InviteCodeFormEtcPresenter /> */}
      <HelipadIs></HelipadIs>
      <OurMission></OurMission>
      <OurArea></OurArea>
      <PartnerAndRelation></PartnerAndRelation>
      <ContactPresenter></ContactPresenter>
    </Container>
  );
};
const Container = styled.div`
  /* max-width: 1904px; */
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default InviteCodeFormContainer;
