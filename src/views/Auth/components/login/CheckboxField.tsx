import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

type CheckboxFieldProps = {
  name: string;
  value: string;
  onChange: (checked: boolean, value: string, name: string) => void;
};
const CheckboxField = ({ name, value, onChange }: CheckboxFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = event.target;
    onChange(checked, value, name);
  };
  return (
    <Container>
      <Label>
        <Title>{value}</Title>
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Label>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0px;
`;
const Title = styled.div`
  font-size: 17px;
`;
const Label = styled.label`
  width: 455px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Title} {
    padding-left: 50px;
  }

  input {
    width: 20px;
    height: 20px;
  }
`;
export default CheckboxField;
