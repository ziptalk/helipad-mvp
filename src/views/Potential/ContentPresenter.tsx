import styled from "styled-components";
import checkButtonImg from "../../images/Potential/checkButtonImg.svg";
import { RouteComponentProps } from "react-router-dom";
import GetPotentialList from "../../domain/GetPotentialAndEscrowList";
import List from "../../model/PotentialList";
type ContentPresenterProps = {
  onClickCheckButton: (event: any, selectedItemId: number) => void;
  list: List[];
};
const ContentPresenter = ({
  onClickCheckButton,
  list,
}: ContentPresenterProps) => {
  if (list === undefined) {
    return <div>Loading</div>;
  }
  return (
    <>
      <TitleContainer>
        <Title id="no">No.</Title>
        <Title id="name">Name</Title>
        <Title id="listing">Listing</Title>
        <Title id="request">Requested helipad contact date</Title>
        <Title id="initial">Helipad initial contact date</Title>
        <Title id="accepted">Offer accepted date</Title>
        <Title id="escrow">In Escrow</Title>
      </TitleContainer>
      <ItemContainer>
        {list.map((item: List, idx: number) => (
          <Item key={idx}>
            <No>{item.no}</No>
            <Name>{item.name}</Name>
            <Listing imgPath={item.listing}></Listing>
            <RequestedDate>{item.requestedContactDate}</RequestedDate>
            <InitialDate readOnly={true}></InitialDate>
            <AcceptedDate readOnly={true}></AcceptedDate>
            <Escrow id={`${item.id}`}></Escrow>
            <EscrowLabel
              onClick={(event: any) => onClickCheckButton(event, item.id)}
              htmlFor={`${item.id}`}
            ></EscrowLabel>
          </Item>
        ))}
      </ItemContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1482px;
  height: 70px;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  #no {
    width: 64.39px;
    height: 22px;
    margin-right: 74.3px;
  }
  #name {
    width: 169.4px;
    height: 22px;
    margin-right: 114.91px;
  }
  #listing {
    width: 122.84px;
    height: 22px;
    margin-right: 114.91px;
  }
  #request {
    width: 179.31px;
    height: 44px;
    margin-right: 91.14px;
  }
  #initial {
    width: 163.46px;
    height: 44px;
    margin-right: 72.32px;
  }
  #accepted {
    width: 163.46px;
    height: 44px;
    margin-right: 28.73px;
  }
  #escrow {
    width: 122.84px;
    height: 22px;
  }
`;
const Title = styled.div`
  text-align: center;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1038px;
  .check {
    background-color: #fafafa;
  }
`;
const Item = styled.div`
  width: 1482px;
  height: 102px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  background: #ffffff;

  &:last-child {
    border: none;
  }
`;
const No = styled.div`
  margin-left: 14px;
`;
const Name = styled.div`
  width: 263px;
  height: 20px;
  margin-left: 20px;
`;
const Listing: any = styled.div`
  width: 124px;
  height: 86px;
  background-image: url(${(props: any) => props.imgPath});
  margin-left: 84px;
`;
const RequestedDate = styled.div`
  width: 220px;
  height: 20px;
  margin-left: 84px;
  text-align: center;
`;
const InitialDate = styled.input.attrs({
  type: "date",
  pattern: "d{4}-d{2}-d{2}",
})`
  width: 150px;
  height: 40px;
  text-align: center;
  margin-left: 84px;
`;
const AcceptedDate = styled.input.attrs({
  type: "date",
  value: "YYYY-MM-DD",
  pattern: "d{4}-d{2}-d{2}",
})`
  width: 150px;
  height: 40px;
  text-align: center;
  margin-left: 84px;
`;

const EscrowLabel: any = styled.label`
  width: 24px;
  height: 24px;
  display: inline-block;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-left: 84px;
  margin-right: 55px;
`;
const Escrow = styled.input.attrs({
  type: "checkbox",
})`
  width: 24px;
  height: 24px;
  display: none;

  &:checked + ${EscrowLabel} {
    background: url(${checkButtonImg});
  }
`;

export default ContentPresenter;
