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

export const LoginForm: React.FC = () => {
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
          console.log(values);
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
