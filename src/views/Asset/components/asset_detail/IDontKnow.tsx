import React from 'react';
import styled from 'styled-components';
import img from '../../../../images/helipad.png';
/**
 *  figma에 나온 willamsburg 사진나온 컴포넌트 => 무슨 용도인지 몰라서
 */
type IDontKnowProps = {};
const IDontKnow: React.FC<any> = ({ IDontKnowProps }) => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <DescriptionContainer>
        <Title>Willamsburg</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat. Aliquam
          erat volutpat. Sed convallis scelerisque enim at fermentum. Aliquam
          consectetur, est ac auctor iaculis, odio mi bibendum leo, in congue
          neque velit vel enim. Nullam vitae justo at mauris sodales feugiat.
          Praesent pellentesque ipsum eget tellus imperdiet ultrices. Sed
          ultricies nisi nec diam sodales fringilla. Quisque adipiscing cursus
          porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam bibendum scelerisque elit, eu pharetra dui pulvinar eget. Nam
          mollis mauris id tellus ultricies at porttitor neque vulputate. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Description>
        <ButtonBlock>
          <Button>{'Williamsburg Guide >'}</Button>
          <Button>{'All Neighborhoods >'}</Button>
        </ButtonBlock>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 83px;

  display: flex;
  width: 954px;
  height: 645px;
`;
const ImgContainer = styled.div`
  background: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  width: 100%;
`;
const DescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 15px;
  background-color: #eeeeee;
  color: #626262;
`;
const Title = styled.div`
  color: #4542e2;
  font-size: 48px;
  font-weight: 600;
  font-family: ${'Termina'};
  line-height: 70.8px;
  padding: 20px 0px;
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  font-family: ${'Helvetica Neue'};
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;
const Button = styled.button`
  font-family: ${'Helvetica Neue'};
  font-weight: 400;
  font-size: 18px;
  background: none;
  border: none;
  border-bottom: 1px solid #4542e2;
  color: #4542e2;
  line-height: 22.71px;
`;

export default IDontKnow;
