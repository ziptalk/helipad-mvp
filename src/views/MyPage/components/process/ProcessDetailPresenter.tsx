import React from "react";
import styled from "styled-components";
const ProcessDetailPresenter = ({ ...props }) => {
  let {
    handleDayOneToThree,
    handleInspection,
    handleDayOneToSeventeen,
    handleDaySeventeen,
    handleDayTwentyFive,
    handleDayTwentySix,
    handleDayTwentySeven,
    handleDayTwentyEight,
    handleDayThirty,
    onCompleteProcess,
  } = props;
  return (
    <Container>
      <Category className="note_category">
        <div className="note">
          CASH OFFER ESCROW PROCESS. TYPICAL 30 DAYS (Note: ESCROW will have to
          be defined for Korean buyers)
        </div>
        <div className="note">
          [Note: Need to come up with a good visual UX/UI to go down this
          checklist]
        </div>
        <div className="note">
          [Note: this checklist will have to be customizable. E.g. some escrow
          may have 7 day contingency]
        </div>
        <div className="note">
          [Note: Kaylee this doesn’t include the requirements of the Korean
          government/private banker]
        </div>
      </Category>
      <Category>
        <Period>DAY 1-3</Period>
        <Item>
          <Label>
            <Content>
              [BUYER] Wire earnest money deposit within 3 days (EMD=3% of
              purchase price)
            </Content>
            <input
              type="checkbox"
              name="earnestMoney"
              onChange={handleDayOneToThree}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>[ESCROW] Order Title Report</Content>
            <input
              type="checkbox"
              name="orderTitleReport"
              onChange={handleDayOneToThree}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 1-17</Period>
        <Item>
          <Content>
            [HELIPAD] Schedule inspections [Note: Kaylee we have to discuss how
            we would collect funds from buyer to pay inspectors]
          </Content>
          <SubItem>
            <Label>
              <SubContent>Physical inspection</SubContent>
              <input
                type="checkbox"
                name="inspection"
                value="physical"
                onChange={handleInspection}
              ></input>
            </Label>
          </SubItem>
          <SubItem>
            <Label>
              <SubContent>Termite inspection (optional)</SubContent>
              <input
                type="checkbox"
                name="inspection"
                value="Termite"
                onChange={handleInspection}
              ></input>
            </Label>
          </SubItem>
          <SubItem>
            <Label>
              <SubContent>Mold inspection (optional)</SubContent>
              <input
                type="checkbox"
                name="inspection"
                value="mold"
                onChange={handleInspection}
              ></input>
            </Label>
          </SubItem>
          <SubItem>
            <Label>
              <SubContent>Sewage inspection (optional)</SubContent>
              <input
                type="checkbox"
                name="inspection"
                value="sewage"
                onChange={handleInspection}
              ></input>
            </Label>
          </SubItem>
          <SubItem>
            <Label>
              <SubContent>Geological inspection (optional)</SubContent>
              <input
                type="checkbox"
                name="inspection"
                value="geological"
                onChange={handleInspection}
              ></input>
            </Label>
          </SubItem>
        </Item>
        <Item>
          <Label>
            <Content>
              [HELIPAD] Review repair/remedy cost with Buyer and submit Request
              For Repairs
            </Content>
            <input
              type="checkbox"
              name="repairs"
              onChange={handleDayOneToSeventeen}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>[HELIPAD] Review Escrow Papers with Buyer</Content>
            <input
              type="checkbox"
              name="escrowPaper"
              onChange={handleDayOneToSeventeen}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>[HELIPAD] Review Title Report with Buyer</Content>
            <input
              type="checkbox"
              name="titleReport"
              onChange={handleDayOneToSeventeen}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>[HELIPAD] Order Home Warranty on behalf of Buyer</Content>
            <input
              type="checkbox"
              name="homeWarranty"
              onChange={handleDayOneToSeventeen}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 17</Period>
        <Item>
          <Label>
            <Content>
              [BUYER] Remove all contingencies (EMD is no longer refundable)
            </Content>
            <input
              type="checkbox"
              name="removeContingencies"
              onChange={handleDaySeventeen}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 25</Period>
        <Item>
          <Label>
            <Content>
              [HELIPAD] Review Estimated Settlement Statement with Buyer
            </Content>
            <input
              type="checkbox"
              name="estimatedSettlement"
              onChange={handleDayTwentyFive}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 26</Period>
        <Item>
          <Label>
            <Content>
              [BUYER] Wire closing funds to Escrow (Intl takes approx. 2
              business days)
            </Content>
            <input
              type="checkbox"
              name="closingFunds"
              onChange={handleDayTwentySix}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>
              [HELIPAD] Set up LLC on behalf of Client if client wants to.
              [Kaylee we have to discuss the pros/cons of buyers setting a LLC.
              It would have to be a Nevada LLC. CA LLCs takes too long to set
              up.
            </Content>
            <input
              type="checkbox"
              name="setUpLLC"
              onChange={handleDayTwentySix}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 27</Period>
        <Item>
          <Label>
            <Content>[HELIPAD] Final walkthrough on behalf of Buyer</Content>
            <input
              type="checkbox"
              name="walkThrough"
              onChange={handleDayTwentySeven}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 28</Period>
        <Item>
          <Label>
            <Content>[BUYER] Sign all closing documents</Content>
            <input
              type="checkbox"
              name="closingDocuments"
              onChange={handleDayTwentyEight}
            ></input>
          </Label>
        </Item>
      </Category>
      <Category>
        <Period>DAY 30</Period>
        <Item>
          <Label>
            <Content>[ESCROW] Confirm recording of sale from County</Content>
            <input
              type="checkbox"
              name="confirmRecording"
              onChange={handleDayThirty}
            ></input>
          </Label>
        </Item>
        <Item>
          <Label>
            <Content>
              [HELIPAD] Receive keys to property from selling agent
            </Content>
            <input
              type="checkbox"
              name="receiveKey"
              onChange={handleDayThirty}
            ></input>
          </Label>
        </Item>
      </Category>
      <Button onClick={onCompleteProcess}>Complete Process</Button>
    </Container>
  );
  // return (
  //   <Container>
  //     <DateBlock>
  //       <DateTitle>{dueDateInfo.title}</DateTitle>
  //       <DateContent>{dueDateInfo.content}</DateContent>
  //     </DateBlock>
  //     <ProcessBlock>
  //       {processList &&
  //         processList.map((process: any) => (
  //           <>
  //             <Processes>
  //               <Content status={process.status}>{process.title}</Content>
  //               <Check status={process.status}></Check>
  //             </Processes>
  //             <Div status={process.divider}></Div>
  //           </>
  //         ))}
  //     </ProcessBlock>
  //     <SendMessage></SendMessage>
  //   </Container>
  // );
};

//? styled-components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .note_category {
    margin-bottom: 20px;
  }
  .note {
    font-weight: 600;
    font-size: 20px;
  }
  .note:first-child {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;
const Category = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Period = styled.div`
  width: 90px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid black;
  margin: 30px 0 15px;
`;
const Item = styled.div`
  padding: 3px 0;
`;
const SubItem = styled.div`
  padding: 3px 0;
`;
const Label = styled.label`
  width: 50%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  font-size: 18px;

  input {
    width: 20px;
    height: 20px;
    flex: 1;
  }
`;

const Content = styled.div`
  flex: 9;
`;
const SubContent = styled.div`
  flex: 9;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 50%;
  height: 45px;
  background-color: #4542e2;
  color: #ffffff;
  font-size: 20px;
`;
export default ProcessDetailPresenter;
