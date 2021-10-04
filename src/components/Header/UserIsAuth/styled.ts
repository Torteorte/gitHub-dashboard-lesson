import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  margin-left: auto;
`;

export const StyledLinkToUserPage = styled(NavLink)`
  font-size: 18px;
  padding: 15px;
  text-align: left;
  color: slategrey;
`;

export const StyledButtonLogout = styled(NavLink)`
  font-size: 18px;
  padding: 10px 15px;
  text-align: left;
  color: slategrey;
  background-color: inherit;
  border: none;
  transition: 200ms;

  :hover {
    cursor: pointer;
    color: indianred;
  }
`;
