import styled from "styled-components";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import ContactToAgent from "../../../../domain/ContactToAgent";
import UpdateProcess from "../../../../domain/UpdateProcess";
type ContactFieldProps = {
  agent: string;
  assetId: string;
};

const Contact: React.FC<ContactFieldProps> = ({ agent, assetId }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState<string>();
  const history = useHistory();
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

  return (
    <Container>
      <Content>
        <Title>Contact HELIPAD</Title>
      </Content>
      <TextArea rows={20} onChange={onTextChange} />
      <Send onClick={contactToAgent}>Contact helipad for more information</Send>
    </Container>
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
  background: #4542e2;
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  cursor: pointer;
`;

export default Contact;
