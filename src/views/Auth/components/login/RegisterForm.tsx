import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { InputField, InputType } from './InputField';
import { CheckboxField, CheckBoxType } from './CheckBoxField';
let mockData = [
  {
    title: 'How did you discover Helipad',
    name: 'discover',
    contents: [
      'Search engine (Google, Naver, etc.)',
      'Recommended by friend or colleague',
      'Social media',
      'Blog or publication',
      'Other',
    ],
  },
  {
    title:
      'Why are you interested in a home in the U.S.? (check all that apply)',
    name: 'interested',
    contents: [
      'Investment',
      'Rental Income Opportunity',
      'Second Home',
      'Relocating to U.S',
      "Child's U.S. Education",
    ],
  },
  {
    title: 'What is your ideal price point? (check all that apply)',
    name: 'idealPrice',
    contents: [
      'Under $500K',
      'US $500K - $1mm',
      'US $1mm - $2.5m',
      '$2.5m - $5.0m',
      '$5.0m - 10m',
      '$10m + ',
    ],
  },
  {
    title: 'What is your preferred area? (check all that apply)',
    name: 'preferredArea',
    contents: [
      'CA - Los Angeles',
      'CA - Orange County',
      'CA - San Diego',
      'CA - San Francisco',
      'NV - Las Vegas',
      'New York',
      'New Jersey',
      'Others (Fill in)',
    ],
  },
];
type mockDataProps = {
  title: string;
  name: string;
  contents: string[];
};
type SelectProps = {
  discover: string[];
  interested: string[];
  idealPrice: string[];
  preferredArea: string[];
};
const RegisterForm = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [kakaoId, setKakaoId] = useState<string>('');
  const [discoverPath, setDiscoverPath] = useState<string[]>([]);
  const [interested, setInterested] = useState<string[]>([]);
  const [idealPrice, setIdealPrice] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState<string[]>([]);
  const [discoverPathOther, setDiscoverPathOther] = useState<string>('');
  const [preferredAreaOther, setPreferredAreaOther] = useState<string>('');

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

  const onTryRegister = () => {
    let result = {
      firstName,
      lastName,
      email,
      kakaoId,
      discoverPath: [...discoverPath, discoverPathOther],
      interested,
      idealPrice,
      preferredArea: [...preferredArea, preferredAreaOther],
    };
    console.log('result data :', result);
    history.push({
      pathname: '/auth/login',
      state: { email: email },
    });
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form>
        <Divider />
        <CheckboxField
          type={CheckBoxType.TEXT}
          title="1. First name"
          name="first name"
          onChange={(name: string) => setFirstName(name)}
        />

        <CheckboxField
          type={CheckBoxType.TEXT}
          title="2. Last name"
          name="first name"
          onChange={(name: string) => setLastName(name)}
        />

        <CheckboxField
          type={CheckBoxType.EMAIL}
          title="3. Email"
          name="first name"
          onChange={(name: string) => setEmail(name)}
        />

        <CheckboxField
          type={CheckBoxType.TEXT}
          title="4. Kakao ID"
          name="first name"
          onChange={(name: string) => setKakaoId(name)}
        />

        <Label>5. How did you discover Helipad?</Label>
        <Ol type="a">
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Search engine (Google, Naver, etc.)"
              name="discover"
              onChange={handleDiscoverPath}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Recommended by friend or colleague"
              name="discover"
              onChange={handleDiscoverPath}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Social media"
              name="discover"
              onChange={handleDiscoverPath}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Blog or publication"
              name="discover"
              onChange={handleDiscoverPath}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.TEXT}
              title="Other"
              name="discover"
              onChange={(value: string) => setDiscoverPathOther(value)}
            />
          </li>
        </Ol>
        <Label>
          6. Why are you interested in a home in the U.S.? (check all that
          apply)
        </Label>
        <Ol type="a">
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Investment"
              name="interested"
              onChange={handleInterested}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Rental Income Opportunity"
              name="interested"
              onChange={handleInterested}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Second Home"
              name="interested"
              onChange={handleInterested}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Relocating to U.S."
              name="interested"
              onChange={handleInterested}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Child’s U.S. Education"
              name="interested"
              onChange={handleInterested}
            />
          </li>
        </Ol>
        <Label>7. What is your ideal price point? (check all that apply)</Label>
        <Ol type="a">
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="Under $500K"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="US $500K - $1mm"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="US $1mm-$2.5m"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="$2.5m-$5.0m"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="$5.0m-10m"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="$10m +"
              name="idealPrice"
              onChange={handleIdealPrice}
            />
          </li>
        </Ol>
        <Label>8. What is your preferred area? (check all that apply)</Label>
        <Ol type="a">
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="CA – Los Angeles"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="CA – Orange County"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="CA – San Diego"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="CA – San Francisco"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="NV – Las Vegas"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="New York"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.CHECKBOX}
              title="New Jersey"
              name="preferredArea"
              onChange={handlePreferredArea}
            />
          </li>
          <li>
            <CheckboxField
              type={CheckBoxType.TEXT}
              title="Others (Fill in)"
              name="preferredArea"
              onChange={(value: string) => setPreferredAreaOther(value)}
            />
          </li>
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
const Label = styled.label``;
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
