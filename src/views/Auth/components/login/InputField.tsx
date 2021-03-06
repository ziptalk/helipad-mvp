import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Input: any = styled.input`
  height: 45px;
  border: 1px solid #ebebeb;
`;

type InputFieldProps = {
  title: string;
  type: InputType;
  onChange: (param: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ title, type, onChange }) => {
  const [value, setValue] = useState("");
  const temp = "";
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  return (
    <Container>
      <Input
        type={type.valueOf()}
        placeHolder={title}
        onChange={handleOnChange}
      />
    </Container>
  );
};

enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

export { InputField, InputType };
