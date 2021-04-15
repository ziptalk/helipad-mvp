import styled from 'styled-components';
import React from 'react';

type ContactFieldProps = {};

const Contact: React.FC<ContactFieldProps> = () => {
  return (
    <Container>
      <Content>
        <Title>Contact HELIPAD</Title>
      </Content>
      <TextArea rows={20} />
      <Send>Send Message</Send>
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
  position: absolute;
  bottom: 0px;
`;

export default Contact;
