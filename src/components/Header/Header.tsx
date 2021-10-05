import React from 'react';
import { StyledHeader, StyledTitle, StyledContainer } from './styled';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { UserIsAuthContainer } from './HeaderUserContainer/UserIsAuthContainer';
import { logoutUserAC } from '../Login/actions';
import { LoginAndRegistration } from './HeaderUserContainer/LoginAndRegistration';
import { MainLinks } from './MainLinks/MainLinks';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerLogout = (isAuth: boolean) => {
    dispatch(logoutUserAC(isAuth));
  };

  return (
    <StyledHeader>
      <StyledTitle>GitHub Dashboard</StyledTitle>
      <MainLinks />
      <StyledContainer>
        {!isAuth ? (
          <LoginAndRegistration />
        ) : (
          <UserIsAuthContainer handlerLogout={handlerLogout} />
        )}
      </StyledContainer>
    </StyledHeader>
  );
};
