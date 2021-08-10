import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as MoreSvg } from "../../../../images/ic_more.svg";
/**
 * School Nearby Component
 *
 */
// mock data
const SchoolInfo = [
  {
    School: "P.S. 84 Jose De Diego",
    Type: "Public",
    Grades: "PK-8",
    Distance: "0.1m",
    Rating: 5,
  },
  {
    School: "St.s. Peter - Paul Elementary school",
    Type: "Private",
    Grades: "PK-8",
    Distance: "0.2m",
    Rating: "NR",
  },
  {
    School: "Jhs 50 John D wells",
    Type: "Public",
    Grades: "6-8",
    Distance: "0.4m",
    Rating: 8,
  },
  {
    School: "Conselyea Preparatory School",
    Type: "Public",
    Grades: "PK-8",
    Distance: "0.4m",
    Rating: 5,
  },
  {
    School: "ABCDEFG",
    Type: "Private",
    Grades: "PK-8",
    Distance: "0.1m",
    Rating: "NR",
  },
];
enum SchoolCategory {
  All = "All",
  Elementary = "Elementary",
  Middle = "Middle",
  High = "High",
}
type SchoolNearByProps = {};
const SchoolNearby: React.FC<any> = ({ SchoolNearByProps }) => {
  const [selectedCategory, setSelectedCategory] = useState(SchoolCategory.All);
  const onClickCategory = (e: any) => {
    e.preventDefault();
    const { id } = e.target;
    switch (id) {
      case "all":
        setSelectedCategory(SchoolCategory.All);
        break;
      case "elementary":
        setSelectedCategory(SchoolCategory.Elementary);
        break;
      case "middle":
        setSelectedCategory(SchoolCategory.Middle);
        break;
      case "high":
        setSelectedCategory(SchoolCategory.High);
        break;
    }
  };
  const renderByCategory = () => {
    switch (selectedCategory) {
      case SchoolCategory.All:
        return (
          <>
            <SeletedCategory id="all" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.All}
            </SeletedCategory>
            <Category id="elementary" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Elementary}
            </Category>
            <Category id="middle" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Middle}
            </Category>
            <Category id="high" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.High}
            </Category>
          </>
        );
        break;
      case SchoolCategory.Elementary:
        return (
          <>
            <Category id="all" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.All}
            </Category>
            <SeletedCategory
              id="elementary"
              onClick={(e: any) => onClickCategory(e)}
            >
              {SchoolCategory.Elementary}
            </SeletedCategory>
            <Category id="middle" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Middle}
            </Category>
            <Category id="high" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.High}
            </Category>
          </>
        );
        break;
      case SchoolCategory.Middle:
        return (
          <>
            <Category id="all" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.All}
            </Category>
            <Category id="elementary" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Elementary}
            </Category>
            <SeletedCategory
              id="middle"
              onClick={(e: any) => onClickCategory(e)}
            >
              {SchoolCategory.Middle}
            </SeletedCategory>
            <Category id="high" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.High}
            </Category>
          </>
        );
        break;
      case SchoolCategory.High:
        return (
          <>
            <Category id="all" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.All}
            </Category>
            <Category id="elementary" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Elementary}
            </Category>
            <Category id="middle" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.Middle}
            </Category>
            <SeletedCategory id="high" onClick={(e: any) => onClickCategory(e)}>
              {SchoolCategory.High}
            </SeletedCategory>
          </>
        );
        break;
    }
  };
  // console.log(name);

  return (
    <Container>
      <Title>SchoolNearby</Title>
      <CategoryBlock>{renderByCategory()}</CategoryBlock>
      <TableContainer>
        <TitleBlock>
          <SchoolTitle>School</SchoolTitle>
          <RestBlock>
            <RestTitle>Type</RestTitle>
            <RestTitle>Grades</RestTitle>
            <RestTitle>Distance</RestTitle>
            <RestTitle>Rating</RestTitle>
          </RestBlock>
        </TitleBlock>
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
      </TableContainer>
      <MoreButtonBlock>
        <MoreButton />
      </MoreButtonBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Title = styled.div`
  width: 300px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  color: #212121;
`;
const CategoryBlock = styled.div`
  font-size: 15px;
  width: 40%;
  display: flex;
  margin: 20px 0px;
`;
const Category: any = styled.div`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
  cursor: pointer;
`;
const SeletedCategory = styled.div`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #212121;
  border-bottom: 2px solid #212121;
  cursor: pointer;
`;
const Divider = styled.div`
  border-right: 1px solid black;
  height: 30px;
`;

const TableContainer = styled.div``;
const TitleBlock = styled.div`
  border-bottom: 1px solid #626262;
  display: flex;
  justify-content: space-around;
  color: #212121;
  width: 100%;
`;
const SchoolTitle = styled.div`
  flex: 1;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
  padding: 10px 0px;
`;
const RestTitle = styled.div`
  width: 100%;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
`;
const School = styled.div`
  flex: 1;
  width: 100%;
  text-align: left;
  padding: 12px 0px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const RestBlock = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  width: 100%;
`;
const Rest = styled.div`
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: center;
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
  text-align: center;
  margin-top: 30px;
  margin-bottom: 60px;
`;
const MoreButton = styled(MoreSvg)`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;
export default SchoolNearby;
