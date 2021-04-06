import React, { useState, useEffect } from 'react';
import './AssetList.css';
import AssetCard from './AssetCard';
import styled from 'styled-components';
import { Process } from '../../service/MockAssetReader';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// export default class AssetList extends React.Component<any, any> {
//     render() {
//         return (
//
//         );
//     }
// }

type AssetListProperties = {};

const AssetList: React.FC<AssetListProperties> = () => {
  const [toInvestment, setInvestment] = useState(true);
  const [ascend, setAscend] = useState(true);
  /**
   *
   * mock data 읽어오기 => state로 관리
   * investment, living 에 따른 toggle 관리 (toInvestment) => default === true
   * toggle에 따라 필터링 조건을 변경하여 AssetCard로 넘김
   *
   * 오름차순, 내림차순?
   * default === ascending
   * ascending toggle로 관리.
   */
  const assetList = Process();

  // 투자 목적 리스트
  const getInvestmentList = () => {
    setInvestment(true);
  };

  // 거주 목적 리스트
  const getLivingList = () => {
    setInvestment(false);
  };

  const setAscending = () => {
    setAscend(true);
  };
  const setDescending = () => {
    setAscend(false);
  };
  return (
    <Container>
      <Category>
        <InvestmentBlock onClick={() => getInvestmentList()}>
          Investment Recommendations
        </InvestmentBlock>
        <Divider>|</Divider>
        <LivingBlock onClick={() => getLivingList()}>
          Living Recommendations
        </LivingBlock>
      </Category>
      <div className="sortWrapper">
        Sort by Price
        <MdKeyboardArrowUp
          onClick={() => {
            setAscending();
          }}
        />
        <MdKeyboardArrowDown
          onClick={() => {
            setDescending();
          }}
        />
      </div>
      <div className="assetListGrid">
        {assetList
          .filter((asset) =>
            toInvestment ? asset.investment : !asset.investment
          )
          .sort((a, b) => (ascend ? a.price - b.price : b.price - a.price))
          .map((asset, idx) => (
            <AssetCard key={idx} asset={asset} />
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div``;

const Category = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 24px;
`;
const InvestmentBlock = styled.div`
  padding: 0 100px;
`;
const Divider = styled.div``;
const LivingBlock = styled.div`
  padding: 0 100px;
`;

export default AssetList;
