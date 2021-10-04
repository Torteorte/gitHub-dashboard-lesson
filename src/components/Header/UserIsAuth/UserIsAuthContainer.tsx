import React from 'react';
import {
  StyledContainer,
  StyledButtonLogout,
  StyledLinkToUserPage
} from './styled';
import { ROUTES } from '../../../common/routes/routes';

interface props {
  handlerLogout: (
    id: string,
    name: string,
    email: string,
    isAuth: boolean
  ) => void;
}

export const UserIsAuthContainer: React.FC<props> = ({ handlerLogout }) => {
  const logout = () => {
    const id = '';
    const name = '';
    const email = '';
    const auth = false;
    handlerLogout(id, name, email, auth);
  };

  return (
    <StyledContainer>
      <StyledLinkToUserPage title={`Login page`} to="/userPage">
        UserPage
      </StyledLinkToUserPage>
      <StyledButtonLogout title={`Logout`} onClick={logout} to={ROUTES.login}>
        Logout
      </StyledButtonLogout>
    </StyledContainer>
  );
};
