import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  margin: auto;
`;

export const StyledLinkToRepositories = styled(NavLink)`
  padding: 5px 10px;
  margin: 10px;
  text-align: center;
  font-size: 26px;
  border: 1px solid lightblue;
  border-radius: 10px;
  color: slategrey;
  background-color: #eaf2fa;

  :hover {
    background-color: #e6eef6;
  }
`;
