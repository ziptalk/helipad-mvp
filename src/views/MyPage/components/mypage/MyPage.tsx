import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SavedAssetCard from './SavedAssetCard';
import Asset from '../../../../model/Asset';
import SaveAsset from '../../../../domain/SaveAsset';
import { AuthContext } from '../../../../AuthProvider';
import ContactUseCase from "../../../../domain/ContactUseCase";
import {MessageContainer} from "../../../../model/MessageContainer";
import ContactHistory from "./ContactHistory";
import ContactHistoryCard from "./ContactCard";

type MyPageProps = {};

enum Category {
    SAVED_ASSET = 0,
    CONTACT_HISTORY = 1,
}

const MyPage: React.FC<MyPageProps> = () => {
  const { user } = useContext(AuthContext);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [messages, setMessages] = useState<MessageContainer[]>([]);
  const [category, setCategory] = useState<Category>(Category.SAVED_ASSET);

  const onClickSavedHome = (e: any) => {
      setCategory(Category.SAVED_ASSET);
  }

  const onClickContactHistory = (e: any) => {
      setCategory(Category.CONTACT_HISTORY);
  }

  useEffect(() => {
    if (user != null) {
      console.log("user : " + user);
      SaveAsset.getSavedAsset(user.uid).then((assets: Asset[]) => {
          setAssets(assets);
      });
      ContactUseCase.getMyContactHistory(user.uid).then((messages: MessageContainer[]) => {
          setMessages(messages);
      })
    }
  }, []);

  return (
    <Container>
      <CategorySection>
        <SavedHomesBlock onClick={onClickSavedHome}>
            {
                category === Category.SAVED_ASSET ?
                    (
                        <SelectedCategory>
                            SavedHomes
                        </SelectedCategory>
                    ) :
                    (
                        <UnselectedCategory>
                            SavedHomes
                        </UnselectedCategory>
                    )
            }
        </SavedHomesBlock>
        <Divider>|</Divider>
        <ContactHistoryBlock onClick={onClickContactHistory}>
            {
                category === Category.CONTACT_HISTORY ?
                    (
                        <SelectedCategory>
                            Contact History
                        </SelectedCategory>
                    ) :
                    (
                        <UnselectedCategory>
                            Contact History
                        </UnselectedCategory>
                    )
            }
        </ContactHistoryBlock>
      </CategorySection>
      <SavedAssetListBlock>
          {
              (() => {
                  console.log("...");
                  switch(category) {
                      case Category.SAVED_ASSET:
                          return (
                              assets.map((asset, idx) => <SavedAssetCard key={idx} asset={asset} />)
                          )
                      case Category.CONTACT_HISTORY:
                          return (
                              messages.map((message, idx) => <ContactHistoryCard key={idx} data={message} />)
                          )
                      default:
                  }
              })()
          }
      </SavedAssetListBlock>
    </Container>
  );
};

const Container = styled.div``;
const CategorySection = styled.div`
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
  cursor: pointer;
`;

const SelectedCategory = styled.div`
  font-weight: bold;
`;
const UnselectedCategory = styled.div`
  font-weight: 300;
`;

const ContactHistoryBlock = styled(SavedHomesBlock)``; // 상속!
const Divider = styled.div``;
const SavedAssetListBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 470px 470px 470px;
  grid-gap: 15px;
`;

export default MyPage;
