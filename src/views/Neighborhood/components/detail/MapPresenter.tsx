import styled from "styled-components";
import NeighborhoodItem from "../../../../model/NeighborhoodItem";
type MapPresenterProps = {
  regionInfo: NeighborhoodItem;
};
const MapPresenter = ({ regionInfo }: MapPresenterProps) => {
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
  max-width: 1920px;
  margin-bottom: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MapBlock = styled.div`
  height: 880px;
  max-width: 1920px;
  width: 100vw;
  background: gray;
  margin-left: 0;
  margin-right: 0;
`;
const AttributeBlock = styled.div`
  max-width: 80vw;
  width: 80vw;
  display: flex;
  align-items: center;
  height: 27px;
  margin-top: 20px;
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
