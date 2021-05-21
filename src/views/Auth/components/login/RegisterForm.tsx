import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { InputField, InputType } from "./InputField";
import { CheckboxField, CheckBoxType } from "./RegisterFormField";

let mockData = {
  baseInfo: [
    {
      id: "1",
      type: CheckBoxType.TEXT,
      title: "1. First Name",
      name: "firstName",
    },
    {
      id: "1",
      type: CheckBoxType.TEXT,
      title: "2. Last name",
      name: "lastName",
    },
    {
      id: "1",
      type: CheckBoxType.TEXT,
      title: "3. Email",
      name: "email",
    },
    {
      id: "1",
      type: CheckBoxType.TEXT,
      title: "4. KaKao ID",
      name: "kakaoId",
    },
  ],
  discover: [
    {
      id: "2",
      type: CheckBoxType.CHECKBOX,
      title: "Search engine (Google, Naver, etc.)",
      name: "discover",
      onChange: "handleDiscoverPath",
    },
    {
      id: "2",
      type: CheckBoxType.CHECKBOX,
      title: "Recommended by friend or colleague",
      name: "discover",
    },
    {
      id: "2",
      type: CheckBoxType.CHECKBOX,
      title: "Social media",
      name: "discover",
    },
    {
      id: "2",
      type: CheckBoxType.CHECKBOX,
      title: "Blog or publication",
      name: "discover",
    },
    {
      id: "2",
      type: CheckBoxType.TEXT,
      title: "Other",
      name: "discover",
    },
  ],
  interested: [
    {
      id: "3",
      type: CheckBoxType.CHECKBOX,
      title: "Investment",
      name: "interested",
    },
    {
      id: "3",
      type: CheckBoxType.CHECKBOX,
      title: "Rental Income Opportunity",
      name: "interested",
    },
    {
      id: "3",
      type: CheckBoxType.CHECKBOX,
      title: "Second Home",
      name: "interested",
    },
    {
      id: "3",
      type: CheckBoxType.CHECKBOX,
      title: "Relocating to U.S.",
      name: "interested",
    },
    {
      id: "3",
      type: CheckBoxType.CHECKBOX,
      title: "Child’s U.S. Education",
      name: "interested",
    },
  ],
  idealPrice: [
    {
      id: "4",
      type: CheckBoxType.CHECKBOX,
      title: "Under $500K",
      name: "idealPrice",
    },
    {
      id: "4",
      type: CheckBoxType.CHECKBOX,
      title: "US $500K - $1mm",
      name: "idealPrice",
    },
    {
      id: "4",
      type: CheckBoxType.CHECKBOX,
      title: "US $1mm-$2.5m",
      name: "idealPrice",
    },
    {
      id: "4",
      type: CheckBoxType.CHECKBOX,
      title: "$2.5m-$5.0m",
      name: "idealPrice",
    },
    {
      id: "4",
      type: CheckBoxType.CHECKBOX,
      title: "$5.0m-10m",
      name: "idealPrice",
    },
  ],
  preferredArea: [
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "CA – Los Angeles",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "CA – Orange County",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "CA – San Diego",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "CA – San Francisco",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "NV – Las Vegas",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "New York",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.CHECKBOX,
      title: "New Jersey",
      name: "preferredArea",
    },
    {
      id: "5",
      type: CheckBoxType.TEXT,
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
};

const RegisterForm = () => {
  const history = useHistory();
  const [baseInfo, setBaseInfo] = useState<BaseInfoProps>({
    firstName: "",
    lastName: "",
    email: "",
    kakaoId: "",
  });
  const [discoverPath, setDiscoverPath] = useState<string[]>([]);
  const [interested, setInterested] = useState<string[]>([]);
  const [idealPrice, setIdealPrice] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState<string[]>([]);
  const [discoverPathOther, setDiscoverPathOther] = useState<string>("");
  const [preferredAreaOther, setPreferredAreaOther] = useState<string>("");

  const handleBaseInfo = (name: string, value: string) => {
    setBaseInfo({ ...baseInfo, [name]: value });
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
  const handleDiscoverPathOther = (name: string, value: string) => {
    setDiscoverPathOther(value);
  };
  const handlePreferredAreaOther = (name: string, value: string) => {
    setPreferredAreaOther(value);
  };
  const onTryRegister = () => {
    let result = {
      ...baseInfo,
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
      <Title>Register</Title>
      <Form>
        <Divider />
        {mockData.baseInfo.map((data) => (
          <CheckboxField
            type={data.type}
            title={data.title}
            name={data.name}
            onChange={handleBaseInfo}
          />
        ))}

        <SubTitle>5. How did you discover Helipad?</SubTitle>
        <Ol type="a">
          {mockData.discover.map((data) => (
            <li>
              {data.type === CheckBoxType.CHECKBOX ? (
                <CheckboxField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handleDiscoverPath}
                />
              ) : (
                <CheckboxField
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
          {mockData.interested.map((data) => (
            <CheckboxField
              type={data.type}
              title={data.title}
              name={data.name}
              onChange={handleInterested}
            />
          ))}
        </Ol>

        <SubTitle>
          7. What is your ideal price point? (check all that apply)
        </SubTitle>
        <Ol type="a">
          {mockData.idealPrice.map((data) => (
            <CheckboxField
              type={data.type}
              title={data.title}
              name={data.name}
              onChange={handleIdealPrice}
            />
          ))}
        </Ol>

        <SubTitle>
          8. What is your preferred area? (check all that apply)
        </SubTitle>
        <Ol type="a">
          {mockData.preferredArea.map((data) => (
            <li>
              {data.type === CheckBoxType.CHECKBOX ? (
                <CheckboxField
                  type={data.type}
                  title={data.title}
                  name={data.name}
                  onChange={handlePreferredArea}
                />
              ) : (
                <CheckboxField
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
      <Button onClick={onTryRegister}>Register</Button>
    </Container>
  );
};

const Container = styled.div`
  font-weight: 400;
`;
const Title = styled.div`
  font-size: 30px;
  width: 100%;
  height: 40px;
  text-align: center;
  border-bottom: 2px solid lightgray;
  margin-bottom: 20px;
`;
const SubTitle = styled.div``;
const Form = styled.form`
  margin-bottom: 20px;
`;
const Divider = styled.div``;
const Button = styled.button`
  width: 465px;
  height: 46px;
  background: #7000ff;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`;
const Ol = styled.ol`
  margin: 0;
`;
export default RegisterForm;
