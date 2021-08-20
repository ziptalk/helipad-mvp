import styled from "styled-components";
import Contact from "./contact/Contact";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";
import HeaderPresenter from "./contact/HeaderPresenter";

const Container2 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding-bottom: 200px;
  max-width: 1904px;
`;
const FormContainer = styled.div`
  background-color: white;
  margin-top: 66px;
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* width: 1904px; */
//   width: 100%;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  width: 100vw;
`;

const Divider = styled.div`
  border: 1px solid #000000;
  // margin-top: 40px;
  margin-bottom: 40px;
`;

const ContactPage = () => {
  const { user, setHeaderMode } = useContext(AuthContext);

  useEffect(() => {
    setHeaderMode("contactForm");

    window.scroll({ top: 0 });
  }, []);

  return (
    <Container>
      <HeaderPresenter />
      <Container2>
        <Contact />
      </Container2>
    </Container>
  );
};

export default ContactPage;
