import Input from "components/input/Input";
import Label from "components/label/Label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto;
    width: 120px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 40px;
    margin-bottom: 40px;
  }
  .field {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .input {
    width: 100%;
    padding: 20px 0 20px 15px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <SignUpPageStyles>
      {/* Logo + heading */}
      <div className="container">
        <img src="/logo.png" alt="" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="field">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              control={control}
            ></Input>
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
