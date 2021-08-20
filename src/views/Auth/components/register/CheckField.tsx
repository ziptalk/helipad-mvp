import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import "./CheckField.css";

type CheckboxFieldProps = {
  name: string;
  value: string;
  onChange: (checked: boolean, value: string, name: string) => void;
};
const CheckField = ({ name, value, onChange }: CheckboxFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = event.target;
    onChange(checked, value, name);
  };
  return (
    <Container>
      <Title htmlFor={name}>{value}</Title>
      <Label2
        id={name}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 24px;
    height: 24px;
    border: 1px solid #EAEAEA;
  }
`;
const Title = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
const Label = styled.label`
  width: 455px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Title} {
    padding-left: 50px;
  }
`;

const Label2 = styled.input.attrs({
  type: "checkbox",
})`
  border: 1px solid #EAEAEA;

  &:checked {
    background-color: skyblue;
  }
`;
export default CheckField;
