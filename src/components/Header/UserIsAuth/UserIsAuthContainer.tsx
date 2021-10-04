import React from 'react';
import {
  StyledContainer,
  StyledButtonLogout,
  StyledLinkToUserPage
} from './styled';

interface props {
  handlerLogout: (isAuth: boolean) => void;
}

export const UserIsAuthContainer: React.FC<props> = ({ handlerLogout }) => {
  const logout = () => {
    const value = false;
    handlerLogout(value);
  };

  return (
    <StyledContainer>
      <StyledLinkToUserPage title={`Login page`} to="/userPage">
        UserPage
      </StyledLinkToUserPage>
      <StyledButtonLogout title={`Logout`} onClick={logout}>
        Logout
      </StyledButtonLogout>
    </StyledContainer>
  );
};
