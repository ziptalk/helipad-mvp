import styled from 'styled-components';
import React from "react";

type ContactFieldProps = {

}

const Contact: React.FC<ContactFieldProps> = () => {
    return (
        <Container>
            <Content>
                <Title>Contact HELIPAD</Title>
                <Item>Name</Item>
                <Item>Email</Item>
                <Item>Phone</Item>
            </Content>
            <ContactContainer />
            <Send>Send Message</Send>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
`;

const Content = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Item = styled.div`
  border-bottom: 1px solid #E9E9E9;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const ContactContainer = styled.div`
  height: 324px;
`;

const Send = styled.button`
  text-align: center;
  background: #4542E2;
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export default Contact;