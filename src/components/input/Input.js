import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const SignUpPageStyles = styled.div`
  input {
    width: 100%;
    padding: 20px 0 20px 15px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
`;

const Input = ({
  type = "text",
  name = "",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <SignUpPageStyles>
      <input id={name} type={type} {...props} {...field} />
    </SignUpPageStyles>
  );
};

export default Input;
