import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledContainer = styled.div`
  width: 350px;
  margin: auto;
  padding: 20px 5px;
  //border: 1px solid lightblue;
  border-radius: 12px;
  -webkit-box-shadow: 0 4px 15px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 4px 15px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 4px 15px 2px rgba(34, 60, 80, 0.2);
`;

export const StyledTitle = styled.h1`
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
  margin: 0 auto 20px;
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
`;

export const StyledButton = styled.button`
  display: block;
  margin: 30px auto 20px;
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
