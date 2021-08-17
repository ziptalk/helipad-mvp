import styled from "styled-components";
import VIPClient from "./vipClient/VIPClient";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import { useHistory, Redirect } from "react-router-dom";
import { CheckInviteCode } from "../../../domain/CheckInviteCode";

const BackgroundJpg = "https://s3-alpha-sig.figma.com/img/6a8d/85a0/c7c15e937d9cdac010e96a4e4cc9c0b7?Expires=1630281600&Signature=OwRjkWQWwld1EopWVQtraTbCD0Oi-U4W16uhJyM6olL-gR9Pp18EW0SJhYhdjnrgZquN9DNcrrwyRsCtyPWT0PtKaFwdAg-BWH~ATf5hQcncPlxajavg6MSKvS2TIJlcy0vtqZD3K7xHd9tL5jv643y9sSwuFrlPbbyl5u4J68l2BGxrbQ8OdVufsHVAX9yQQ3zvV5x1ZRTyvFhT8JfTFSKrqhBrctlXxkDxudKQwmYXHNzZIz4NnoqMRuQuzbefPXqKd8~WO4TEpb00Oo087tdXYMDN6iWbK~vSO5z1mDx5Exv97dHBp1ZUuLkG~d-gksILVfkur6sGcSYWf8LBNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  backdrop-filter:brightness(20%);
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  /* width: 1904px; */
  width: 100%;
  height: 1112px;
  /* max-width: 1904px; */
  background-image: url(${BackgroundJpg});
  background-size: cover;
  // filter: brightness(0.2)
  // background-color: #000000;
`;


const VIPClientPage = ({ isLandingPage, setIsLandingPage }: any) => {
  // const { user, setHeaderMode } = useContext(AuthContext);

  const [inviteCode, setInviteCode] = useState("");
  const history = useHistory();
  const {
    authenticated,
    loadingAuthState,
    inviteCodeValidation,
    setInviteCodeValidation,
    // setHeaderMode,
  } = useContext(AuthContext);

  useEffect(() => {
    // setHeaderMode("inviteCodeForm");
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
      <Container2>
        <VIPClient 
        inviteCodeValidation={inviteCodeValidation}
        handleOnChange={handleOnChange}
        checkInviteCode={checkInviteCode}
        checkInviteCodeWithEnterKey={checkInviteCodeWithEnterKey}
      />
      </Container2>
    </Container>
  );
};

export default VIPClientPage;
