import { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Styled from "styled-components";
import { CheckInviteCode } from "../../../domain/CheckInviteCode";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import styled from "styled-components";
import InviteCodeFormPresenter from "./InviteCodeFormPresenter";
import InviteCodeFormEtcPresenter from "./InviteCodeFormEtcPresenter";

const InviteCodeFormContainer = () => {
  const [inviteCode, setInviteCode] = useState("");
  const history = useHistory();
  const {
    authenticated,
    loadingAuthState,
    inviteCodeValidation,
    setInviteCodeValidation,
  } = useContext(AuthContext);

  if (loadingAuthState) {
    return <></>;
  }
  if (authenticated) {
    return <Redirect to="/home"></Redirect>;
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
    <>
      <InviteCodeFormPresenter
        inviteCodeValidation={inviteCodeValidation}
        handleOnChange={handleOnChange}
        checkInviteCode={checkInviteCode}
        checkInviteCodeWithEnterKey={checkInviteCodeWithEnterKey}
      />
      <InviteCodeFormEtcPresenter />
    </>
  );
};

export default InviteCodeFormContainer;
