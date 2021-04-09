import React, { useState } from 'react';
import './AssetList.css';
import AssetCard from './AssetCard';
import styled from 'styled-components';
import { ReactComponent as ArrowUp } from '../../images/ic_down.svg';
import { ReactComponent as ArrowDown } from '../../images/ic_up.svg';
import GetAsset from '../../domain/GetAsset';
import Asset from '../../model/Asset';

type AssetListProperties = {};

const AssetList: React.FC<AssetListProperties> = () => {
  const [toInvestment, setInvestment] = useState(true);
  const [ascend, setAscend] = useState(true);
  const [assets, setAssets] = useState<Asset[]>([]);
  new GetAsset().getAssetList().then((value) => {
    setAssets(value);
    // console.log('data', value[0].buildingInformation);
  });
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

  // 투자 목적 리스트
  const getInvestmentList = () => {
    setInvestment(true);
  };

  // 거주 목적 리스트
  const getLivingList = () => {
    setInvestment(false);
  };

  // 오름 차순 정렬
  const setAscending = () => {
    setAscend(true);
  };

  // 내림 차순 정렬
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
      <SortBlock>
        <ArrowTitle>Sort by Price</ArrowTitle>
        <ArrowBlock>
          <ArrowUp
            onClick={() => {
              setAscending();
            }}
          />
        </ArrowBlock>
        <ArrowDown
          onClick={() => {
            setDescending();
          }}
        />
      </SortBlock>

      <AssetListGrid>
        {assets
          .filter((asset) =>
            toInvestment ? asset.forInvestment : !asset.forInvestment
          )
          .sort((a, b) => (ascend ? a.price - b.price : b.price - a.price))
          .map((asset, idx) => (
            <AssetCard key={idx} data={asset} />
          ))}
      </AssetListGrid>
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
const InvestmentBlock = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0 100px;
  font-size: 24px;
  font-weight: 300;
  line-height: 30.29px;
  &:focus {
    font-weight: bold;
  }
`;
const Divider = styled.div``;
const LivingBlock = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0 100px;
  font-size: 24px;
  font-weight: 300;
  line-height: 30.29px;
  &:focus {
    font-weight: bold;
  }
`;

const SortBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;
const ArrowTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22.71px;
  margin-right: 10px;
`;
const ArrowBlock = styled.div`
  padding: 5px 0;

  &:focus {
    color: red;
  }
`;

const AssetListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default AssetList;
