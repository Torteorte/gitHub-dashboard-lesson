import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUserContainer = styled.div`
  width: 300px;
  padding: 30px;
  margin: 20px auto;
  list-style: none;
  background-color: #f6fdfd;
  border: 1px solid lightgrey;
  border-radius: 12px;
  -webkit-box-shadow: 0 5px 10px 4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 4px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 4px rgba(34, 60, 80, 0.2);
`;

export const StyledUserAvatar = styled.img`
  width: 100px;
  margin: 0 20px 20px;
`;

export const StyledUserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #464646;
`;

export const StyledLinkBack = styled(NavLink)`
  margin-top: 10px;
  font-size: 16px;
`;
