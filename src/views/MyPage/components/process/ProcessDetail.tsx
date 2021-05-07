import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import CompletedImage from '../../../../images/ic_completed.svg';
import ProgressImage from '../../../../images/ic_progress.svg';
import { lengthChecker, dividerChecker, stepChecker } from './processService';
import CheckProcessData from '../../../../domain/CheckProcessData';
import ContactUseCase from '../../../../domain/ContactUseCase';
import { SendMessage } from './SendMessage';
import GetProcessInfo from '../../../../domain/GetProcessInfo';
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
const ProcessDetail = ({ contactInfo }: any) => {
  let { userEmail, assetId } = contactInfo;
  let [dueDateInfo, setDueDateInfo] = useState({ title: '', content: '' });
  let [processList, setProcessList] = useState<any[]>();

  useEffect(() => {
    GetProcessInfo.getProcessInfo(userEmail, assetId).then((resolve) => {
      let step = resolve.step;
      let { title, content } = resolve.dueDate;
      let processList = GetProcessInfo.makeProcessCategory(step);
      setDueDateInfo({ title, content });
      setProcessList(processList);
    });
  });

  return (
    <Container>
      <DateBlock>
        <DateTitle>{dueDateInfo.title}</DateTitle>
        <DateContent>{dueDateInfo.content}</DateContent>
      </DateBlock>
      <ProcessBlock>
        {processList &&
          processList.map((process: any) => (
            <>
              <Processes>
                <Content status={process.status}>{process.title}</Content>
                <Check status={process.status}></Check>
              </Processes>
              <Div status={process.divider}></Div>
            </>
          ))}
      </ProcessBlock>
      <SendMessage></SendMessage>
    </Container>
  );
};

//? styled-components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const DateTitle = styled.div`
  color: #4542e2;
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
`;
const DateContent = styled.div`
  font-family: 'Helvetica Neue';
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

const Content: any = styled.div`
  /* default */
  color: #c4c4c4;

  /* status에 따라 다른 style 적용 */
  ${(props: any) =>
    props.status === 'completed'
      ? css`
          color: #000000;
          font-weight: 400;
          line-height: 46.8px;
          font-family: 'Helvetica Neue';
          font-size: 26px;
        `
      : props.status === 'progress'
      ? css`
          color: #4542e2;
          font-weight: 700;
          line-height: 57.6px;
          font-family: 'Helvetica Neue';
          font-size: 32px;
        `
      : css`
          color: #c4c4c4;
          font-weight: 400;
          line-height: 46.8px;
          font-family: 'Helvetica Neue';
          font-size: 26px;
        `}
`;

const Check: any = styled.div`
  width: 30px;
  height: 30px;

  ${(props: any) =>
    props.status === 'completed'
      ? css`
          background-image: url(${CompletedImage});
          background-repeat: no-repeat;
          line-height: 46.8px;
          position: absolute;
          right: -70px;
          top: 10px;
        `
      : props.status === 'progress'
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
