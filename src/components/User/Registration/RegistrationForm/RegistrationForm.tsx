import React from 'react';
import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledTitle
} from '../../Login/LoginForm/styled';

import { Formik } from 'formik';
import { SignupSchemaRegistration } from '../../../../common/utils/utils';
import { postRegistrationThunk } from '../../thunks';
import { useDispatch } from 'react-redux';

interface Values {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledTitle>Registration</StyledTitle>
      <Formik
        initialValues={{
          username: '',
          email: '',
          first_name: '',
          last_name: '',
          password: ''
        }}
        validationSchema={SignupSchemaRegistration}
        onSubmit={(values: Values) => {
          console.log(values);
          dispatch(postRegistrationThunk(values));
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledInputContainer>
              <StyledLabel htmlFor="username">User name:</StyledLabel>
              <StyledInput
                id="username"
                name="username"
                placeholder="bigLama2000"
                type="text"
                className={touched.username && errors.username && 'errorInput'}
              />
              {touched.username && errors.username && (
                <StyledError>{errors.username}</StyledError>
              )}
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <StyledInput
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
                className={touched.email && errors.email && 'errorInput'}
              />
              {touched.email && errors.email && (
                <StyledError>{errors.email}</StyledError>
              )}
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="first_name">First Name:</StyledLabel>
              <StyledInput
                id="first_name"
                name="first_name"
                placeholder="Ivan"
                type="text"
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="last_name">Last Name:</StyledLabel>
              <StyledInput
                id="last_name"
                name="last_name"
                placeholder="Ivanov"
                type="text"
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="password">Password:</StyledLabel>
              <StyledInput
                id="password"
                name="password"
                placeholder=""
                type="password"
                className={touched.password && errors.password && 'errorInput'}
              />
              {touched.password && errors.password && (
                <StyledError>{errors.password}</StyledError>
              )}
            </StyledInputContainer>

            <StyledButton type="submit">Registration</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
