import styled from "styled-components";
import Account from "./account/Account";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../router/config/Provider/AuthProvider";

const Container2 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding-bottom: 200px;
`;
const FormContainer = styled.div`
  background-color: white;
  margin-top: 66px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 1904px; */
  width: 100%;
`;

const Divider = styled.div`
  border: 1px solid #000000;
  // margin-top: 40px;
  margin-bottom: 40px;
`;

const AccountPage = () => {
    const { user, setHeaderMode } = useContext(AuthContext);

    useEffect(() => {
        setHeaderMode("black");

        window.scroll({ top: 0 });
    }, []);

    return (
        <Container>
            <Container2>
                <Account />
            </Container2>
        </Container>
    );
}

export default AccountPage;