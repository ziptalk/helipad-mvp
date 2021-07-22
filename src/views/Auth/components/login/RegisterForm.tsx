import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../router/config/Provider/AuthProvider";
import styled from "styled-components";
import SignUpUseCase, { ErrorCode } from "../../../../domain/SignUpUseCase";
import { InputField, InputType } from "./InputField";
import { useHistory } from "react-router";
import CheckboxField from "./CheckboxField";
type InterestPropertyProps = {
  residential: string[];
  commercial: string[];
};
const RegisterForm = () => {
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [kakaoId, setKakaoId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isAgent, setIsAgent] = useState<boolean>(false);
  const [interestProperty, setInterestProperty] =
    useState<InterestPropertyProps>({
      residential: [],
      commercial: [],
    });
  const [discoverPath, setDiscoverPath] = useState<string[]>([]);
  const [discoverPathOther, setDiscoverPathOther] = useState<string>("");
  const [interestHome, setInterestHome] = useState<string[]>([]);
  const [idealPrice, setIdealPrice] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState<string[]>([]);
  const [preferredAreaOther, setPreferredAreaOther] = useState<string>("");
  const history = useHistory();
  const { setHeaderMode } = useContext(AuthContext);
  useEffect(() => {
    setHeaderMode("black");
  });
  const onTryRegister = () => {
    let userInfo = {
      lastName,
      firstName,
      email,
      password,
      passwordConfirm,
      isAgent,
      interestProperty,
      discoverPath,
      discoverPathOther,
      interestHome,
      idealPrice,
      preferredArea,
      preferredAreaOther,
    };

    history.push({
      pathname: "/login",
    });
  };

  const onSuccess = () => {
    alert("Sign-up success. Please login again.");
    history.push("/auth/login");
  };

  const onError = (error: any) => {
    switch (error.code) {
      case ErrorCode.EMAIL_ALREADY_IN_USE:
        alert("This email is already in-use. Please use other account.");
        break;
      case ErrorCode.WEAK_PASSWORD:
        alert("You should use stronger password");
        break;
      default:
        break;
    }
  };
  const handleInterestProperty = (
    checked: boolean,
    value: string,
    name: string
  ) => {
    switch (name) {
      case "property_residential": {
        if (checked) {
          setInterestProperty({
            ...interestProperty,
            residential: [...interestProperty.residential, value],
          });
        } else {
          let newProperty = interestProperty.residential.filter(
            (ele) => ele !== value
          );
          setInterestProperty({
            ...interestProperty,
            residential: newProperty,
          });
        }
        break;
      }
      case "property_commercial": {
        if (checked) {
          setInterestProperty({
            ...interestProperty,
            commercial: [...interestProperty.commercial, value],
          });
        } else {
          let newProperty = interestProperty.commercial.filter(
            (ele) => ele !== value
          );
          setInterestProperty({ ...interestProperty, commercial: newProperty });
        }
        break;
      }
      default: {
        return;
      }
    }
  };
  const handleDiscoverPath = (
    checked: boolean,
    value: string,
    name?: string
  ) => {
    if (checked) {
      setDiscoverPath([...discoverPath, value]);
    } else {
      setDiscoverPath(discoverPath.filter((ele) => ele !== value));
    }
  };
  const handleDiscoverPathOther = (value: string) => {
    setDiscoverPathOther(value);
  };

  const handleInterestHome = (
    checked: boolean,
    value: string,
    name?: string
  ) => {
    if (checked) {
      setInterestHome([...interestHome, value]);
    } else {
      setInterestHome(interestHome.filter((ele) => ele !== value));
    }
  };

  const handleIdealPrice = (checked: boolean, value: string, name?: string) => {
    if (checked) {
      setIdealPrice([...idealPrice, value]);
    } else {
      setIdealPrice(idealPrice.filter((ele) => ele !== value));
    }
  };

  const handlePreferredArea = (
    checked: boolean,
    value: string,
    name?: string
  ) => {
    if (checked) {
      setPreferredArea([...preferredArea, value]);
    } else {
      setPreferredArea(preferredArea.filter((ele) => ele !== value));
    }
  };

  const handlePreferredAreaOther = (value: string) => {
    setPreferredAreaOther(value);
  };
  const onTrySignUp = (e: any) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password != PasswordConfirmation");
      return;
    }
    let userInfo = {
      lastName,
      firstName,
      kakaoId,
      email,
      password,
      passwordConfirm,
      isAgent,
      interestProperty,
      discoverPath,
      discoverPathOther,
      interestHome,
      idealPrice,
      preferredArea,
      preferredAreaOther,
    };

    SignUpUseCase.withEmail(userInfo)
      .then((value) => {
        console.log(value);
        onSuccess();
      })
      .catch((error) => onError(error));
  };

  return (
    <Container>
      <form>
        <Title>Sign up</Title>
        <Divider />
        <Name>
          <InputField
            type={InputType.TEXT}
            title="last name"
            onChange={(name: string) => setLastName(name)}
          />
          <InputField
            type={InputType.TEXT}
            title="first name"
            onChange={(name: string) => setFirstName(name)}
          />
        </Name>
        <InputField
          type={InputType.TEXT}
          title="kakao ID"
          onChange={(kakaoId: string) => setKakaoId(kakaoId)}
        />
        <InputField
          type={InputType.EMAIL}
          title="email"
          onChange={(email: string) => setEmail(email)}
        />
        <InputField
          type={InputType.PASSWORD}
          title="password"
          onChange={(password: string) => {
            setPassword(password);
          }}
        />
        <InputField
          type={InputType.PASSWORD}
          title="password confirmation"
          onChange={(password: string) => setPasswordConfirm(password)}
        />
        <Agent>
          <AgentText>I'm a private banker or real estate agent</AgentText>
          <AgentCheckBox
            onChange={(e) => {
              setIsAgent(e.target.checked);
            }}
          />
        </Agent>

        <SubTitle>
          4. What types of properties are you interested in? (check all that
          apply)
        </SubTitle>
        <Category>1. Residential</Category>
        <CheckboxField
          name="property_residential"
          value="Single Family Home"
          onChange={handleInterestProperty}
        />
        <CheckboxField
          name="property_residential"
          value="Townhouse / Condo"
          onChange={handleInterestProperty}
        />
        <Category>2. Commercial</Category>
        <CheckboxField
          name="property_commercial"
          value="Multifamily units"
          onChange={handleInterestProperty}
        />
        <CheckboxField
          name="property_commercial"
          value="Retail
          "
          onChange={handleInterestProperty}
        />
        <CheckboxField
          name="property_commercial"
          value="Industrial"
          onChange={handleInterestProperty}
        />
        <CheckboxField
          name="property_commercial"
          value="Land"
          onChange={handleInterestProperty}
        />

        <SubTitle>5. How did you discover Helipad?</SubTitle>
        <CheckboxField
          name="discoverPath"
          value="Search engine (Google, Naver, etc.)"
          onChange={handleDiscoverPath}
        />
        <CheckboxField
          name="discoverPath"
          value="Recommended by friend or colleague"
          onChange={handleDiscoverPath}
        />
        <CheckboxField
          name="discoverPath"
          value="Social media"
          onChange={handleDiscoverPath}
        />
        <CheckboxField
          name="discoverPath"
          value="Blog or publication"
          onChange={handleDiscoverPath}
        />
        <OtherBlock>
          <OtherTitle>Other</OtherTitle>
          <input
            type="text"
            value={discoverPathOther}
            onChange={(e) => setDiscoverPathOther(e.target.value)}
          ></input>
        </OtherBlock>

        <SubTitle>
          6. Why are you interested in a home in the U.S.? (check all that
          apply)
        </SubTitle>
        <CheckboxField
          name="interestHome"
          value="Investment"
          onChange={handleInterestHome}
        />
        <CheckboxField
          name="interestHome"
          value="Rental Income Opportunity"
          onChange={handleInterestHome}
        />
        <CheckboxField
          name="interestHome"
          value="Second Home"
          onChange={handleInterestHome}
        />
        <CheckboxField
          name="interestHome"
          value="Relocating to U.S."
          onChange={handleInterestHome}
        />
        <CheckboxField
          name="interestHome"
          value="Child’s U.S. Education"
          onChange={handleInterestHome}
        />

        <SubTitle>
          7. What is your ideal price point? <br />
          (check all that apply)
        </SubTitle>
        <CheckboxField
          name="idealPrice"
          value="Under $500K"
          onChange={handleIdealPrice}
        />
        <CheckboxField
          name="idealPrice"
          value="US $500K - $1mm"
          onChange={handleIdealPrice}
        />
        <CheckboxField
          name="idealPrice"
          value="US $1mm-$2.5m"
          onChange={handleIdealPrice}
        />
        <CheckboxField
          name="idealPrice"
          value="$2.5m-$5.0m"
          onChange={handleIdealPrice}
        />
        <CheckboxField
          name="idealPrice"
          value="$5.0m-10m"
          onChange={handleIdealPrice}
        />

        <SubTitle>
          8. What is your preferred area? <br />
          (check all that apply)
        </SubTitle>
        <CheckboxField
          name="preferredArea"
          value="CA – Los Angeles
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="CA – Orange County
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="CA – San Diego
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="CA – San Francisco
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="NV – Las Vegas
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="New York
          "
          onChange={handlePreferredArea}
        />
        <CheckboxField
          name="preferredArea"
          value="New Jersey
          "
          onChange={handlePreferredArea}
        />
        <OtherBlock>
          <OtherTitle>Others (fill in)</OtherTitle>
          <input
            type="text"
            value={preferredAreaOther}
            onChange={(e) => setPreferredAreaOther(e.target.value)}
          ></input>
        </OtherBlock>
        <Button onClick={onTrySignUp}>Create account</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;

const Name = styled.div`
  display: grid;
  grid-template-columns: 220px 220px;
  grid-gap: 24px;
`;

const Agent = styled.div`
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  background: #ebebeb;
  border: 1px solid #d7d7d7;
  height: 45px;
  align-items: center;
  justify-content: space-between;
`;

const AgentText = styled.div`
  font-size: 20px;
  color: #4542e2;
`;

const AgentCheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin: 20px 0px 10px;
`;
const SubTitle_Title = styled.div`
  font-size: 16px;
  margin: 5px 0px;
`;
const Category = styled.div`
  font-size: 19px;
`;

const OtherBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 455px;
  padding-left: 50px;
`;
const OtherTitle = styled.div`
  font-size: 17px;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  background-color: #4542e2;
  color: #ffffff;
  font-size: 20px;
`;

export default RegisterForm;
