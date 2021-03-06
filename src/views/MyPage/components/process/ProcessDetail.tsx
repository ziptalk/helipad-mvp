import React, { useState, useEffect, useContext, useMemo } from "react";
import styled, { css } from "styled-components";
import CompletedImage from "../../../../images/ic_completed.svg";
import ProgressImage from "../../../../images/ic_progress.svg";
import { lengthChecker, dividerChecker, stepChecker } from "./processService";
import CheckProcessData from "../../../../domain/CheckProcessData";
import ContactUseCase from "../../../../domain/ContactUseCase";
import { SendMessage } from "./SendMessage";
import GetProcessInfo from "../../../../domain/GetProcessInfo";
/**
 * 변경 가능한 mock data
 * => ('변경 가능' 이란 각각의 data content가 변경될 수도 있고,
 *     갯수(?) 자체가 추가되거나 삭제될 수 있음을 의미함.)
 *
 * ?확장성을 고려한다면 ?
 * mock data를 짜고 데이터가 어떠한 형태로 넘어오든 유연하게 대응할 수 있어야함.
 * react에서 개선한다면 넘어오는 props를 각각 받는게 아니라 {...props} 형태로 받아서 mock data의 변경과는 무관하게 component 코드를 짜야함.
 * 또한 process가 추가되는 경우가 있으므로
 * {
 *   1. Category component를 애초에 하드코딩 X => props로 받아와서 반복문으로 구현(?)
 *   2. process가 추가된다면 mock data의 갯수가 늘어나는거니 => mock data도 반복문으로
 * }
 * (이게 의존성(?)을 줄인다(?) 이런 말인가)
 *
 * ---
 * 넘어올 수 있는 status => 1. completed 2. in progress 3. not yet
 * status에 따라 `Category` component style을 다르게 구현해야함.
 *
 *
 * ! 추가사항
 *  process => 'due date' 데이터가 같이 넘어와야 한다.
 */

type ProcessInfo = {
  divider?: string;
  id: number;
  title: string;
  statusInfo: { step: number; status: string };
};

type assetsProps = {
  assetId: number;
  processInfo: ProcessInfo[];
  dueDateInfo: {
    title: string;
    content: string;
  };
};
type DayOneToThree = {
  earnestMoney?: boolean;
  orderTitleReport?: boolean;
};
type DayOneToSeventeen = {
  inspection?: string[];
  removeContingencies?: boolean;
  repairs?: boolean;
  escrowPaper?: boolean;
  titleReport?: boolean;
  homeWarranty?: boolean;
};
const ProcessDetail = ({ contactInfo }: any) => {
  let { userEmail, assetId } = contactInfo;
  console.log(userEmail, assetId);
  let [dueDateInfo, setDueDateInfo] = useState({ title: "", content: "" });
  let [processList, setProcessList] = useState<any[]>();
  const [dayOneToThree, setDayOneToThree] = useState<DayOneToThree>();
  const [inspection, setInspection] = useState<string[]>([]);
  let [dayOneToSeventeen, setDayOneToSeventeen] = useState<DayOneToSeventeen>({
    removeContingencies: false,
    repairs: false,
    escrowPaper: false,
    titleReport: false,
    homeWarranty: false,
  });
  const [daySeventeen, setDaySeventeen] = useState(false);
  const [dayTwentyFive, setDayTwentyFive] = useState(false);
  const [dayTwentySix, setDayTwentySix] = useState({
    closingFunds: false,
    setUpLLC: false,
  });
  const [dayTwentySeven, setDayTwentySeven] = useState(false);
  const [dayTwentyEight, setDayTwentyEight] = useState(false);
  const [dayThirty, setDayThirty] = useState({
    confirmRecording: false,
    receiveKey: false,
  });

  useEffect(() => {
    GetProcessInfo.getProcessInfo(userEmail, assetId).then((resolve) => {
      let step = resolve.step;
      let { title, content } = resolve.dueDate;
      let processList = GetProcessInfo.makeProcessCategory(step);
      setDueDateInfo({ title, content });
      setProcessList(processList);
    });
  }, []);

  const handleDayOneToThree = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayOneToThree({
      ...dayOneToThree,
      [name]: checked,
    });
  };
  const handleInspection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setInspection([...inspection, value]);
    } else {
      let newInspection = inspection.filter((ele) => ele !== value);
      setInspection(newInspection);
    }
  };
  const handleDayOneToSeventeen = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setDayOneToSeventeen({
      ...dayOneToSeventeen,
      [name]: checked,
    });
  };
  const handleDaySeventeen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDaySeventeen(checked);
  };
  const handleDayTwentyFive = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentyFive(checked);
  };

  const handleDayTwentySix = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayTwentySix({ ...dayTwentySix, [name]: checked });
  };

  const handleDayTwentySeven = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentySeven(checked);
  };

  const handleDayTwentyEight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setDayTwentyEight(checked);
  };

  const handleDayThirty = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDayThirty({ ...dayThirty, [name]: checked });
  };

  const onCompleteProcess = (e: any) => {
    let result = {
      dayOneToThree,
      inspection,
      dayOneToSeventeen,
      daySeventeen,
      dayTwentyFive,
      dayTwentySix,
      dayTwentySeven,
      dayTwentyEight,
      dayThirty,
    };
    console.log("result:", result);
  };

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
const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const DateTitle = styled.div`
  color: #4542e2;
  font-family: "Helvetica Neue";
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
`;
const DateContent = styled.div`
  font-family: "Helvetica Neue";
  font-weight: 700;
  font-size: 36px;
  line-height: 64.8px;
`;

const ProcessBlock: any = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Processes = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
`;

const Divider = styled.div`
  margin: 10px 0px;
  height: 35px;
  border-right: 2px solid black;
`;

// const Content: any = styled.div`
//   /* default */
//   color: #c4c4c4;

//   /* status에 따라 다른 style 적용 */
//   ${(props: any) =>
//     props.status === "completed"
//       ? css`
//           color: #000000;
//           font-weight: 400;
//           line-height: 46.8px;
//           font-family: "Helvetica Neue";
//           font-size: 26px;
//         `
//       : props.status === "progress"
//       ? css`
//           color: #4542e2;
//           font-weight: 700;
//           line-height: 57.6px;
//           font-family: "Helvetica Neue";
//           font-size: 32px;
//         `
//       : css`
//           color: #c4c4c4;
//           font-weight: 400;
//           line-height: 46.8px;
//           font-family: "Helvetica Neue";
//           font-size: 26px;
//         `}
// `;

const Check: any = styled.div`
  width: 30px;
  height: 30px;

  ${(props: any) =>
    props.status === "completed"
      ? css`
          background-image: url(${CompletedImage});
          background-repeat: no-repeat;
          line-height: 46.8px;
          position: absolute;
          right: -70px;
          top: 10px;
        `
      : props.status === "progress"
      ? css`
          background-image: url(${ProgressImage});
          background-repeat: no-repeat;
          line-height: 57.6px;
          position: absolute;
          right: -70px;
          top: 10px;
        `
      : css``}
`;

const Div: any = styled.div`
  width: 60px;
  font-size: 45px;

  ${(props: any) =>
    props.status === true
      ? css`
          margin: 10px 0px;
          margin-right: 60px;
          height: 35px;
          border-right: 2px solid black;
          color: #000000;
        `
      : css`
          color: #c4c4c4;
        `}
`;
export default ProcessDetail;
