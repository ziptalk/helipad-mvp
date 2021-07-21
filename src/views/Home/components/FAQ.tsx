import styled from "styled-components";
import React, { Component, useEffect, useState, useRef } from 'react'; 
import useCollapse from 'react-collapsed';

const FAQ = () => {
  const [category, setCategory] = useState(3);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [categoryName, setCategoryName] = useState([
    'Account Support',
    'Technical Support',
    'Accounting Support',
    'Buying Process',
    'Selling/Listing Process',
    'Property Management'
  ]);

  const categoryOnClick = (index: number) => {
    setCategory(index);
  }

  return (
    <div style={{display:"flex"}}>
      <CategoryBox>
        {categoryName.map((name, index) => (
          category == index ? <>
            <CategoryOnButton>{name}</CategoryOnButton>
            </>:<>
            <CategoryButton onClick={()=>categoryOnClick(index)}>{name}</CategoryButton>
            </>
        ))}
      </CategoryBox>

      <Container>
        <Title>FAQ</Title>

        {category == 3 ? <>
          <Question {...getToggleProps()}>Q What’s the overall purchasing process in the US?</Question>
        
          <section {...getCollapseProps()}>
            <SubQuestionBlock>
              <SubQuestion>
                Hire a licensed real estate agent at Helipad by signing Buyer
                Brokerage Agreement. (sub-link: Buyer Brokerage Agreement)
              </SubQuestion>

              <SubQuestion>
                Prepare Proof of Fund. (sub-link: Proof of Fund)
              </SubQuestion>

              <SubQuestion>
                Discuss your investment goals and needs and set up search criteria
                from MLS. (sub-link: MLS)
              </SubQuestion>

              <SubQuestion>
                Set up showings or virtual showings. (sub-link: Showing/Tour)
              </SubQuestion>

              <SubQuestion>Make an offer. (sub-link: Offer)</SubQuestion>

              <SubQuestion>
                Open an escrow and wire the Earnest Money Deposit. (sub-link: Escrow &
                Earnest Money Deposit)
              </SubQuestion>

              <SubQuestion>
                Order a home inspection and negotiate repair items/credits during due
                diligence period. (sub-link: Home Inspection & Due Diligence)
              </SubQuestion>

              <SubQuestion>
                Run comps and provide Comparative Market Analysis to your banker
                overseas. (sub-link: Comps/CMA)
              </SubQuestion>

              <SubQuestion>
                Review preliminary title report. (sub-link: Title Report)
              </SubQuestion>

              <SubQuestion>
                Review HOA documents if there is any. (sub-link: HOA)
              </SubQuestion>

              <SubQuestion>
                Perform final walkthrough. (sub-link: walkthrough)
              </SubQuestion>

              <SubQuestion>
                Review Estimated Settlement Statement. (sub-link: ESS & Closing Cost)
              </SubQuestion>

              <SubQuestion>Wire closing fund. (sub-link: Fund)</SubQuestion>

              <SubQuestion>
                Recording and getting the key. (sub-link: Recording)
              </SubQuestion>
            </SubQuestionBlock>
            <SubQuestionBlock2>
              <SubQuestion>What’s Buyer Brokerage Agreement?</SubQuestion>

              <SubQuestion>Why should I provide a proof of fund (POF)?</SubQuestion>

              <SubQuestion>What’s MLS?</SubQuestion>

              <SubQuestion>
                How are showings/tours getting done when I’m outside of the US?
              </SubQuestion>

              <SubQuestion>What are included in the offer?</SubQuestion>

              <SubQuestion>
                What’s escrow? Who holds Earnest Money Deposit and how much it is? Is
                this an additional cost? Is my money secure?
              </SubQuestion>

              <SubQuestion>
                What do I do during the due diligence period? Who does home inspection
                on what? What do I do with the inspection results?
              </SubQuestion>

              <SubQuestion>
                What does comps/CMA mean? How does my bank outside of the US require
                this?
              </SubQuestion>

              <SubQuestion>
                What’s preliminary title report? What’s title insurance?
              </SubQuestion>

              <SubQuestion>What’s HOA? Why is this important?</SubQuestion>

              <SubQuestion>Why do I do a walk through?</SubQuestion>

              <SubQuestion>What’s ESS and closing cost?</SubQuestion>

              <SubQuestion>
                How do I wire closing fund and how much should I wire? Where am I
                wiring to?
              </SubQuestion>

              <SubQuestion>
                How long does it take to record my property? Is my title record a
                public information?
              </SubQuestion>
            </SubQuestionBlock2>
        </section>

        <Question>Q Why am I only working with one agent?</Question>
        <Question>
          Q What if I want do cancel? What are the contingencies? (sub-link:
          contingencies)
        </Question>
        <Question>
          Q What are the maintenance cost/expenses? (Second home vs rental income
          producing properties)
        </Question>
        <Question>
          Q What are the taxes do I have to pay when purchasing a propertyin the
          US?
        </Question>
        </> : <></>}
        
        {category == 4 ? <>
          <Question {...getToggleProps()}>
            Q What’s the overall selling/listing process in the US?
          </Question>
          <section {...getCollapseProps()}>
            <SubQuestionBlock>
              <SubQuestion>
                Consult with Helipad professional on listing price. (sub-link: Comps)
              </SubQuestion>

              <SubQuestion>
                Physical visit of the property and repair recommendation to maximize
                the profit. (sub-link: prepare for listing)
              </SubQuestion>

              <SubQuestion>
                Sign a Helipad exclusive listing agreement. (sub-link: listing
                agreement)
              </SubQuestion>

              <SubQuestion>List the property. (sub-link: MLS)</SubQuestion>

              <SubQuestion>Market the property. (sub-link: Marketing)</SubQuestion>

              <SubQuestion>Receive offer(s). (sub-link: Offer)</SubQuestion>

              <SubQuestion>
                Open escrow. (sub-link: Escrow & Earnest Money Deposit)
              </SubQuestion>

              <SubQuestion>
                Order HOA resale package & demand if there is any. (sub-link: HOA
                ResalePackage & Demand)
              </SubQuestion>

              <SubQuestion>
                Buyer’s home inspection. (sub-link: Home Inspection)
              </SubQuestion>

              <SubQuestion>
                Buyer’s appraisal if financing buyer. (sub-link: appraisal)
              </SubQuestion>

              <SubQuestion>
                Buyer’s financing contingency. (sub-link: financing contingency)
              </SubQuestion>

              <SubQuestion>Buyer’s walkthrough. (sub-link: walkthrough)</SubQuestion>

              <SubQuestion>
                Review Estimated Settlement Statement. (sub-link: ESS)
              </SubQuestion>

              <SubQuestion>
                Recording and escrow disbursement. (sub-link: Recording)
              </SubQuestion>
            </SubQuestionBlock>
            <SubQuestionBlock2>
              <SubQuestion>What’s comps? Why is it important?</SubQuestion>

              <SubQuestion>What’s included in a preparation process?</SubQuestion>

              <SubQuestion>
                What does the listing agreement include? (sub-link: title insurance &
                HOA)
              </SubQuestion>

              <SubQuestion>What’s MLS?</SubQuestion>

              <SubQuestion>
                What are the marketing activities Helipad do to sell my property at a
                top dollar?
              </SubQuestion>

              <SubQuestion>What are included in the offer?</SubQuestion>
            </SubQuestionBlock2>
          </section>
          <Question>
            Q Why do I have to sign an exclusive listing agreement?
          </Question>
          <Question>Q What’s the commission rate and who pays for it?</Question>
          <Question>Q How much will I be netting?</Question>
          <Question>Q Where is the buyer’s EMD being held at?</Question>
          <Question>Q When do I get my money?</Question>
          <Question>Q Where is the buyer’s EMD being held at?</Question>
          <Question>
            Q What are the taxes do I have to pay? (long-term or short-term
            income/capital gain tax, transfer tax){" "}
          </Question>
        </>:<></>}
        
        {category == 5 ? <>
          <Question>Q What’s the property management?</Question>
          <Question>Q What are the lease types in the US? (월세 vs 전세)</Question>
          <Question>Q How long is the lease for?</Question>
          <Question>
            Q Can I do an AirBNB and does Helipad manage AirBNB properties?
          </Question>
          <Question>
            Q How much is Helipad charging for property management fee?
          </Question>
          <Question>
            Q What’s included in the PM service? (see the attached for my PM
            service)
          </Question>
          <Question>Q How do I know if I’m getting a quality tenant?</Question>
          <Question>Q How and when do I get my rental income?</Question>
          <Question>Q What happened my tenant does not pay rent?</Question>
          <Question>
            Q What if I want to sell it while my lease is still in place? Can I
            still show the property?
          </Question>
          <Question>
            Q Who pays for the damages when a tenant is moving out? (damage,
            negligence vs normal wear & tear)
          </Question>
        </>:<></>}
        
      </Container>
    </div>
  );
};

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  font-family: Poppins;
  width: 60%;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 42px;
  font-size: 48px;
  color: #212121;
  font-weight: 600;
`;
const TableOfContents = styled.div`
  margin: 0 0 50px 30px;
`;
const Content = styled.div`
  margin: 10px 0;
`;

const Question = styled.button`
  font-family: Poppins;
  padding-left: 20px;
  margin: 10px 0 10px 30px;
  height: 60px;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  background-color: #FAFAFA;
  text-align: left;
  border: 0;
`;
const SubQuestionBlock = styled.ol.attrs({
  type: "a",
})`
  padding-left: 110px;
  margin: 30px 0;
  font-size: 18px;
  font-weight: 500;
  color: #212121;
`;

const SubQuestionBlock2 = styled.ol.attrs({
  type: "a",
})`
  padding-left: 142px;
  margin: 30px 0;
  color: #565656;
  font-weight: 400;
  font-size: 18px;
`;

const SubQuestion = styled.li`
  margin: 5px 0;
`;

const CategoryBox = styled.div`
  width: 23%;
  align-items: right;
  text-align: right;
  padding-top: 140px;
  font-family: Poppins;
`

const CategoryButton = styled.button`
  width: 300px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #B1B1B1;
  align-items: right;
  padding: 17px;
  background-color: transparent;
  border: 0;
  font-family: Poppins;
`

const CategoryOnButton = styled.button`
  width: 300px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #B69142;
  align-items: right;
  padding: 17px;
  background-color: #FAFAFA;
  border: 0;
  font-family: Poppins;
`

export default FAQ;
