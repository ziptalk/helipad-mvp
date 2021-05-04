import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import ContactUseCase from '../../../../domain/ContactUseCase';
import { AuthContext } from '../../../../AuthProvider';
import ContactToAgent from '../../../../domain/ContactToAgent';
type ContactFieldProps = {
  agent: string;
  assetId: string;
};

const Contact: React.FC<ContactFieldProps> = ({ agent, assetId }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState<string>();

  const onTextChange = (e: any) => {
    setContent(e.target.value);
  };

  const onSend = () => {
    console.log('onSend : ' + content);
    if (content === null) {
      alert('You should enter content..');
      return;
    }
    if (user === null) {
      alert('Authentication error..');
      return;
    }

    if (user != null && content != null) {
      ContactUseCase.send(user.uid, agent, content)
        .then((result) => {
          alert('Send message successfully!');
          setContent('');
        })
        .catch((error) => {
          alert('Some errors was occurred...');
        });
    }
  };
  const contactToAgent = () => {
    if (user) {
      const userEmail = user.email as string;
      ContactToAgent.contactToAgent(userEmail, assetId)
        .then((resolve) => console.log('문의 완료'))
        .catch((error) => console.log(error));
    } else {
      throw new Error();
    }
  };

  return (
    <Container>
      <Content>
        <Title>Contact HELIPAD</Title>
      </Content>
      <TextArea rows={20} onChange={onTextChange} />
      <Send onClick={onSend}>Send Message</Send>
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
