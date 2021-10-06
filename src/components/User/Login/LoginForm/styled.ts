import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledTitle = styled.h1`
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledForm = styled(Form)`
  width: 80%;
  margin: auto;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  text-align: left;
  font-size: 15px;
`;

export const StyledInput = styled(Field)`
  display: block;
  width: 100%;
  margin: 0 auto 25px;
  padding: 5px 5px 5px 10px;
  text-align: left;
  font-size: 14px;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  outline: none;

  :focus,
  :hover {
    border-color: #4aa3dc;
    background-color: #f8fbff;
  }

  &.errorInput {
    border: 1px solid red;
  }
`;

export const StyledButton = styled.button`
  display: block;
  margin: 40px auto 20px;
  padding: 5px 15px;
  text-align: center;
  font-size: 16px;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  background-color: aliceblue;

  :hover {
    border-color: #4aa3dc;
    background-color: #e5f2fd;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledError = styled.div`
  color: red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -25px;
`;
