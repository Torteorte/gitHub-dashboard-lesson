import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../common/routes/routes';
import { StyledContainer } from '../Login/styled';

import { GitHubLogo } from '../../common/components/GithubLogo/GithubLogo';
import { RegistrationFiledForm } from './Form/RegistrationFiledForm';

export const Registration: React.FC = () => {
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  if (isAuth) {
    return <Redirect to={ROUTES.allRepos} />;
  }

  return (
    <>
      <GitHubLogo />
      <StyledContainer>
        <RegistrationFiledForm />
      </StyledContainer>
    </>
  );
};
