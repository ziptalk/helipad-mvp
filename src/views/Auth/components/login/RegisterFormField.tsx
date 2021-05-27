import React, { useState } from "react";
import styled from "styled-components";
enum RegisterFieldType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  CHECKBOX = "checkbox",
}
type CheckboxFieldProps = {
  title: string;
  name: string;
  value: string[];
  onChange: (name: string, value: string) => void;
};
const RegisterFormField = ({ type, title, name, value, onChange }: any) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { checked, value } = event.target;
    if (event.target.type === "checkbox") {
      onChange(checked, value);
    } else {
      onChange(name, value);
    }
  };
  return (
    <Container>
      {type.valueOf() === "text" || type.valueOf() === "email" ? (
        <Label className="text">
          <Title>{title}</Title>
          <CheckBox
            className="text"
            type={type.valueOf()}
            name={name}
            value={value}
            onChange={handleOnChange}
          />
        </Label>
      ) : (
        <Label className="checkbox">
          <Title>{title}</Title>
          <CheckBox
            type={type.valueOf()}
            name={name}
            value={title}
            onChange={handleOnChange}
          />
        </Label>
      )}
    </Container>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  margin-right: 10px;
`;
const CheckBox = styled.input``;
const Select = styled.select``;
const Option = styled.option``;
const Container = styled.div`
  margin: 5px 0px;
  label {
    display: flex;
  }

  ${Title} {
    font-size: 16px;
  }

  .checkbox {
    ${CheckBox} {
      width: 20px;
      height: 20px;
    }
  }

  .text {
    ${CheckBox} {
      width: 60%;
      height: 25px;
    }
  }

  /* .checkbox {
    ${CheckBox} {
      margin: 0;
      width: 15px;
      height: 15px;
    }
  } */
`;
export { RegisterFormField, RegisterFieldType };
