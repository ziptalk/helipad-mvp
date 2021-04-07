import styled from 'styled-components';
import React from 'react';

type ContactFieldProps = {};

const Contact: React.FC<ContactFieldProps> = () => {
  return (
    <Container>
      <Content>
        <Title>Contact HELIPAD</Title>
        {/* <Item>Name</Item>
                <Item>Email</Item>
                <Item>Phone</Item> */}
      </Content>
      <ContactContainer />
      <Send>Send Message</Send>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 467px;
  height: 718px;
  border: 1px solid black;
  position: relative;
`;

const Content = styled.div`
  margin: 0 20px;
  margin-top: 20px;
`;

const Title = styled.div`
  padding-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26.55px;
  border-bottom: 1px solid #e9e9e9;
`;

const Item = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const ContactContainer = styled.div`
  height: 324px;
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
