import styled from "styled-components";
import Waitlist from "./waitlist/Waitlist";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";

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


const WaitlistPage = () => {
  const { user, setHeaderMode } = useContext(AuthContext);

  useEffect(() => {
    setHeaderMode("black");

    window.scroll({ top: 0 });
  }, []);

  return (
    <Container>
      <Container2>
        <Waitlist />
      </Container2>
    </Container>
  );
};

export default WaitlistPage;
