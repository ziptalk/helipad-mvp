import styled from "styled-components";
import { ReactComponent as LineSvg } from "../../../images/InviteCodeForm/ic_line.svg";
import OurPartners from "../../../images/InviteCodeForm/ourPartners.jpg";
import OurRelationships from "../../../images/InviteCodeForm/ourRelationships.jpg";
const PartnerAndRelation = () => {
  return (
    <Container>
      <Section>
        <TextContainer>
          <Text>
            <Category>
              <Line />
              OUR PARTNERS
            </Category>
            <Title>
              Experience an exceptional level of service based on Helipad's
              trust, knowledge, and experience.
            </Title>
            We work with local financial advisors overseas such as private
            bankers and local real estate professionals to better assist our
            clients in efficient ways. Ask your financial advisors about our
            services.
            <Content>
              Helipad has established various professional relationship with
              contractors, financial advisors, CPA’s, attorneys to bring you the
              exceptional level of services based on trust, knowledge, and
              experience.
            </Content>
          </Text>
        </TextContainer>
        <ImageContainer imgPath={OurPartners}></ImageContainer>
      </Section>
      <Section>
        <ImageContainer imgPath={OurRelationships}></ImageContainer>
        <TextContainer>
          <Text>
            <Category>
              <Line />
              OUR RELATIONSHIPS
            </Category>
            <Title>
              Helipad efficiently supports customers with professional financial
              advisory services.
            </Title>
            <Content>
              We work with local financial advisors overseas such as private
              bankers and local real estate professionals to better assist our
              clients in efficient ways. Ask your financial advisors about our
              services.
            </Content>
          </Text>
        </TextContainer>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  margin: 50px 0px 100px 0px;
  width: 100vw;
  max-width: 1904px;
`;
const Section = styled.div`
  display: flex;
`;
const Line = styled(LineSvg)``;
const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 4px;
  color: #b69142;
  ${Line} {
    margin-right: 24px;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  position: relative;
`;
const Text = styled.div`
  width: 55%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -40% 0 0 -27.5%;
`;
const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;

  margin-bottom: 27px;
`;
const Content = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
`;
const ImageContainer: any = styled.div`
  flex: 1;
  width: 100%;
  height: 800px;
  background: url(${(props: any) => props.imgPath});
  background-size: cover;
`;
export default PartnerAndRelation;
