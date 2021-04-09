import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SavedAssetCard from './SavedAssetCard';
import Asset from '../../model/Asset';
import { Process } from '../../service/MockAssetReader';
// import GetAssetList from '../../domain/GetAssetList';

type MyPageProps = {};
const Mypage: React.FC<MyPageProps> = () => {
  let mockAssets = Process();
  const [assets, setAssets] = useState<Asset[]>(mockAssets);

  return (
    <Container>
      <Category>
        <SavedHomesBlock onClick={() => {}}>Saved homes</SavedHomesBlock>
        <Divider>|</Divider>
        <ContactHistoryBlock onClick={() => {}}>
          Contact History
        </ContactHistoryBlock>
      </Category>
      <SavedAssetListBlock>
        {assets.map((asset, idx) => (
          <SavedAssetCard key={idx} asset={asset} />
        ))}
      </SavedAssetListBlock>
    </Container>
  );
};

const Container = styled.div``;
const Category = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SavedHomesBlock = styled.div`
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
const ContactHistoryBlock = styled(SavedHomesBlock)``; // 상속!
const Divider = styled.div``;

// const ContactHistoryBlock = styled.div`
//   background: none;
//   border: none;
//   outline: none;
//   padding: 0 100px;
//   font-size: 24px;
//   font-weight: 300;
//   line-height: 30.29px;
//   &:focus {
//     font-weight: bold;
//   }
// `;

const SavedAssetListBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default Mypage;
