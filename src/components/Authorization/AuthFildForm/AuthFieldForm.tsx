import React from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle
} from './styled';
import { Formik } from 'formik';

// interface Values {
//   email: string;
//   password: string;
// }

interface props {
  handlerLogin: (isAuth: boolean) => void;
}

export const AuthFieldForm: React.FC<props> = ({ handlerLogin }) => {
  const login = () => {
    const value = false;
    handlerLogin(value);
  };

  return (
    <StyledContainer>
      <StyledTitle>Sign in</StyledTitle>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={login}
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

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Formik>
    </StyledContainer>
  );
};
