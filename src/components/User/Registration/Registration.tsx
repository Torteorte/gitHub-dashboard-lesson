import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../common/routes/routes';
import { StyledContainer } from '../Login/styled';

import { GitHubLogo } from '../../../common/components/GithubLogo/GithubLogo';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';

export const Registration: React.FC = () => {
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
        <RegistrationForm />
      </StyledContainer>
    </>
  );
};
