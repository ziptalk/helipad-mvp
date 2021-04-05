import React from 'react';
import styled from 'styled-components';
/**
 * School Nearby Component
 *
 */
// mock data
const SchoolInfo = [
  {
    School: 'P.S. 84 Jose De Diego',
    Type: 'Public',
    Grades: 'PK-8',
    Distance: '0.1m',
    Rating: 5,
  },
  {
    School: 'St.s. Peter - Paul Elementary school',
    Type: 'Private',
    Grades: 'PK-8',
    Distance: '0.2m',
    Rating: 'NR',
  },
  {
    School: 'Jhs 50 John D wells',
    Type: 'Public',
    Grades: '6-8',
    Distance: '0.4m',
    Rating: 8,
  },
  {
    School: 'Conselyea Preparatory School',
    Type: 'Public',
    Grades: 'PK-8',
    Distance: '0.4m',
    Rating: 5,
  },
  {
    School: 'ABCDEFG',
    Type: 'Private',
    Grades: 'PK-8',
    Distance: '0.1m',
    Rating: 'NR',
  },
];
type SchoolNearByProps = {};
const SchoolNearby: React.FC<any> = ({ SchoolNearByProps }) => {
  return (
    <Container>
      <Title>SchoolNearby</Title>
      <CategoryContainer>
        <Category>All</Category>
        <Divider></Divider>
        <Category>Elementary</Category>
        <Divider></Divider>
        <Category>Middle</Category>
        <Divider></Divider>
        <Category>High</Category>
      </CategoryContainer>
      <SchoolTable>
        <SchoolTableTitleContainer>
          <School>School</School>
          <RestBlock>
            <Rest>Type</Rest>
            <Rest>Grades</Rest>
            <Rest>Distance</Rest>
            <Rest>Rating</Rest>
          </RestBlock>
        </SchoolTableTitleContainer>
        <SchoolTableContentContainer>
          {SchoolInfo.map((school, idx) => (
            <SchoolTableContent_Block key={idx}>
              <School className="school">{school.School}</School>
              <RestBlock className="restBlock">
                <Rest>{school.Type}</Rest>
                <Rest>{school.Grades}</Rest>
                <Rest>{school.Distance}</Rest>
                <Rest>{school.Rating}</Rest>
              </RestBlock>
            </SchoolTableContent_Block>
          ))}
        </SchoolTableContentContainer>
      </SchoolTable>
      <MoreButtonBlock>
        <MoreButton>{'more >'}</MoreButton>
      </MoreButtonBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const CategoryContainer = styled.div`
  font-size: 15px;

  display: flex;
  margin: 20px 0px;
`;
const Category = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  &:active {
    font-weight: bold;
  }
`;
const Divider = styled.div`
  border-right: 1px solid black;
  height: 30px;
`;

const SchoolTable = styled.div``;
const SchoolTableTitleContainer = styled.div`
  border-bottom: 1px solid #626262;
  display: flex;
  justify-content: space-around;
  color: #626262;
`;
const School = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px 0px;
`;
const RestBlock = styled.div`
  display: flex;
  padding: 10px 0px;
  width: 100%;
`;
const Rest = styled.div`
  width: 100%;
`;

const SchoolTableContentContainer = styled.div``;
const SchoolTableContent_Block = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: flex;

  .school {
  }

  .restBlock {
  }
`;
const MoreButtonBlock = styled.div`
  text-align: right;
  margin-top: 30px;
`;
const MoreButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  border-bottom: 1px solid blue;
  color: blue;
`;
export default SchoolNearby;
