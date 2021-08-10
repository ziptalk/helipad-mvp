import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import { ReactComponent as PlusSvg } from "../../../images/InviteCodeForm/ic_plusButton.svg";
import { ReactComponent as CloseSvg } from "../../../images/InviteCodeForm/ic_closeButton.svg";
type Props = {
  buyerRepresentation: boolean;
  propertyManagement: boolean;
  sellerRepresentation: boolean;
  [key: string]: boolean;
};
const OurArea = () => {
  const [clickState, setClickState] = useState<Props>({
    buyerRepresentation: false,
    propertyManagement: false,
    sellerRepresentation: false,
  });

  const onClickCategory = (event: any) => {
    console.log(clickState.clickCategory);
    let clickCategory = event.target.id;
    setClickState({
      ...clickState,
      [clickCategory]: !clickState[clickCategory],
    });

    // switch (clickCategory) {
    //   case "buyerRepresentation":
    //     setClickState({
    //       ...clickState,
    //       [clickCategory]: !clickState.buyerRepresentation,
    //     });
    //     break;
    //   case "propertyManagement":
    //     setClickState({
    //       ...clickState,
    //       [clickCategory]: !clickState.propertyManagement,
    //     });
    //     break;
    //   case "sellerRepresentation":
    //     setClickState({
    //       ...clickState,
    //       [clickCategory]: !clickState.sellerRepresentation,
    //     });
    //     break;
    // }
  };
  console.log("clickState", clickState);
  return (
    <Container>
      <Category>
        <Line />
        OUR AREAS OF EXPERTISE
      </Category>
      <ListContainer>
        <ItemBlock>
          <ContentBlock>
            <Title>Buyer Representation</Title>
            <Content clicked={clickState.buyerRepresentation}>
              Our local Helipad experts in each area we serve will understand
              your needs and investment goals and help you find your dream home
              in the US. With our knowledge and experience working with bankers
              and CPA’s overseas, your purchase will be easy and safe.
            </Content>
          </ContentBlock>
          <ButtonBlock>
            {clickState.buyerRepresentation ? (
              <CloseButton id="buyerRepresentation" onClick={onClickCategory} />
            ) : (
              <PlusButton id="buyerRepresentation" onClick={onClickCategory} />
            )}
          </ButtonBlock>
        </ItemBlock>
        <ItemBlock>
          <ContentBlock>
            <Title>Property management</Title>
            <Content clicked={clickState.propertyManagement}>
              Your properties will be in good hands of Helipad. We will
              safeguard your assets, maximize income potential, and ensure you
              are in compliance with US federal, state and local real estate
              laws.
            </Content>
          </ContentBlock>
          <ButtonBlock>
            {clickState.propertyManagement ? (
              <CloseButton id="propertyManagement" onClick={onClickCategory} />
            ) : (
              <PlusButton id="propertyManagement" onClick={onClickCategory} />
            )}
          </ButtonBlock>
        </ItemBlock>
        <ItemBlock>
          <ContentBlock>
            <Title>Seller Representation</Title>
            <Content clicked={clickState.sellerRepresentation}>
              If you already have your properties in the US, Helipad experts
              will find a right buyer for your property. We not only focus on
              maximizing your profits, but also guide you through tax deferral
              exchange option (1031 Exchange), Foreign Investment in Real
              Property Tax Act (FIRTPA), annual tax reporting requirements per
              US and your local compliance, and, most important, safely wiring
              your sale proceeds into your bank.
            </Content>
          </ContentBlock>
          <ButtonBlock>
            {clickState.sellerRepresentation ? (
              <CloseButton
                id="sellerRepresentation"
                onClick={onClickCategory}
              />
            ) : (
              <PlusButton id="sellerRepresentation" onClick={onClickCategory} />
            )}
          </ButtonBlock>
        </ItemBlock>
        <ItemBlock>
          <ContentBlock className="comingSoon">
            <Title>Commercial Brokerages</Title>
            <SubTitle>Coming Soon</SubTitle>
          </ContentBlock>
          <ButtonBlock>
            <PlusButton />
          </ButtonBlock>
        </ItemBlock>
        <ItemBlock>
          <ContentBlock className="comingSoon">
            <Title>Development</Title>
            <SubTitle>Coming Soon</SubTitle>
          </ContentBlock>
          <ButtonBlock>
            <PlusButton />
          </ButtonBlock>
        </ItemBlock>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 100px;
  width: 80vw;
  max-width: 1904px;
`;
const Line = styled(LineSvg)``;
const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 4px;
  color: #b69142;
  ${Line} {
    margin-right: 24px;
  }
  margin-bottom: 54px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 13px;
    line-height: 23px;
  }
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemBlock = styled.div`
  padding: 25px 0;
  display: flex;
  &:first-child {
    border-top: 1px solid #eaeaea;
  }
  border-bottom: 1px solid #eaeaea;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    padding: 15px 0;
  }
  .comingSoon {
    color: #a3a3a3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ContentBlock = styled.div`
  flex: 8;
  padding-right: 15%;
  padding: 10px 0;
`;
const Title = styled.div`
  font-size: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: 69px;
  letter-spacing: -1px;
  text-align: left;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    font-size: 28px;
    line-height: 50px;
  }
`;

const SubTitle = styled.div`
  margin-right: 10%;
`;
const Content: any = styled.div`
  padding: 1.4vw 0;
  font-size: 18px;
  line-height: 27px;
  display: ${(props: any) => props.clicked === false && "none"};
`;
const PlusButton = styled(PlusSvg)`
  padding: 10px;
`;
const CloseButton = styled(CloseSvg)`
  padding: 10px;
`;
const ButtonBlock: any = styled.div`
  flex: 1;
  text-align: center;
  ${PlusButton} {
  }
  ${CloseButton} {
  }
`;
export default OurArea;
