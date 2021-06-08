import React from "react";
import styled from "styled-components";
import ProcessSummary from "./ProcessSummary";
import Asset from "../../../../model/Asset";
import BuildingInformation from "../../../../model/BuildingInformation";
import ProcessDetail from "./ProcessDetail";
import ProcessDetailContainer from "./ProcessDetailContainer";
type ProcessProps = {};

const Process: React.FC<any> = ({ location }) => {
  const contactInfo = location.state;
  const testAsset = new Asset(
    "test_id",
    "test_agent",
    true,
    12345000,
    "Active",
    214,
    63.39,
    904,
    10,
    "Condo",
    "-",
    100,
    100,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat. Aliquam erat volutpat. Sed convallis scelerisque enim at fermentum. Aliquam consectetur, est ac auctor iaculis, odio mi bibendum leo, in congue neque velit vel enim. Nullam vitae justo at mauris sodales feugiat. Praesent pellentesque ipsum eget tellus imperdiet ultrices. Sed ultricies nisi nec diam sodales fringilla. Quisque adipiscing cursus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum scelerisque elit, eu pharetra dui pulvinar eget. Nam mollis mauris id tellus ultricies at porttitor neque vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    [
      "Private Roof Deck",
      "Common Roof Deck",
      "Exposed Brick",
      "Hardwood Floors",
      "High Ceilings",
      "Elevator",
      "Washer / Dryer in Unit",
      "Central AC",
    ],
    "",
    0,
    0,
    new BuildingInformation(
      "https://d3mi7e2vp4lzjl.cloudfront.net/LISTING_EDITOR/putImages/a556ec7f-d697-459a-85ee-943a77acc8be/33410b94-f019-49a3-a74e-375586a4fa51/1500x1000.jpg",
      "Williamsburg, Brooklyn, NY 11249",
      "66 North 1st Street, Unit 3B",
      2,
      1,
      5,
      70,
      "Kings County",
      "Factory Lofts",
      3,
      6,
      21,
      "-",
      1910,
      "Pre-war",
      "Lowrise",
      ""
    )
  );

  return (
    <Container>
      <ProcessSummary data={testAsset}></ProcessSummary>
      <Divider />
      <ProcessDetailContainer contactInfo={contactInfo} />
    </Container>
  );
};

const Container = styled.div``;
const Divider = styled.div`
  border: 1px solid #000000;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export default Process;
// export default class Process {

// }
