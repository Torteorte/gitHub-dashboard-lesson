import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  margin: 20px 0;
  list-style: none;
`;

export const StyledUserName = styled.h2`
  padding: 5px;
  margin: 0;
  font-weight: 400;
  font-size: 15px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  transition: 250ms ease-in-out;

  :hover {
    transform: scale(1.1);

    ${StyledUserName} {
      color: #ce7317;
    }
  }
`;

export const StyledUserItem = styled.li`
  padding: 5px;
`;

export const StyledUserAvatar = styled.img`
  width: 50px;
`;
