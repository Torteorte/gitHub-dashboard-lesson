import React from 'react';
import { StyledButtonLogout, StyledLink } from './styled';
import { ROUTES } from '../../../common/routes/routes';
import { RootStateOrAny, useSelector } from 'react-redux';

interface props {
  handlerLogout: (isAuth: boolean) => void;
}

export const UserIsAuthContainer: React.FC<props> = ({ handlerLogout }) => {
  const {
    authReducer: { login }
  }: RootStateOrAny = useSelector((store) => store);

  const logout = () => {
    const auth = false;
    handlerLogout(auth);
  };

  return (
    <>
      <StyledLink title={`Login page`} to={`/profile/${login}`}>
        Profile Page
      </StyledLink>
      <StyledButtonLogout title={`Logout`} onClick={logout} to={ROUTES.login}>
        Logout
      </StyledButtonLogout>
    </>
  );
};
