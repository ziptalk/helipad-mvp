import styled from "styled-components";
import checkButtonImg from "../../../images/Potential/checkButtonImg.svg";
import { RouteComponentProps } from "react-router-dom";
import GetPotentialList from "../../../domain/GetAdminList";
import List from "../../../model/PotentialList";
import { CgNpm } from "react-icons/cg";
import { useState } from "react";
type ContentPresenterProps = {
  onClickCheckButton: (event: any, selectedItemId: number) => void;
  list: List[];
  moveTo: () => void;
};
const UserContentPresenter = ({
  onClickCheckButton,
  item,
  moveTo,

  onClickEvent,
}: any) => {
  const [inEscrow, setInEscrow] = useState(item.list.inEscrow);
  return (
    <Container>
      <Item className={inEscrow ? "check" : ""}>
        <No>{item.list.no}</No>
        <Name>{item.list.name}</Name>
        <ListingBlock>
          <Listing imgPath={item.list.listing}></Listing>
        </ListingBlock>
        <RequestedDate>{item.list.requestedHelipad}</RequestedDate>
        <InitialDate readOnly={true}></InitialDate>
        <AcceptedDate readOnly={true}></AcceptedDate>
        <Escrow
          checked={item.list.inEscrow}
          readOnly
          id={`${item.assetId}`}
        ></Escrow>
        <EscrowLabel
          onClick={(event: any) => {
            // onClickCheckButton(event, item.assetId);
            // moveTo(item.list, item.userId, item.assetId);
            // onClickEvent();
          }}
          htmlFor={`${item.assetId}`}
        ></EscrowLabel>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #f2f2f2;
  &:last-child {
    border-bottom: none;
  }
  .check {
    background-color: #fafafa;
  }
`;
const Item = styled.div`
  width: 100%;
  height: 102px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 0.3fr 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
  justify-items: center;
  border-bottom: 1px solid #f2f2f2;
  background: #ffffff;
  font-size: 18px;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    height: 80px;
    font-size: 12px;
  }
  &:last-child {
    border: none;
  }
`;
const No = styled.div`
  min-width: 70px;
  height: 22px;
  text-align: center;
`;
const Name = styled.div`
  max-width: 240px;
  height: 20px;
  min-width: 100px;
  padding-right: 15px;
  text-align: center;
`;
const ListingBlock = styled.div`
  width: 160px;
  min-width: 100px;
  text-align: center;
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 90px;
  }
`;
const Listing: any = styled.img.attrs((props: any) => ({
  src: props.imgPath,
}))`
  width: 100%;
  height: auto;

  /* background-image: url(${(props: any) => props.imgPath});
  background-size: cover; */
  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
  }
`;
const RequestedDate = styled.div`
  text-align: center;
  min-width: 100px;
  justify-self: start;
`;
const InitialDate = styled.input.attrs({
  type: "date",
  pattern: "d{4}-d{2}-d{2}",
})`
  width: 150px;
  justify-self: start;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 90px;
    font-size: 10px;
    justify-self: center;
  }
`;
const AcceptedDate = styled.input.attrs({
  type: "date",
  value: "YYYY-MM-DD",
  pattern: "d{4}-d{2}-d{2}",
})`
  width: 150px;
  justify-self: start;

  @media ${({ theme }) => theme.mediaQueryOnDevice.notebookS} {
    width: 90px;
    font-size: 10px;
    justify-self: center;
  }
`;

const EscrowLabel: any = styled.label`
  width: 24px;
  height: 24px;
  display: inline-block;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  /* margin-left: 84px; */
  margin-right: 20px;
  justify-self: end;
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

export default UserContentPresenter;
