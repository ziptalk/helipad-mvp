import React from 'react';
import styled from 'styled-components';

/**
 *
 * Investment Profile Component
 */

type InvestmentProfileProps = {};
const InvestmentProfile: React.FC<any> = ({ InvestmentProfileProps }) => {
  return (
    <Container>
      <Title>Investment Profile</Title>
      <SubTitle>Payment Calculator</SubTitle>
      <CalculatorContainer>
        <PaymentList>
          <PaymentList_Dollar>$10,000 per month</PaymentList_Dollar>
          <PaymentList_Won>(W 10,000,000)</PaymentList_Won>
          <PaymentList_PeriodInterest>
            30 year fixed, 2.95% interest
          </PaymentList_PeriodInterest>
        </PaymentList>
        <ChargeList>
          <ChargeList_Interest>
            <ChargeList_Title>Principal and interest</ChargeList_Title>
            <ChargeList_Content>$ 5,652</ChargeList_Content>
          </ChargeList_Interest>
          <ChargeList_Taxes>
            <ChargeList_Title>Property Taxes</ChargeList_Title>
            <ChargeList_Content>$ 63</ChargeList_Content>
          </ChargeList_Taxes>
          <ChargeList_Maintenance>
            <ChargeList_Title>Maintenance/Common Charges</ChargeList_Title>
            <ChargeList_Content>$ 904</ChargeList_Content>
          </ChargeList_Maintenance>
        </ChargeList>
      </CalculatorContainer>
      <SettingContainer>
        <Setting>
          <Setting_title>Term</Setting_title>
          <Setting_select value="Input Box"></Setting_select>
        </Setting>
        <Setting>
          <Setting_title>Interest</Setting_title>
          <Setting_select value="2.95%"></Setting_select>
        </Setting>
        <Setting>
          <Setting_title>Home Price</Setting_title>
          <Setting_input value="$1,499,000"></Setting_input>
        </Setting>
        <Setting>
          <Setting_title>Down Payment</Setting_title>
          <Setting_input value="$149,000"></Setting_input>
          <Setting_input value="10%"></Setting_input>
        </Setting>
        <Setting>
          <Setting_title>Expected monthly rent</Setting_title>
          <Setting_input value="$1,499,000"></Setting_input>
        </Setting>
        <Setting>
          <Setting_title>Yield</Setting_title>
          <Setting_input value="10%"></Setting_input>
        </Setting>
      </SettingContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  border: 1px solid black;
  font-size: 30px;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  border: 1px solid black;
  font-size: 25px;
  margin-bottom: 15px;
`;

const CalculatorContainer = styled.div`
  display: flex;
  border: 1px solid black;
  margin-bottom: 45px;

  height: 150px;
`;

const PaymentList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PaymentList_Dollar = styled.div`
  border: 1px solid black;
  font-size: 35px;
  margin-bottom: 5px;
`;
const PaymentList_Won = styled.div`
  border: 1px solid black;
  font-size: 20px;
  margin-bottom: 5px;
`;
const PaymentList_PeriodInterest = styled.div`
  border-bottom: 8px solid gray;
  padding-bottom: 10px;
  font-size: 23px;
  text-align: center;
  width: 400px;
`;

const ChargeList_Title = styled.div`
  font-size: 25px;
`;

const ChargeList_Content = styled.div`
  font-size: 20px;
`;

const ChargeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ChargeList_Interest = styled.div`
  border-bottom: 2px solid #e9e9e9;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${ChargeList_Title} {
    color: #4542e2;
  }
`;
const ChargeList_Taxes = styled.div`
  border-bottom: 2px solid #e9e9e9;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${ChargeList_Title} {
    color: #80b2ff;
  }
`;
const ChargeList_Maintenance = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${ChargeList_Title} {
    color: #a7b0be;
  }
`;

const SettingContainer = styled.div`
  border: 1px solid black;
  display: grid;
  height: 400px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 33%;
`;

const Setting = styled.div``;
const Setting_title = styled.div``;
const Setting_content = styled.div``;
const Setting_select = styled.select`
  width: 100%;
`;
const Setting_input = styled.input``;

export default InvestmentProfile;
