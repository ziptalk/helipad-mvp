import { useState, useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Styled from "styled-components";
import { CheckInviteCode } from "../../../domain/CheckInviteCode";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import styled from "styled-components";
import InviteCodeFormPresenter from "./InviteCodeFormPresenter";
import InviteCodeFormEtcPresenter from "./InviteCodeFormEtcPresenter";
import VideoPlayerPresenter from "./videoPlayerPresenter";
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
  if (authenticated) {
    return <Redirect to="/asset/neighborhood"></Redirect>;
  }

  const handleOnChange = (event: any) => {
    const inviteCode = event.target.value;

    setInviteCode(inviteCode);
  };

  const checkInviteCodeWithEnterKey = async (event: any) => {
    console.log("keyCode :", event.key);
    if (event.key === "Enter") {
      await checkInviteCode();
    }
  };
  const checkInviteCode = async () => {
    console.log(inviteCode);
    let firebaseResult = await CheckInviteCode.checkInviteCode(inviteCode);

    if (firebaseResult) {
      setInviteCodeValidation(false);
      history.push("/auth/registerForm");
    } else {
      setInviteCodeValidation(true);
    }
  };
  return (
    <Container>
      <VideoPlayerPresenter />
      <InviteCodeFormPresenter
        inviteCodeValidation={inviteCodeValidation}
        handleOnChange={handleOnChange}
        checkInviteCode={checkInviteCode}
        checkInviteCodeWithEnterKey={checkInviteCodeWithEnterKey}
      />
      <InviteCodeFormEtcPresenter />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default InviteCodeFormContainer;
