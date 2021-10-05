import React from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle
} from './styled';
import { Formik, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}

const userTrain = {
  id: '545',
  login: 'alex',
  email: 'mailemail@mail.com',
  password: 'pes'
};

interface props {
  handlerLogin: (
    id: string,
    name: string,
    email: string,
    isAuth: boolean
  ) => void;
}

export const AuthFieldForm: React.FC<props> = ({ handlerLogin }) => {
  return (
    <>
      <StyledTitle>Sign in</StyledTitle>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          if (
            userTrain.email === values.email &&
            userTrain.password === values.password
          ) {
            console.log(123);
            handlerLogin(userTrain.id, userTrain.login, userTrain.email, true);
          }
        }}
      >
        <StyledForm>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            id="password"
            name="password"
            placeholder=""
            type="password"
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
