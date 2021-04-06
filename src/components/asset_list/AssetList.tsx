import React, { useState, useEffect } from 'react';
import './AssetList.css';
import AssetCard from './AssetCard';
import styled from 'styled-components';

// export default class AssetList extends React.Component<any, any> {
//     render() {
//         return (
//
//         );
//     }
// }

type AssetListProperties = {};

const AssetList: React.FC<AssetListProperties> = () => {
  /**
   * mock data 읽어오기 => state로 관리
   * investment, living 에 따른 toggle 관리
   * toggle에 따라 mock data state를 다르게 필터링해서 보내줌
   */

  return (
    <Container>
      <Category>
        <InvestmentBlock onClick={() => getInvestList()}>
          Investment Recommendations
        </InvestmentBlock>
        <Divider>|</Divider>
        <LivingBlock onClick={() => getLiveList()}>
          Living Recommendations
        </LivingBlock>
      </Category>
      <div className="sortWrapper">Sort by Price</div>
      <div className="assetListGrid">
        {result.map((asset, idx) => (
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
