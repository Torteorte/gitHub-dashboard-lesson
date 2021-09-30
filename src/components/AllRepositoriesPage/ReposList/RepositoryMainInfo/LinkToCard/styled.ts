import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 1.05rem;
  color: rgb(9, 105, 218);
  font-weight: 400;
  letter-spacing: 0.25px;
  padding: 15px 0;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledSpanElement = styled.span`
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const StyledRepositoryIcon = styled.svg`
  fill: dimgrey;
  margin: -3px 7px -3px 0;
`;
