import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { InputField, InputType } from "./InputField";
import { RegisterFormField, RegisterFieldType } from "./RegisterFormField";
import Signup from "./SignUp";
let mockData = {
  baseInfo: [
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "last name",
      name: "lastName",
    },
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "first name",
      name: "firstName",
    },
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "email",
      name: "email",
    },
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "kakao ID",
      name: "kakaoId",
    },
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "password",
      name: "password",
    },
    {
      id: "1",
      type: RegisterFieldType.TEXT,
      title: "password confirmation",
      name: "passwordConfirmation",
    },
    {
      id: "1",
      type: RegisterFieldType.CHECKBOX,
      title: "I'm a private banker or real estate agent",
      name: "jop",
    },
  ],
  discover: [
    {
      id: "2",
      type: RegisterFieldType.CHECKBOX,
      title: "Search engine (Google, Naver, etc.)",
      name: "discover",
    },
    {
      id: "2",
      type: RegisterFieldType.CHECKBOX,
      title: "Recommended by friend or colleague",
      name: "discover",
    },
    {
      id: "2",
      type: RegisterFieldType.CHECKBOX,
      title: "Social media",
      name: "discover",
    },
    {
      id: "2",
      type: RegisterFieldType.CHECKBOX,
      title: "Blog or publication",
      name: "discover",
    },
    {
      id: "2",
      type: RegisterFieldType.TEXT,
      title: "Other",
      name: "discover",
    },
  ],
  interested: [
    {
      id: "3",
      type: RegisterFieldType.CHECKBOX,
      title: "Investment",
      name: "interested",
    },
    {
      id: "3",
      type: RegisterFieldType.CHECKBOX,
      title: "Rental Income Opportunity",
      name: "interested",
    },
    {
      id: "3",
      type: RegisterFieldType.CHECKBOX,
      title: "Second Home",
      name: "interested",
    },
    {
      id: "3",
      type: RegisterFieldType.CHECKBOX,
      title: "Relocating to U.S.",
      name: "interested",
    },
    {
      id: "3",
      type: RegisterFieldType.CHECKBOX,
      title: "Child’s U.S. Education",
      name: "interested",
    },
  ],
  idealPrice: [
    {
      id: "4",
      type: RegisterFieldType.CHECKBOX,
      title: "Under $500K",
      name: "idealPrice",
    },
    {
      id: "4",
      type: RegisterFieldType.CHECKBOX,
      title: "US $500K - $1mm",
      name: "idealPrice",
    },
    {
      id: "4",
      type: RegisterFieldType.CHECKBOX,
      title: "US $1mm-$2.5m",
      name: "idealPrice",
    },
    {
      id: "4",
      type: RegisterFieldType.CHECKBOX,
      title: "$2.5m-$5.0m",
      name: "idealPrice",
    },
    {
      id: "4",
      type: RegisterFieldType.CHECKBOX,
      title: "$5.0m-10m",
      name: "idealPrice",
    },
  ],
  preferredArea: [
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "CA – Los Angeles",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "CA – Orange County",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "CA – San Diego",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "CA – San Francisco",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "NV – Las Vegas",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "New York",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.CHECKBOX,
      title: "New Jersey",
      name: "preferredArea",
    },
    {
      id: "5",
      type: RegisterFieldType.TEXT,
      title: "Others (Fill in)",
      name: "preferredArea",
    },
  ],
};

type BaseInfoProps = {
  firstName: string;
  lastName: string;
  email: string;
  kakaoId: string;
  password: string;
};

type PropertyProps = {
  residential: string[];
  commercial: string[];
};

const RegisterForm = () => {
  const history = useHistory();
  const [baseInfo, setBaseInfo] = useState<BaseInfoProps>({
    lastName: "",
    firstName: "",
    email: "",
    kakaoId: "",
    password: "",
  });
  const [property, setProperty] = useState<PropertyProps>({
    residential: [],
    commercial: [],
  });
  const [discoverPath, setDiscoverPath] = useState<string[]>([]);
  const [interested, setInterested] = useState<string[]>([]);
  const [idealPrice, setIdealPrice] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState<string[]>([]);
  const [isAgent, setIsAgent] = useState<boolean>(false);
  const [discoverPathOther, setDiscoverPathOther] = useState<string>("");
  const [preferredAreaOther, setPreferredAreaOther] = useState<string>("");

  const handleBaseInfo = (name: string, value: string) => {
    setBaseInfo({ ...baseInfo, [name]: value });
  };
  const handleProperty = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { checked, value, name } = event.target;

    switch (name) {
      case "residential": {
        if (checked) {
          setProperty({
            ...property,
            residential: [...property.residential, value],
          });
        } else {
          let newProperty = property.residential.filter((ele) => ele !== value);
          setProperty({ ...property, residential: newProperty });
        }
        break;
      }
      case "commercial": {
        if (checked) {
          setProperty({
            ...property,
            commercial: [...property.commercial, value],
          });
        } else {
          let newProperty = property.commercial.filter((ele) => ele !== value);
          setProperty({ ...property, commercial: newProperty });
        }
        break;
      }
      default: {
        return;
      }
    }
  };
  const handleDiscoverPath = (checked: boolean, value: string) => {
    if (checked) {
      setDiscoverPath([...discoverPath, value]);
    } else {
      setDiscoverPath(discoverPath.filter((ele) => ele !== value));
    }
  };
  const handleInterested = (checked: boolean, value: string) => {
    if (checked) {
      setInterested([...interested, value]);
    } else {
      setInterested(interested.filter((ele) => ele !== value));
    }
  };
  const handleIdealPrice = (checked: boolean, value: string) => {
    if (checked) {
      setIdealPrice([...idealPrice, value]);
    } else {
      setIdealPrice(idealPrice.filter((ele) => ele !== value));
    }
  };
  const handlePreferredArea = (checked: boolean, value: string) => {
    if (checked) {
      setPreferredArea([...preferredArea, value]);
    } else {
      setPreferredArea(preferredArea.filter((ele) => ele !== value));
    }
  };
  const handleIsAgent = (checked: boolean, value: string) => {
    if (checked) {
      setIsAgent(true);
    } else {
      setIsAgent(false);
    }
  };
  const handleDiscoverPathOther = (name: string, value: string) => {
    setDiscoverPathOther(value);
  };
  const handlePreferredAreaOther = (name: string, value: string) => {
    setPreferredAreaOther(value);
  };
  console.log("property :", property);
  const onTryRegister = () => {
    let result = {
      ...baseInfo,
      isAgent,
      property,
      discoverPath: [...discoverPath, discoverPathOther],
      interested,
      idealPrice,
      preferredArea: [...preferredArea, preferredAreaOther],
    };
    console.log("result data :", result);
    history.push({
      pathname: "/auth/login",
    });
  };

  return (
    <Container>
      <Form>
        <Title>Sign up</Title>
        <Divider />
        <Signup handleBaseInfo={handleBaseInfo} handleIsAgent={handleIsAgent} />
        <SubTitle>
          4. What types of properties are you interested in? (check all that
          apply)
        </SubTitle>
        <Ol>
          <li>
            <SubTitle_Title>Residential</SubTitle_Title>
            <Ol type="a">
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Single Family Home</Item>
                  <Input
                    type="checkbox"
                    name="residential"
                    value="Single Family Home"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Townhouse / Condo</Item>
                  <Input
                    type="checkbox"
                    name="residential"
                    value="Townhouse / Condo"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
            </Ol>
          </li>

          <li>
            <SubTitle_Title>Commercial</SubTitle_Title>
            <Ol type="a">
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Multifamily units</Item>
                  <Input
                    type="checkbox"
                    name="commercial"
                    value="Multifamily units"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Retail</Item>
                  <Input
                    type="checkbox"
                    name="commercial"
                    value="Retail"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Industrial</Item>
                  <Input
                    type="checkbox"
                    name="commercial"
                    value="Industrial"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
              <li>
                <Label style={{ display: "flex" }}>
                  <Item>Land</Item>
                  <Input
                    type="checkbox"
                    name="commercial"
                    value="Land"
                    onChange={handleProperty}
                  />
                </Label>
              </li>
            </Ol>
          </li>
        </Ol>
        <SubTitle>5. How did you discover Helipad?</SubTitle>
        <Ol type="a">
          {mockData.discover.map((data, idx) => (
            <li key={idx}>
              {data.type === RegisterFieldType.CHECKBOX ? (
                <RegisterFormField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handleDiscoverPath}
                />
              ) : (
                <RegisterFormField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handleDiscoverPathOther}
                />
              )}
            </li>
          ))}
        </Ol>
        <SubTitle>
          6. Why are you interested in a home in the U.S.? (check all that
          apply)
        </SubTitle>
        <Ol type="a">
          {mockData.interested.map((data, idx) => (
            <li key={idx}>
              <RegisterFormField
                type={data.type}
                title={data.title}
                name={data.name}
                onChange={handleInterested}
              />
            </li>
          ))}
        </Ol>
        <SubTitle>
          7. What is your ideal price point? (check all that apply)
        </SubTitle>
        <Ol type="a">
          {mockData.idealPrice.map((data, idx) => (
            <li key={idx}>
              <RegisterFormField
                type={data.type}
                title={data.title}
                name={data.name}
                onChange={handleIdealPrice}
              />
            </li>
          ))}
        </Ol>
        <SubTitle>
          8. What is your preferred area? (check all that apply)
        </SubTitle>
        <Ol type="a">
          {mockData.preferredArea.map((data, idx) => (
            <li key={idx}>
              {data.type === RegisterFieldType.CHECKBOX ? (
                <RegisterFormField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handlePreferredArea}
                />
              ) : (
                <RegisterFormField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handlePreferredAreaOther}
                />
              )}
            </li>
          ))}
        </Ol>
      </Form>
      <Button onClick={onTryRegister}>Create account</Button>
    </Container>
  );
};

const Container = styled.div`
  font-weight: 400;
  width: 460px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Divider = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;
const SubTitle = styled.div`
  font-size: 20px;
  margin: 10px 0px;
`;
const SubTitle_Title = styled.div`
  font-size: 16px;
  margin: 5px 0px;
`;
const Item = styled.div`
  margin: 5px 0px;
`;
const Form = styled.form`
  margin-bottom: 20px;
`;

const Name = styled.div`
  display: grid;
  grid-template-columns: 220px 220px;
  grid-gap: 24px;
`;

const Button = styled.button`
  width: 465px;
  height: 46px;
  background: #7000ff;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;
const Ol = styled.ol`
  margin: 0;
`;
export default RegisterForm;
