import React from 'react';
import { StyledContainer } from './styled';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../common/routes/routes';
import { RootStateOrAny, useSelector } from 'react-redux';

import { GitHubLogo } from '../../../common/components/GithubLogo/GithubLogo';
import { LoginForm } from './LoginForm/LoginForm';

export const Login: React.FC = () => {
  const {
    userReducer: { token }
  }: RootStateOrAny = useSelector((store) => store);

  if (token) {
    return <Redirect to={ROUTES.profilePage} />;
  }

  return (
    <>
      <GitHubLogo />
      <StyledContainer>
        <LoginForm />
      </StyledContainer>
    </>
  );
};
