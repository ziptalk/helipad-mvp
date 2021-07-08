import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
type MapPresenterProps = {
  regionInfo: NeighborhoodItem;
};
const MapPresenter = ({ regionInfo }: MapPresenterProps) => {
  console.log("regionInfo:", regionInfo);

  return (
    <Container>
      <MapBlock></MapBlock>
      <AttributeBlock>
        <AttributeTitle>Attributes</AttributeTitle>
        <Attribute>{regionInfo.attribute}</Attribute>
      </AttributeBlock>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;
const MapBlock = styled.div`
  width: 100%;
  height: 880px;
  background: gray;
`;
const AttributeBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 27px;
  margin-top: 20px;
  margin-left: 212px;
`;
const AttributeTitle = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;

  margin-right: 20px;
`;
const Attribute = styled.div``;
export default MapPresenter;
