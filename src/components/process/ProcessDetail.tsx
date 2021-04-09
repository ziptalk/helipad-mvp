import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import CompletedImage from '../../images/ic_completed.svg';
import ProgressImage from '../../images/ic_progress.svg';
import { lengthChecker, dividerChecker, stepChecker } from './processService';

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

type ProcessInfoProps = {
  id: number;
  step: number;
  title: string;
  status: string;
};
type ProcessDetailProps = {
  mockData: {
    processInfo: ProcessInfoProps[];
    dueDateInfo: {
      title: string;
      content: string;
    };
  };
};

const ProcessDetail = ({ mockData }: ProcessDetailProps) => {
  const { processInfo, dueDateInfo } = mockData;

  const validate = () => {
    let result = stepChecker(processInfo);
    if (!result) console.log('error');
  };

  useEffect(() => {
    validate();
  });

  //!
  // return (
  //   <Container>
  //     <DateBlock>
  //       <DateTitle>{dueDateInfo.title}</DateTitle>
  //       <DateContent>{dueDateInfo.content}</DateContent>
  //     </DateBlock>
  //     {validator(processInfo) ? (
  //       processInfo.map((data: ProcessInfoProps, idx: number) => (
  //         <ProcessBlock key={idx}>
  //           <Processes>
  //             {lengthChecker(data.title).map((title: string) => (
  //               <Process status={data.status}>{title}</Process>
  //             ))}
  //             <Check status={data.status}></Check>
  //           </Processes>
  //           {dividerChecker({ idx, processInfo }) && <Divider />}
  //         </ProcessBlock>
  //       ))
  //     ) : (
  //       <>{console.log('error')}</>
  //     )}
  //   </Container>
  // );
  //!

  return (
    <Container>
      <DateBlock>
        <DateTitle>{dueDateInfo.title}</DateTitle>
        <DateContent>{dueDateInfo.content}</DateContent>
      </DateBlock>
      {processInfo.map((data: ProcessInfoProps, idx: number) => (
        <ProcessBlock key={idx}>
          <Processes>
            {lengthChecker(data.title).map((title: string) => (
              <Process status={data.status}>{title}</Process>
            ))}
            <Check status={data.status}></Check>
          </Processes>
          {dividerChecker({ idx, processInfo }) && <Divider />}
        </ProcessBlock>
      ))}
    </Container>
  );
};

//? default props
ProcessDetail.defaultProps = {
  mockData: {
    processInfo: [
      {
        id: 1,
        step: 1,
        title: 'Setup local bank account',
        status: 'completed',
      },
      {
        id: 2,
        step: 3,
        title: 'Find laywer',
        status: 'completed',
      },
      {
        id: 3,
        step: 2,
        title: 'Find mortgage lender',
        status: 'progress',
      },
      {
        id: 4,
        step: 1,
        title: 'Find escrow company',
        status: 'not yet',
      },
      {
        id: 5,
        step: 1,
        title:
          'Inspection contingency, loan contingency, engineer survey schedulings',
        status: 'not yet',
      },
      {
        id: 6,
        step: 1,
        title: 'Inspection contingency',
        status: 'not yet',
      },
    ],
    dueDateInfo: {
      title: 'Due Date',
      content: 'April, 1st, 2021',
    },
  },
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
  flex-direction: column;
  position: relative;
`;

const Process: any = styled.div`
  /* default */
  color: #c4c4c4;
  margin-left: 50px;
  margin-right: 20px;

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
          margin: 0 auto;
        `}
`;
const Check: any = styled.div`
  ${(props: any) =>
    props.status === 'completed'
      ? css`
          width: 30px;
          height: 30px;
          background-image: url(${CompletedImage});
          background-repeat: no-repeat;
          line-height: 46.8px;
          position: absolute;
          right: -25px;
          top: 10px;
        `
      : props.status === 'progress'
      ? css`
          background-image: url(${ProgressImage});
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
          line-height: 57.6px;
          position: absolute;
          right: -25px;
          top: 10px;
        `
      : css`
          background: none;
        `}
`;
const Divider = styled.div`
  margin: 10px 0px;
  height: 35px;
  border-right: 2px solid black;
`;

export default ProcessDetail;
