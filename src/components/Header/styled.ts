import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  margin: 0;
  padding: 10px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  justify-content: space-between;
  background-color: aliceblue;
  -webkit-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  margin: 5px 0 5px 20px;
  text-align: left;
  color: slategrey;
`;

export const StyledLink = styled(NavLink)`
  font-size: 26px;
  margin: 5px 10px 5px 20px;
  padding: 0px 10px;
  text-align: center;
  color: slategrey;
  border: 1px solid lightblue;
  border-radius: 10px;
  background-color: #eaf2fa;

  :hover {
    background-color: #e6eef6;
  }
`;
