import React from 'react';
import styled from 'styled-components';
import NeighborhoodItem from "../../../model/NeighborhoodItem";
import {Link} from "react-router-dom";

type NeighborhoodCardProps = {
    data: NeighborhoodItem;
}

const NeighborhoodCard = ({ data }: NeighborhoodCardProps) => {
    return (
        <Link to={"/neighborhoodInfo/" + data.id}>
            <Wrapper>
                <Container background={data.thumbnailUrl} />
                <RegionName>
                    {data.regionName}
                </RegionName>
            </Wrapper>
        </Link>
    );
}

const Wrapper = styled.div`
  width: 470px;
  height: 353px;
  display: flex;
  flex-direction: column;
`
const Container: any = styled.div`
  width: 470px;
  height: 300px;
  
  background: url(${(props: any) => props.background});
  background-size: cover;
  text-decoration: none;
`;

const RegionName = styled.div`
  color: blue;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`

export default NeighborhoodCard;