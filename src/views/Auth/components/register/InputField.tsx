import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Input: any = styled.input`
  height: 56px;
  border: 1px solid #ebebeb;
  background: ${(props: any) => props.gray && "#EAEAEA"};
  padding-left: 16px;
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

  const renderByTitle = (title: string) => {
    switch (title) {
      case "email":
        return (
          <Input
            gray={true}
            type={type.valueOf()}
            placeholder={title}
            onChange={handleOnChange}
          />
        );
      case "password":
        return (
          <Input
            gray={true}
            type={type.valueOf()}
            placeholder={title}
            onChange={handleOnChange}
          />
        );

      case "last name":
        return (
          <Input
            type={type.valueOf()}
            placeholder={title}
            onChange={handleOnChange}
          />
        );

      case "first name":
        return (
          <Input
            type={type.valueOf()}
            placeholder={title}
            onChange={handleOnChange}
          />
        );
      default:
        return;
    }
  };
  return (
    <Container>
      {title === "email" || title === "password" ? (
        <Input
          gray={true}
          type={type.valueOf()}
          placeholder={title}
          onChange={handleOnChange}
        />
      ) : (
        <Input
          type={type.valueOf()}
          placeholder={title}
          onChange={handleOnChange}
        />
      )}
    </Container>
  );
};

enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

export { InputField, InputType };
