import React from 'react';
import { loginUserAC } from './actions';
import { StyledContainer } from './styled';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../common/routes/routes';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { GitHubLogo } from '../../common/components/GithubLogo/GithubLogo';
import { AuthFieldForm } from './Form/AuthFieldForm';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerLogin = (
    id: string,
    name: string,
    email: string,
    isAuth: boolean
  ) => {
    dispatch(loginUserAC(id, name, email, isAuth));
  };

  if (isAuth) {
    return <Redirect to={ROUTES.allRepos} />;
  }

  return (
    <>
      <GitHubLogo />
      <StyledContainer>
        <AuthFieldForm handlerLogin={handlerLogin} />
      </StyledContainer>
    </>
  );
};
