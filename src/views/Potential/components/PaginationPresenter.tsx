import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as LeftArrowSvg } from "../../../images/Potential/leftArrow.svg";
import { ReactComponent as RightArrowSvg } from "../../../images/Potential/rightArrow.svg";
import React from "react";
const PaginationPresenter = ({ listPerPage, totalList, paginate }: any) => {
  console.log(5);
  const [currentBatch, setCurrentBatch] = useState(0);
  let pageNumbers = [];
  const onClickRightArrow = () => {
    // if (currentBatch === bundles.length) {
    //   return undefined;
    // }
    // setCurrentBatch(currentBatch + 1);
  };
  const onClickLeftArrow = () => {
    // if (currentBatch === 0) {
    //   return undefined;
    // }
    // setCurrentBatch(currentBatch - 1);
  };
  for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
    pageNumbers.push(i);
  }

  // domain으로 빼기
  // const DIVIDE_POINT = 10;
  // const bundles: any = [];
  // let start = 0;
  // let end = 10;

  // const totalBundles = Math.ceil(pageNumbers.length / DIVIDE_POINT);
  // for (let i = 1; i <= totalBundles; i++) {
  //   bundles.push(pageNumbers.slice(start, end));
  //   start = end;
  //   end = end + 10;
  // }
  return (
    <Container>
      <PageUl>
        <ArrowContainer onClick={onClickLeftArrow}>
          <LeftArrow />
        </ArrowContainer>
        {/* {bundles[currentBatch] &&
          bundles[currentBatch].map((number: number) => (
            <PageLi key={number}>
              <PageSpan
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                  e.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </PageSpan>
            </PageLi>
          ))} */}
        {pageNumbers.map((number: number) => (
          <PageLi key={number}>
            <PageSpan
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.preventDefault();
                console.log("click");
                paginate(number);
              }}
            >
              {number}
            </PageSpan>
          </PageLi>
        ))}
        <ArrowContainer>
          <RightArrow onClick={onClickRightArrow} />
        </ArrowContainer>
      </PageUl>
    </Container>
  );
};

const Container = styled.div``;
const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 3px;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 63px;
`;
const PageLi = styled.li`
  border: 1px solid #eaeaea;
  border-radius: 4px;
  color: black;
  background: white;
  width: 32px;
  height: 32px;
  margin: 0 4px;
  cursor: pointer;
`;
const PageSpan = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;
const ArrowContainer = styled.span`
  width: 32px;
  height: 32px;
  background: #dfdfdf;
  opacity: 0.5;
  border-radius: 4px;
  position: relative;
  margin: 0 4px;
  cursor: pointer;
`;
const LeftArrow = styled(LeftArrowSvg)`
  position: absolute;
  top: 10px;
  bottom: 10px;
  right: 12.75px;
  left: 11.84px;
  &:active {
  }
`;
const RightArrow = styled(RightArrowSvg)`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 12.75px;
  right: 11.84px;

  &:active {
  }
`;
export default PaginationPresenter;
