import React from 'react';
import { StyledHeader, StyledTitle, StyledContainer } from './styled';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { UserIsAuthContainer } from './HeaderUserContainer/UserIsAuthContainer';
import { logoutUserAC } from '../User/actions';
import { LoginAndRegistration } from './HeaderUserContainer/LoginAndRegistration';
import { MainLinks } from './MainLinks/MainLinks';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {
    userReducer: { token }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerLogout = () => {
    dispatch(logoutUserAC());
  };

  return (
    <StyledHeader>
      <StyledTitle>GitHub Dashboard</StyledTitle>
      <MainLinks />
      <StyledContainer>
        {!token ? (
          <LoginAndRegistration />
        ) : (
          <UserIsAuthContainer handlerLogout={handlerLogout} />
        )}
      </StyledContainer>
    </StyledHeader>
  );
};
