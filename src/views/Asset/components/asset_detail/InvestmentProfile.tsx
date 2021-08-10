import React from "react";
import styled from "styled-components";

/**
 *
 * Investment Profile Component
 */

type InvestmentProfileProps = {};
const InvestmentProfile: React.FC<any> = ({ data }) => {
  return (
    <Container>
      <Title>Investment Profile</Title>
      <SubTitle>Payment Calculator</SubTitle>
      <PaymentContainer>
        <PaymentItem>
          <PaymentTitle>Home Price</PaymentTitle>
          <PaymentContent placeholder={`$ ${data.price}`}></PaymentContent>
        </PaymentItem>
        <PaymentItem>
          <PaymentTitle>Property Taxes</PaymentTitle>
          <PaymentContent placeholder={data.taxPerMonth}></PaymentContent>
        </PaymentItem>
        <PaymentItem>
          <PaymentTitle>HOA Fee</PaymentTitle>
          <PaymentContent placeholder={`$ ${data.hoaFee}`}></PaymentContent>
        </PaymentItem>
        <PaymentItem>
          <PaymentTitle>Yield</PaymentTitle>
          <PaymentContent placeholder={"10%"}></PaymentContent>
        </PaymentItem>
      </PaymentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #b69142;
`;
const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5em;
`;

const PaymentItem = styled.div`
  width: 100%;
`;
const PaymentTitle = styled.div`
  font-size: 14px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 12px;
  }
`;
const PaymentContent = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  &:focus {
    outline: 1px solid gray;
  }
  width: 100%;
  font-size: 18px;
  height: 42px;
  margin: 8px 0;
  padding: 3px 5px;
  border: 1px solid #e9e9e9;

  #price {
    placeholder: "123";
  }
`;
export default InvestmentProfile;
