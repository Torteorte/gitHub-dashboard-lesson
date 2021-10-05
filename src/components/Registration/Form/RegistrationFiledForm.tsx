import React from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle
} from '../../Login/Form/styled';
import { Formik, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}

export const RegistrationFiledForm: React.FC = () => {
  return (
    <>
      <StyledTitle>Registration</StyledTitle>
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
          <StyledLabel htmlFor="userName">User name:</StyledLabel>
          <StyledInput
            id="userName"
            name="userName"
            placeholder="bigLama2000"
            type="text"
          />

          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <StyledLabel htmlFor="firstName">First Name:</StyledLabel>
          <StyledInput
            id="firstName"
            name="firstName"
            placeholder="Ivan"
            type="text"
          />

          <StyledLabel htmlFor="lastName">Last Name:</StyledLabel>
          <StyledInput
            id="lastName"
            name="lastName"
            placeholder="Ivanov"
            type="text"
          />

          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            id="password"
            name="password"
            placeholder=""
            type="password"
          />

          <StyledButton type="submit">Registration</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
