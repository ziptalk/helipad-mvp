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
        <Block>
          <PaymentItem>
            <PaymentCategory>Home Price</PaymentCategory>
            <PaymentContent placeholder={`$ ${data.price}`}></PaymentContent>
          </PaymentItem>
          <PaymentItem>
            <PaymentCategory>Expected monthly rent</PaymentCategory>
            <PaymentContent
              placeholder={`$ ${data.expectedMonthlyRent}`}
            ></PaymentContent>
          </PaymentItem>
          <PaymentItem>
            <PaymentCategory>Yield</PaymentCategory>
            <PaymentContent placeholder={"10%"}></PaymentContent>
          </PaymentItem>
        </Block>
        <Block>
          <TaxItem>
            <TaxCategory id="first">Property Taxes</TaxCategory>
            <TaxContent>{data.texPerMonth}</TaxContent>
          </TaxItem>
          <TaxItem>
            <TaxCategory id="second">Maintenance / Common Charges</TaxCategory>
            <TaxContent id="third">{data.commonChargePerMonth}</TaxContent>
          </TaxItem>
        </Block>
      </PaymentContainer>
    </Container>
  );
};

const Block = styled.div`
  width: 100%;
`;
const PaymentItem = styled.div`
  margin-bottom: 25px;
`;
const PaymentCategory = styled.div``;
const PaymentContent = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  &:focus {
    outline: 1px solid gray;
  }
  font-size: 18px;
  width: 95%;
  height: 42px;
  margin: 8px 0;
  padding: 3px 5px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;

  #price {
    placeholder: "123";
  }
`;
const TaxItem = styled.div`
  /* 공통 스타일 */
  border-bottom: 1px solid #e9e9e9;
  display: flex;

  #first {
    color: #80b2ff;
  }
  #second {
    color: gray;
    padding: 9px 0px;
  }
  #third {
    padding: 9px 0px;
  }
`;
const TaxCategory = styled.div`
  width: 70%;

  padding-bottom: 10px;
`;
const TaxContent = styled.div`
  width: 30%;
`;

//////////////////////!
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PaymentContainer = styled.div`
  display: flex;

  margin-bottom: 45px;

  height: 300px;
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
