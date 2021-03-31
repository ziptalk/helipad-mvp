import styled from 'styled-components';
import React from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const Title = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  height: 45px;
  border: 1px solid #EBEBEB;
`;

type InputFieldProps = {
    title: string
}

const InputField: React.FC<InputFieldProps> = ({title}) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Input />
        </Container>
    )
}

export default InputField;