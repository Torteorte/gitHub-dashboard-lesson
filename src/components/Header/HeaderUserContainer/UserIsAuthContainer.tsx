import React from 'react';
import { StyledButtonLogout, StyledLink } from './styled';
import { ROUTES } from '../../../common/routes/routes';
import { RootStateOrAny, useSelector } from 'react-redux';

interface props {
  handlerLogout: () => void;
}

export const UserIsAuthContainer: React.FC<props> = ({ handlerLogout }) => {
  const {
    userReducer: { login }
  }: RootStateOrAny = useSelector((store) => store);

  const logout = () => {
    handlerLogout();
  };

  return (
    <>
      <StyledLink title={`Login page`} to={`/user/${login}`}>
        Profile Page
      </StyledLink>
      <StyledButtonLogout title={`Logout`} onClick={logout} to={ROUTES.login}>
        Logout
      </StyledButtonLogout>
    </>
  );
};
