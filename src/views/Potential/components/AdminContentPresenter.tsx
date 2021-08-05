import styled from "styled-components";
import checkButtonImg from "../../../images/Potential/checkButtonImg.svg";
import { RouteComponentProps } from "react-router-dom";
import GetPotentialList from "../../../domain/GetAdminList";
import List from "../../../model/PotentialList";
import { CgNpm } from "react-icons/cg";
import { useState } from "react";
type ContentPresenterProps = {
  onClickCheckButton: (event: any, selectedItemId: number) => void;
  item: List;
  moveTo: () => void;
};
const AdminContentPresenter = ({
  onClickCheckButton,
  item,
  moveTo,
  userMoveTo,
  onClickEvent,
}: any) => {
  const [inEscrow, setInEscrow] = useState(item.list.inEscrow);

  return (
    <Container>
      <Item className={inEscrow ? "check" : ""}>
        <No>{item.list.no}</No>
        <Name>{item.list.name}</Name>
        <Listing imgPath={item.list.listing}></Listing>
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
            onClickCheckButton(event, item.assetId);
            moveTo(item.list, item.userId, item.assetId);
            userMoveTo(item.list, item.userId, item.assetId);
            onClickEvent();
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
// const ItemContainer = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   max-height: 1118px;
//   /* border-bottom: 1px solid red; */
//   .check {
//     background-color: #fafafa;
//   }
//   &:last-child {
//     border: none;
//   } */
// `;
const Item = styled.div`
  width: 100%;
  height: 102px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #f2f2f2; */
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
  text-align: center;
`;
const Listing: any = styled.div`
  width: 124px;
  height: 86px;
  background-image: url(${(props: any) => props.imgPath});
  background-size: cover;
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

export default AdminContentPresenter;
